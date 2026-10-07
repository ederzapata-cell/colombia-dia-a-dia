import {
  buildPartReview,
  buildFullMock,
  scoreAttempt,
  getAttemptQuestionIds
} from "./engine/tkt-ready-m1-exam-engine.js";

const params = new URLSearchParams(location.search);
const mode = params.get("mode") === "part" ? "part" : "mock";
const requestedPart = Number(params.get("part"));

const state = {
  attempt: null,
  currentTaskIndex: 0,
  currentItemIndex: 0,
  answers: {},
  remainingSeconds: 0,
  timerId: null,
  submitted: false
};

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem("tktReadyExamHistory") || "[]");
  } catch {
    return [];
  }
}

function buildFreshAttempt() {
  const history = loadHistory();
  const usedSignatures = history.map(x => x.signature).filter(Boolean);
  const recentQuestionIds = history
    .slice(0, 3)
    .flatMap(x => Array.isArray(x.questionIds) ? x.questionIds : []);

  if (mode === "part") {
    if (![1,2,3].includes(requestedPart)) {
      location.href = "./module1.html";
      return;
    }
    state.attempt = buildPartReview(requestedPart, { usedSignatures, recentQuestionIds });
  } else {
    state.attempt = buildFullMock({ usedSignatures, recentQuestionIds });
  }

  state.remainingSeconds = state.attempt.durationMinutes * 60;
}

function currentTask() {
  return state.attempt.tasks[state.currentTaskIndex];
}

function currentItem() {
  return currentTask().items[state.currentItemIndex];
}

function selectedFor(item) {
  return state.answers[item.id] ?? null;
}

function answeredCount() {
  return Object.keys(state.answers).length;
}

function renderExam() {
  document.title = `TKT Ready — ${state.attempt.title}`;
  document.querySelector("#examTitle").textContent = state.attempt.title;
  document.querySelector("#examEyebrow").textContent =
    state.attempt.mode === "full_mock"
      ? "MODULE 1 · FULL MOCK"
      : `MODULE 1 · PART ${state.attempt.part} REVIEW`;

  document.querySelector("#examTaskCount").textContent =
    `${state.attempt.taskCount} tasks`;

  renderTaskButtons();
  renderCurrentQuestion();
  updateProgress();
  updateTimer();
}

function renderTaskButtons() {
  const holder = document.querySelector("#taskButtons");

  holder.innerHTML = state.attempt.tasks.map((task, index) => {
    const answered = task.items.filter(item => selectedFor(item) != null).length;
    return `
      <button class="task-nav-button ${index === state.currentTaskIndex ? "active" : ""}" type="button" data-task="${index}">
        <span>Task ${index + 1}</span>
        <small>${answered}/${task.items.length}</small>
      </button>
    `;
  }).join("");

  holder.querySelectorAll("[data-task]").forEach(button => {
    button.addEventListener("click", () => {
      state.currentTaskIndex = Number(button.dataset.task);
      state.currentItemIndex = 0;
      renderExam();
    });
  });
}

function renderCurrentQuestion() {
  const task = currentTask();
  const item = currentItem();
  const selected = selectedFor(item);

  document.querySelector("#taskLabel").textContent =
    `TASK ${state.currentTaskIndex + 1} · QUESTION ${state.currentItemIndex + 1}/${task.items.length}`;
  document.querySelector("#taskInstruction").textContent = task.instruction;

  const prompt = task.taskType === "matching" ? item.example : item.prompt;
  const options = task.taskType === "matching" ? task.optionBank : item.options;

  const holder = document.querySelector("#examQuestionArea");
  holder.innerHTML = `
    <div class="exam-question-block">
      <h3>${prompt}</h3>
      <div class="answer-list">
        ${options.map(option => `
          <button class="answer-option ${selected === option ? "selected-answer" : ""}" type="button" data-value="${encodeURIComponent(option)}">
            ${option}
          </button>
        `).join("")}
      </div>
    </div>
  `;

  holder.querySelectorAll("[data-value]").forEach(button => {
    button.addEventListener("click", () => {
      state.answers[item.id] = decodeURIComponent(button.dataset.value);
      renderExam();
    });
  });

  const first = state.currentTaskIndex === 0 && state.currentItemIndex === 0;
  const lastTask = state.currentTaskIndex === state.attempt.tasks.length - 1;
  const lastItem = state.currentItemIndex === currentTask().items.length - 1;

  document.querySelector("#previousExamQuestion").disabled = first;
  document.querySelector("#nextExamQuestion").disabled = lastTask && lastItem;
}

