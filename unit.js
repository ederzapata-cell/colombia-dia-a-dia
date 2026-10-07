
const params = new URLSearchParams(window.location.search);
const unit = Number(params.get("unit"));

const state = {
  meta: null,
  bank: null,
  practiceQuestion: null,
  practiceAnswered: 0,
  practiceCorrect: 0,
  testQuestions: [],
  testIndex: 0,
  testAnswers: {}
};

function shuffle(input) {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function storageKey() {
  return `tktReadyModule1Unit${unit}`;
}

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey()) || "{}");
  } catch {
    return {};
  }
}

function writeProgress(patch) {
  const current = readProgress();
  localStorage.setItem(storageKey(), JSON.stringify({ ...current, ...patch }));
}

function setStage(stage) {
  document.querySelectorAll(".unit-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.stage === stage);
  });
  document.querySelectorAll(".unit-stage-panel").forEach(panel => {
    panel.classList.toggle("active", panel.dataset.panel === stage);
  });
  if (stage === "results") renderSavedResult();
  history.replaceState(null, "", `?unit=${unit}#${stage}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scoreBand(score) {
  if (score >= 90) return {
    label: "Strong",
    recommendation: "Excellent work. Your result is strong. Keep the concept fresh and continue with the next unit."
  };
  if (score >= 70) return {
    label: "Developing well",
    recommendation: "Good progress. Review the questions you missed, then continue when you feel secure."
  };
  if (score >= 50) return {
    label: "Review recommended",
    recommendation: "Review the Learn and TKT Strategy sections, then try a fresh Mini Test."
  };
  return {
    label: "Study this unit again",
    recommendation: "Return to Learn and Practice before taking another Mini Test."
  };
}

async function loadUnit() {
  if (!Number.isInteger(unit) || unit < 1 || unit > 15) {
    location.href = "./module1.html";
    return;
  }

  const [contentResponse, bankResponse] = await Promise.all([
    fetch("./data/module1/unit-learning-content.json"),
    fetch(`./data/module1/tkt-ready-m1-u${unit}-question-bank.json`)
  ]);

  if (!contentResponse.ok || !bankResponse.ok) {
    throw new Error("Unit data could not be loaded.");
  }

  const allContent = await contentResponse.json();
  state.meta = allContent[String(unit)];
  state.bank = await bankResponse.json();

  document.title = `TKT Ready — Unit ${unit}`;
  document.querySelector("#unitEyebrow").textContent = `MODULE 1 · UNIT ${unit}`;
  document.querySelector("#unitTitle").textContent = state.meta.title;

  renderLearn();
  renderExamples();
  renderStrategy();
  updateLatestScore();
  loadPracticeQuestion();

  const initialStage = location.hash.replace("#", "");
  const validStages = ["learn","examples","practice","strategy","mini-test","results"];
  setStage(validStages.includes(initialStage) ? initialStage : "learn");
}

function renderLearn() {
  const holder = document.querySelector("#learnCards");
  holder.innerHTML = state.meta.learn.map(([title, copy], i) => `
    <article class="microcard card">
      <span class="microcard-number">${String(i + 1).padStart(2, "0")}</span>
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `).join("");
}

function renderExamples() {
  const holder = document.querySelector("#exampleList");
  holder.innerHTML = state.meta.examples.map(([label, example]) => `
    <article class="example-card card">
      <span>${label}</span>
      <strong>${example}</strong>
    </article>
  `).join("");
}

function renderStrategy() {
  const holder = document.querySelector("#strategyList");
  holder.innerHTML = state.meta.strategy.map((tip, i) => `
    <article class="strategy-card card">
      <span>${i + 1}</span>
      <p>${tip}</p>
    </article>
  `).join("");
}

function practicePool() {
  return state.bank.questions.filter(q => q.section === "practice");
}

function testPool() {
  return state.bank.questions.filter(q => q.section === "test");
}

function loadPracticeQuestion() {
  const pool = practicePool();
  state.practiceQuestion = shuffle(pool)[0];

  document.querySelector("#practiceSkill").textContent =
    state.practiceQuestion.skill.replaceAll("_", " ").toUpperCase();

  document.querySelector("#practicePrompt").textContent = state.practiceQuestion.prompt;
  document.querySelector("#practiceFeedback").hidden = true;
  document.querySelector("#nextPracticeQuestion").hidden = true;

  const answers = document.querySelector("#practiceAnswers");
  answers.innerHTML = "";
  shuffle(state.practiceQuestion.options).forEach(option => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerPractice(option, button));
    answers.appendChild(button);
  });

  updatePracticeSummary();
}

function answerPractice(option, button) {
  const q = state.practiceQuestion;
  const buttons = [...document.querySelectorAll("#practiceAnswers .answer-option")];
  if (buttons.some(b => b.disabled)) return;

  const correct = option === q.correctAnswer;
  state.practiceAnswered += 1;
  if (correct) state.practiceCorrect += 1;

  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === q.correctAnswer) b.classList.add("correct-answer");
  });

  if (!correct) button.classList.add("wrong-answer");

  const feedback = document.querySelector("#practiceFeedback");
  feedback.hidden = false;
  feedback.className = `feedback-box ${correct ? "correct" : "incorrect"}`;
  feedback.innerHTML = `
    <strong>${correct ? "Correct" : "Not quite"}</strong>
    <p>${q.explanation}</p>
  `;

  document.querySelector("#nextPracticeQuestion").hidden = false;
  updatePracticeSummary();
}

function updatePracticeSummary() {
  document.querySelector("#practiceCounter").textContent =
    `Questions answered ${state.practiceAnswered}`;
  document.querySelector("#practiceAccuracy").textContent =
    state.practiceAnswered
      ? `Accuracy ${Math.round((state.practiceCorrect / state.practiceAnswered) * 100)}%`
      : "Accuracy —";
}

function startMiniTest() {
  state.testQuestions = shuffle(testPool()).slice(0, 10).map(q => ({
    ...q,
    options: shuffle(q.options)
  }));
  state.testIndex = 0;
  state.testAnswers = {};

  document.querySelector("#miniTestIntro").hidden = true;
  document.querySelector("#miniTestArea").hidden = false;
  renderTestQuestion();
}

function renderTestQuestion() {
  const q = state.testQuestions[state.testIndex];
  document.querySelector("#testCounter").textContent =
    `Question ${state.testIndex + 1} of 10`;
  document.querySelector("#testProgressFill").style.width =
    `${(state.testIndex + 1) * 10}%`;
  document.querySelector("#testPrompt").textContent = q.prompt;

  const holder = document.querySelector("#testAnswers");
  holder.innerHTML = "";
  q.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "answer-option";
    if (state.testAnswers[q.id] === option) button.classList.add("selected-answer");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      state.testAnswers[q.id] = option;
      renderTestQuestion();
    });
    holder.appendChild(button);
  });

  document.querySelector("#previousTestQuestion").disabled = state.testIndex === 0;
  document.querySelector("#nextTestQuestion").hidden = state.testIndex === 9;
  document.querySelector("#submitMiniTest").hidden = state.testIndex !== 9;
}

function submitMiniTest() {
  const unanswered = state.testQuestions.filter(q => !state.testAnswers[q.id]);
  if (unanswered.length) {
    alert(`Please answer all 10 questions. ${unanswered.length} remaining.`);
    return;
  }

  const review = state.testQuestions.map(q => {
    const selectedAnswer = state.testAnswers[q.id];
    return {
      questionId: q.id,
      prompt: q.prompt,
      selectedAnswer,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      isCorrect: selectedAnswer === q.correctAnswer
    };
  });

  const correct = review.filter(x => x.isCorrect).length;
  const percentage = correct * 10;
  const band = scoreBand(percentage);

  const result = {
    correct,
    total: 10,
    percentage,
    label: band.label,
    recommendation: band.recommendation,
    completedAt: new Date().toISOString(),
    review
  };

  const progress = readProgress();
  const best = Math.max(progress.bestMiniTestPct || 0, percentage);

  writeProgress({
    latestMiniTestPct: percentage,
    bestMiniTestPct: best,
    latestResult: result,
    miniTestAttempts: (progress.miniTestAttempts || 0) + 1
  });

  updateLatestScore();
  setStage("results");
}

function updateLatestScore() {
  const progress = readProgress();
  const score = progress.latestMiniTestPct;
  const holder = document.querySelector("#latestUnitScore strong");
  if (holder) holder.textContent = Number.isFinite(score) ? `${score}%` : "—";
}

function renderSavedResult() {
  const result = readProgress().latestResult;

  document.querySelector("#resultsEmpty").hidden = !!result;
  document.querySelector("#resultsContent").hidden = !result;

  if (!result) return;

  document.querySelector("#resultScore").textContent = `${result.percentage}%`;
  document.querySelector("#resultRaw").textContent = `${result.correct}/10`;
  document.querySelector("#resultLabel").textContent = result.label;
  document.querySelector("#resultRecommendation").textContent = result.recommendation;

  const mistakes = result.review.filter(x => !x.isCorrect);
  document.querySelector("#mistakeList").innerHTML = mistakes.length
    ? mistakes.map(x => `
        <article class="mistake-item">
          <h4>${x.prompt}</h4>
          <p><b>Your answer:</b> ${x.selectedAnswer}</p>
          <p><b>Correct answer:</b> ${x.correctAnswer}</p>
          <p class="mistake-explanation">${x.explanation}</p>
        </article>
      `).join("")
    : `<p class="perfect-score">Perfect score — no mistakes to review.</p>`;
}

document.addEventListener("click", (event) => {
  const stageButton = event.target.closest("[data-next]");
  if (stageButton) setStage(stageButton.dataset.next);
});

document.querySelectorAll(".unit-tab").forEach(button => {
  button.addEventListener("click", () => setStage(button.dataset.stage));
});

document.querySelector("#newPracticeQuestion").addEventListener("click", loadPracticeQuestion);
document.querySelector("#nextPracticeQuestion").addEventListener("click", loadPracticeQuestion);
document.querySelector("#startMiniTest").addEventListener("click", startMiniTest);

document.querySelector("#previousTestQuestion").addEventListener("click", () => {
  if (state.testIndex > 0) {
    state.testIndex -= 1;
    renderTestQuestion();
  }
});

document.querySelector("#nextTestQuestion").addEventListener("click", () => {
  if (state.testIndex < 9) {
    state.testIndex += 1;
    renderTestQuestion();
  }
});

document.querySelector("#submitMiniTest").addEventListener("click", submitMiniTest);

document.querySelector("#retryMiniTest").addEventListener("click", () => {
  document.querySelector("#miniTestIntro").hidden = false;
  document.querySelector("#miniTestArea").hidden = true;
  setStage("mini-test");
});

loadUnit().catch(error => {
  console.error(error);
  document.querySelector("#unitTitle").textContent = "Unit unavailable";
  document.querySelector(".topbar-subtitle").textContent =
    "The unit data could not be loaded. Check that the data files are in the repository.";
});
