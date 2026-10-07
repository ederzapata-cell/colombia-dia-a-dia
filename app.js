
const UNIT_TITLES = {"1": "Parts of Speech", "2": "Grammatical Structures", "3": "Lexis: Meaning & Word Formation", "4": "Lexical Relationships & Register", "5": "Phonology: Sounds & Stress", "6": "Phonology: Intonation & Connected Speech", "7": "Functions", "8": "Language Skills & Subskills", "9": "Motivation, Exposure & Acquisition", "10": "Errors & L1/L2 Learning", "11": "Learners: Characteristics & Needs", "12": "Presenting Language", "13": "Teaching Activities & Techniques", "14": "Teaching Approaches & Lesson Frameworks", "15": "Assessment"};

function showPrototypeMessage(message) {
  const existing = document.querySelector(".prototype-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "prototype-toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 220);
  }, 2600);
}

const params = new URLSearchParams(window.location.search);
const unit = Number(params.get("unit"));

if (unit && UNIT_TITLES[unit]) {
  const title = document.querySelector("#unitTitle");
  if (title) {
    title.textContent = `Unit ${unit} — ${UNIT_TITLES[unit]}`;
    document.title = `TKT Ready — Unit ${unit}`;
  }
}

document.querySelectorAll("[data-part-review]").forEach((button) => {
  button.addEventListener("click", () => {
    const part = button.dataset.partReview;
    showPrototypeMessage(`Part ${part} Review screen is the next connection.`);
  });
});

const mockButton = document.querySelector("#openMockIntro");
if (mockButton) {
  mockButton.addEventListener("click", () => {
    showPrototypeMessage("Full Mock intro screen is the next connection.");
  });
}

document.querySelectorAll(".unit-stage-card").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".unit-stage-card").forEach((b) => b.classList.remove("active-stage"));
    button.classList.add("active-stage");
    showPrototypeMessage(`${button.textContent} screen will be connected next.`);
  });
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("profile-card")) return;
    button.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-1px)" },
        { transform: "translateY(0)" }
      ],
      { duration: 180 }
    );
  });
});
