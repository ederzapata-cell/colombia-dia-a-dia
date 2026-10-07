const result = JSON.parse(localStorage.getItem("tktReadyLatestExamResult") || "null");

if (!result) location.href = "./module1.html";

function labelFor(score) {
  if (score >= 80) return "Strong performance";
  if (score >= 70) return "Developing well";
  if (score >= 55) return "Review recommended";
  return "Build more exam readiness";
}

function messageFor(score) {
  if (score >= 80) return "Strong result. Review your weakest units, then use another fresh attempt to confirm consistency.";
  if (score >= 70) return "Good progress. Target your lowest-scoring units before your next attempt.";
  if (score >= 55) return "You are building useful exam knowledge. Review weak areas before trying another exam-style attempt.";
  return "Return to the priority units and build more practice before your next exam-style attempt.";
}

document.querySelector("#examResultScore").textContent = `${result.percentage}%`;
document.querySelector("#examResultRaw").textContent = `${result.correct}/${result.total}`;
document.querySelector("#examResultType").textContent =
  result.mode === "full_mock" ? "MODULE 1 · FULL MOCK" : `MODULE 1 · PART ${result.part} REVIEW`;
document.querySelector("#examResultLabel").textContent = labelFor(result.percentage);
document.querySelector("#examResultMessage").textContent = messageFor(result.percentage);

document.querySelector("#partBreakdown").innerHTML = Object.entries(result.partStats || {})
  .filter(([,stat]) => stat.total > 0)
  .map(([part, stat]) => `<div class="breakdown-row"><span>Part ${part}</span><strong>${stat.percentage}%</strong></div>`)
  .join("");

document.querySelector("#unitBreakdown").innerHTML = Object.entries(result.unitStats || {})
  .sort((a,b) => Number(a[0]) - Number(b[0]))
  .map(([unit, stat]) => `<div class="breakdown-row"><span>Unit ${unit}</span><strong>${stat.percentage}%</strong></div>`)
  .join("");

const mistakes = (result.review || []).filter(x => !x.isCorrect);
document.querySelector("#mistakeCount").textContent = `${mistakes.length} mistake${mistakes.length === 1 ? "" : "s"}`;
document.querySelector("#examMistakeList").innerHTML = mistakes.length
  ? mistakes.map(item => `
      <article class="mistake-item">
        <h4>${item.prompt}</h4>
        <p><b>Your answer:</b> ${item.selectedAnswer ?? "No answer"}</p>
        <p><b>Correct answer:</b> ${item.correctAnswer}</p>
        ${item.explanation ? `<p class="mistake-explanation">${item.explanation}</p>` : ""}
      </article>
    `).join("")
  : `<p class="perfect-score">Perfect score — no mistakes to review.</p>`;

document.querySelector("#retryExam").addEventListener("click", () => {
  location.href = result.mode === "full_mock"
    ? "./exam.html?mode=mock"
    : `./exam.html?mode=part&part=${result.part}`;
});
