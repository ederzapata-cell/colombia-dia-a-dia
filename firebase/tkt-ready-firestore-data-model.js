// TKT Ready — Firestore Progress Data Model Helpers
// v1.0.0
// Pure data-shaping helpers. Firebase SDK wiring comes later.

export const SCHEMA_VERSION = 1;

export function moduleDocId(moduleNumber = 1) {
  return `module-${moduleNumber}`;
}

export function unitDocId(unitNumber) {
  return `unit-${String(unitNumber).padStart(2, "0")}`;
}

export function userPath(uid) {
  return `users/${uid}`;
}

export function modulePath(uid, moduleNumber = 1) {
  return `users/${uid}/modules/${moduleDocId(moduleNumber)}`;
}

export function unitPath(uid, unitNumber, moduleNumber = 1) {
  return `${modulePath(uid, moduleNumber)}/units/${unitDocId(unitNumber)}`;
}

export function attemptPath(uid, attemptId, moduleNumber = 1) {
  return `${modulePath(uid, moduleNumber)}/attempts/${attemptId}`;
}

export function responsePath(uid, attemptId, questionId, moduleNumber = 1) {
  return `${attemptPath(uid, attemptId, moduleNumber)}/responses/${questionId}`;
}

export function createUserDoc({
  email = null,
  displayName = null,
  createdAt = null,
  lastLoginAt = null
} = {}) {
  return {
    schemaVersion: SCHEMA_VERSION,
    email,
    displayName,
    createdAt,
    lastLoginAt,
    activeModule: 1,
    onboardingComplete: false
  };
}

export function createModuleSummary() {
  return {
    module: 1,
    status: "not_started",
    startedAt: null,
    lastActivityAt: null,
    currentUnit: 1,
    completedUnits: [],
    completedUnitCount: 0,
    overallProgressPct: 0,
    readiness: {
      score: 0,
      level: "not_ready",
      confidenceScore: 0,
      confidenceLabel: "Low",
      updatedAt: null
    },
    latestFullMock: {
      attemptId: null,
      percentage: null,
      completedAt: null
    },
    bestFullMock: {
      attemptId: null,
      percentage: null,
      completedAt: null
    },
    partSummary: {
      1: { latest: null, best: null },
      2: { latest: null, best: null },
      3: { latest: null, best: null }
    },
    priorityUnits: [],
    nextAction: {
      type: "unit",
      target: "unit-01",
      label: "Start Unit 1"
    }
  };
}

export function createUnitProgress(unit, title) {
  return {
    module: 1,
    unit,
    title,
    status: "not_started",
    learnCompleted: false,
    practiceCompleted: false,
    miniTestAttempts: 0,
    latestMiniTestPct: null,
    bestMiniTestPct: null,
    mastery: null,
    masteryStatus: "No evidence",
    practiceStats: {
      questionsAnswered: 0,
      correct: 0,
      accuracyPct: null
    },
    lastActivityAt: null,
    completedAt: null
  };
}

export function createAttemptDoc({
  attemptId,
  type,
  part = null,
  unit = null,
  correct,
  total,
  percentage,
  durationSeconds = null,
  startedAt = null,
  completedAt,
  signature = null,
  questionCount,
  taskCount = null,
  bankVersion = "1.0.0",
  partStats = null,
  unitStats = null
}) {
  if (!attemptId) throw new Error("attemptId is required.");
  if (!["unit_mini_test", "part_review", "full_mock"].includes(type)) {
    throw new Error(`Unsupported attempt type: ${type}`);
  }

  return {
    attemptId,
    module: 1,
    type,
    part,
    unit,
    correct,
    total,
    percentage,
    durationSeconds,
    startedAt,
    completedAt,
    signature,
    questionCount,
    taskCount,
    bankVersion,
    partStats,
    unitStats
  };
}

export function createResponseDoc({
  questionId,
  taskId = null,
  part = null,
  unit,
  skill = null,
  difficulty = null,
  taskType,
  selectedAnswer = null,
  correctAnswer,
  isCorrect,
  optionOrder = null,
  answeredAt = null,
  bankVersion = "1.0.0"
}) {
  if (!questionId) throw new Error("questionId is required.");
  if (!unit) throw new Error("unit is required.");

  return {
    questionId,
    taskId,
    module: 1,
    part,
    unit,
    skill,
    difficulty,
    taskType,
    selectedAnswer,
    correctAnswer,
    isCorrect,
    optionOrder,
    answeredAt,
    bankVersion
  };
}

export function updateUnitFromMiniTest(unitDoc, attemptDoc) {
  if (attemptDoc.type !== "unit_mini_test") {
    throw new Error("Expected a unit_mini_test attempt.");
  }

  const best = unitDoc.bestMiniTestPct == null
    ? attemptDoc.percentage
    : Math.max(unitDoc.bestMiniTestPct, attemptDoc.percentage);

  let masteryStatus = "Review recommended";
  if (attemptDoc.percentage >= 80) masteryStatus = "Strong";
  else if (attemptDoc.percentage >= 65) masteryStatus = "Developing";

  return {
    ...unitDoc,
    status: "completed",
    miniTestAttempts: (unitDoc.miniTestAttempts || 0) + 1,
    latestMiniTestPct: attemptDoc.percentage,
    bestMiniTestPct: best,
    mastery: attemptDoc.percentage,
    masteryStatus,
    lastActivityAt: attemptDoc.completedAt,
    completedAt: unitDoc.completedAt || attemptDoc.completedAt
  };
}

export function buildModuleSummaryPatch({
  readinessResult,
  historySummary,
  completedUnits = [],
  currentUnit = null,
  lastActivityAt = null
}) {
  const completed = [...new Set(completedUnits)].sort((a, b) => a - b);
  const priorityUnits =
    readinessResult?.unitMastery
      ?.filter(u => u.mastery != null && u.mastery < 65)
      ?.sort((a, b) => a.mastery - b.mastery)
      ?.slice(0, 3)
      ?.map(u => u.unit) || [];

  const firstRecommendation = readinessResult?.recommendations?.[0] || null;

  return {
    module: 1,
    status: completed.length === 15 ? "completed" : (completed.length ? "in_progress" : "not_started"),
    lastActivityAt,
    currentUnit,
    completedUnits: completed,
    completedUnitCount: completed.length,
    overallProgressPct: Math.round((completed.length / 15) * 100),
    readiness: {
      score: readinessResult?.score ?? 0,
      level: readinessResult?.level?.id ?? "not_ready",
      confidenceScore: readinessResult?.confidence?.score ?? 0,
      confidenceLabel: readinessResult?.confidence?.label ?? "Low",
      updatedAt: lastActivityAt
    },
    latestFullMock: {
      attemptId: historySummary?.latestFullMock?.attemptId ?? null,
      percentage: historySummary?.latestFullMock?.percentage ?? null,
      completedAt: historySummary?.latestFullMock?.completedAt ?? null
    },
    bestFullMock: {
      attemptId: historySummary?.bestFullMock?.attemptId ?? null,
      percentage: historySummary?.bestFullMock?.percentage ?? null,
      completedAt: historySummary?.bestFullMock?.completedAt ?? null
    },
    priorityUnits,
    nextAction: firstRecommendation
      ? {
          type: firstRecommendation.type,
          target: firstRecommendation.units?.length
            ? `unit-${String(firstRecommendation.units[0]).padStart(2, "0")}`
            : null,
          label: firstRecommendation.title
        }
      : {
          type: null,
          target: null,
          label: null
        }
  };
}