function move(delta) {
  let taskIndex = state.currentTaskIndex;
  let itemIndex = state.currentItemIndex + delta;

  if (itemIndex >= state.attempt.tasks[taskIndex].items.length) {
    taskIndex += 1;
    itemIndex = 0;
  } else if (itemIndex < 0) {
    taskIndex -= 1;
    if (taskIndex >= 0) {
      itemIndex = state.attempt.tasks[taskIndex].items.length - 1;
    }
  }

  if (taskIndex < 0 || taskIndex >= state.attempt.tasks.length) return;

  state.currentTaskIndex = taskIndex;
  state.currentItemIndex = itemIndex;
  renderExam();
}

function updateProgress() {
  const answered = answeredCount();
  const total = state.attempt.questionCount;
  document.querySelector("#examProgressText").textContent = `${answered}/${total}`;
  document.querySelector("#examProgressFill").style.width = `${(answered / total) * 100}%`;
}

function updateTimer() {
  const minutes = Math.floor(state.remainingSeconds / 60);
  const seconds = state.remainingSeconds % 60;
  document.querySelector("#examTimer").textContent =
    `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}

function startTimer() {
  state.timerId = setInterval(() => {
    state.remainingSeconds -= 1;
    updateTimer();

    if (state.remainingSeconds <= 0) {
      clearInterval(state.timerId);
      finishAttempt();
    }
  }, 1000);
}

function showSubmitModal() {
  const unanswered = state.attempt.questionCount - answeredCount();
  document.querySelector("#submitModalText").textContent =
    unanswered > 0
      ? `You still have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}.`
      : "All questions are answered. You can submit now.";
  document.querySelector("#submitModal").hidden = false;
}

function enrichReview(scored) {
  const itemMap = new Map();
  state.attempt.tasks.forEach(task => {
    task.items.forEach(item => {
      itemMap.set(item.id, {
        prompt: task.taskType === "matching" ? item.example : item.prompt,
        explanation: item.explanation || null
      });
    });
  });

  return scored.review.map(row => ({
    ...row,
    prompt: itemMap.get(row.questionId)?.prompt || row.questionId,
    explanation: itemMap.get(row.questionId)?.explanation || row.explanation || null
  }));
}

function finishAttempt() {
  if (state.submitted) return;
  state.submitted = true;
  clearInterval(state.timerId);

  const responses = Object.entries(state.answers).map(([questionId, selectedAnswer]) => ({
    questionId,
    selectedAnswer
  }));

  const scored = scoreAttempt(state.attempt, responses);
  const result = {
    ...scored,
    review: enrichReview(scored),
    mode: state.attempt.mode,
    part: state.attempt.part,
    title: state.attempt.title,
    signature: state.attempt.signature,
    questionIds: getAttemptQuestionIds(state.attempt),
    completedAt: new Date().toISOString(),
    durationSeconds: state.attempt.durationMinutes * 60 - state.remainingSeconds
  };

  localStorage.setItem("tktReadyLatestExamResult", JSON.stringify(result));

  const history = loadHistory();
  history.unshift(result);
  localStorage.setItem("tktReadyExamHistory", JSON.stringify(history.slice(0, 25)));

  location.href = "./exam-results.html";
}

document.querySelector("#previousExamQuestion").addEventListener("click", () => move(-1));
document.querySelector("#nextExamQuestion").addEventListener("click", () => move(1));
document.querySelector("#submitExamAside").addEventListener("click", showSubmitModal);
document.querySelector("#submitExamMain").addEventListener("click", showSubmitModal);
document.querySelector("#cancelSubmit").addEventListener("click", () => {
  document.querySelector("#submitModal").hidden = true;
});
document.querySelector("#confirmSubmit").addEventListener("click", finishAttempt);

window.addEventListener("beforeunload", (event) => {
  if (!state.submitted && answeredCount() > 0) {
    event.preventDefault();
    event.returnValue = "";
  }
});

try {
  buildFreshAttempt();
  renderExam();
  startTimer();
} catch (error) {
  console.error(error);
  document.querySelector("#examTitle").textContent = "Exam unavailable";
  document.querySelector("#taskInstruction").textContent =
    "The exam could not be generated. Return to Module 1 and try again.";
}
