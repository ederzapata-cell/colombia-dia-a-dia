// TKT Ready — Module 1 Progress & Readiness Engine
// v1.0.0
// Internal preparation indicator only.
// It must never be presented as an official Cambridge score, band prediction or pass guarantee.

export const readinessConfig = {
  "product": "TKT Ready",
  "module": 1,
  "version": "1.0.0",
  "readinessDisclaimer": "TKT Ready Readiness is an internal preparation indicator. It is not an official Cambridge score, band prediction or guarantee of exam performance.",
  "levels": [
    {
      "id": "not_ready",
      "label": "Not ready",
      "minScore": 0,
      "maxScore": 54
    },
    {
      "id": "developing",
      "label": "Developing",
      "minScore": 55,
      "maxScore": 69
    },
    {
      "id": "almost_ready",
      "label": "Almost ready",
      "minScore": 70,
      "maxScore": 100
    },
    {
      "id": "tkt_ready",
      "label": "TKT Ready",
      "minScore": 80,
      "maxScore": 100,
      "gates": {
        "minimumFullMocks": 2,
        "minimumLatestFullMock": 75,
        "minimumPartScore": 65,
        "minimumUnitsWithEvidence": 12
      }
    }
  ],
  "scoreWeights": {
    "fullMock": 0.6,
    "partReviews": 0.2,
    "unitMiniTests": 0.2
  },
  "fullMockRecencyWeights": [
    0.5,
    0.3,
    0.2
  ],
  "evidenceConfidence": {
    "fullMocks": {
      "maxPoints": 50,
      "fullCreditAt": 2
    },
    "partReviews": {
      "maxPoints": 20,
      "fullCreditAtDistinctParts": 3
    },
    "unitMiniTests": {
      "maxPoints": 30,
      "fullCreditAtDistinctUnits": 15
    },
    "bands": [
      {
        "label": "Low",
        "min": 0,
        "max": 34
      },
      {
        "label": "Medium",
        "min": 35,
        "max": 69
      },
      {
        "label": "High",
        "min": 70,
        "max": 100
      }
    ]
  },
  "unitMastery": {
    "strong": {
      "min": 80,
      "max": 100
    },
    "developing": {
      "min": 65,
      "max": 79
    },
    "reviewRecommended": {
      "min": 0,
      "max": 64
    }
  },
  "recommendationRules": {
    "maxPriorityUnits": 3,
    "weakUnitThreshold": 65,
    "strongUnitThreshold": 80
  }
};

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function round(value) {
  return Math.round(value);
}

function toTimestamp(value) {
  if (!value) return 0;
  const n = Date.parse(value);
  return Number.isNaN(n) ? 0 : n;
}

function sortNewestFirst(history) {
  return [...history].sort((a, b) => toTimestamp(b.completedAt) - toTimestamp(a.completedAt));
}

function avg(values) {
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function latestByKey(history, keyFn) {
  const result = new Map();
  for (const item of sortNewestFirst(history)) {
    const key = keyFn(item);
    if (key == null) continue;
    if (!result.has(key)) result.set(key, item);
  }
  return result;
}

function normalizePercentage(attempt) {
  if (Number.isFinite(attempt.percentage)) return clamp(attempt.percentage);
  if (Number.isFinite(attempt.correct) && Number.isFinite(attempt.total) && attempt.total > 0) {
    return clamp((attempt.correct / attempt.total) * 100);
  }
  return null;
}

export function normalizeAttempt(attempt) {
  const percentage = normalizePercentage(attempt);
  if (percentage == null) throw new Error("Attempt needs percentage or correct/total.");

  return {
    attemptId: attempt.attemptId || `${attempt.type || "attempt"}-${attempt.completedAt || Date.now()}`,
    module: attempt.module ?? 1,
    type: attempt.type,
    part: attempt.part ?? null,
    unit: attempt.unit ?? null,
    correct: Number.isFinite(attempt.correct) ? attempt.correct : null,
    total: Number.isFinite(attempt.total) ? attempt.total : null,
    percentage: round(percentage),
    completedAt: attempt.completedAt || new Date().toISOString(),
    durationSeconds: Number.isFinite(attempt.durationSeconds) ? attempt.durationSeconds : null,
    partStats: attempt.partStats || null,
    unitStats: attempt.unitStats || null,
    signature: attempt.signature || null
  };
}

export function addAttempt(history, attempt) {
  const normalized = normalizeAttempt(attempt);
  const filtered = history.filter(item => item.attemptId !== normalized.attemptId);
  return sortNewestFirst([normalized, ...filtered]);
}

function getRecentFullMocks(history, limit = 3) {
  return sortNewestFirst(history)
    .filter(item => item.type === "full_mock")
    .slice(0, limit);
}

function weightedRecentMockAverage(fullMocks) {
  if (!fullMocks.length) return null;
  const weights = readinessConfig.fullMockRecencyWeights.slice(0, fullMocks.length);
  const weightTotal = weights.reduce((a, b) => a + b, 0);

  return fullMocks.reduce((sum, attempt, index) => {
    return sum + attempt.percentage * weights[index];
  }, 0) / weightTotal;
}

function getLatestPartReviews(history) {
  return latestByKey(
    history.filter(item => item.type === "part_review" && [1,2,3].includes(Number(item.part))),
    item => Number(item.part)
  );
}

function getLatestUnitMiniTests(history) {
  return latestByKey(
    history.filter(item => item.type === "unit_mini_test" && Number(item.unit) >= 1 && Number(item.unit) <= 15),
    item => Number(item.unit)
  );
}

function componentScore(history) {
  const components = [];

  const fullMocks = getRecentFullMocks(history);
  const fullMockScore = weightedRecentMockAverage(fullMocks);
  if (fullMockScore != null) {
    components.push({
      id: "fullMock",
      score: fullMockScore,
      nominalWeight: readinessConfig.scoreWeights.fullMock
    });
  }

  const partReviews = [...getLatestPartReviews(history).values()];
  const partReviewScore = avg(partReviews.map(x => x.percentage));
  if (partReviewScore != null) {
    components.push({
      id: "partReviews",
      score: partReviewScore,
      nominalWeight: readinessConfig.scoreWeights.partReviews
    });
  }

  const unitTests = [...getLatestUnitMiniTests(history).values()];
  const unitMiniScore = avg(unitTests.map(x => x.percentage));
  if (unitMiniScore != null) {
    components.push({
      id: "unitMiniTests",
      score: unitMiniScore,
      nominalWeight: readinessConfig.scoreWeights.unitMiniTests
    });
  }

  if (!components.length) {
    return { score: 0, components: [] };
  }

  const availableWeight = components.reduce((sum, c) => sum + c.nominalWeight, 0);
  const score = components.reduce((sum, c) => {
    const effectiveWeight = c.nominalWeight / availableWeight;
    c.effectiveWeight = effectiveWeight;
    c.weightedContribution = c.score * effectiveWeight;
    return sum + c.weightedContribution;
  }, 0);

  return {
    score: round(clamp(score)),
    components: components.map(c => ({
      id: c.id,
      score: round(c.score),
      effectiveWeight: Math.round(c.effectiveWeight * 100) / 100,
      weightedContribution: Math.round(c.weightedContribution * 10) / 10
    }))
  };
}

function evidenceConfidence(history) {
  const fullMocks = history.filter(item => item.type === "full_mock").length;
  const partCount = getLatestPartReviews(history).size;
  const unitCount = getLatestUnitMiniTests(history).size;

  const fullMockPoints = Math.min(
    readinessConfig.evidenceConfidence.fullMocks.maxPoints,
    (fullMocks / readinessConfig.evidenceConfidence.fullMocks.fullCreditAt) *
      readinessConfig.evidenceConfidence.fullMocks.maxPoints
  );

  const partPoints = Math.min(
    readinessConfig.evidenceConfidence.partReviews.maxPoints,
    (partCount / readinessConfig.evidenceConfidence.partReviews.fullCreditAtDistinctParts) *
      readinessConfig.evidenceConfidence.partReviews.maxPoints
  );

  const unitPoints = Math.min(
    readinessConfig.evidenceConfidence.unitMiniTests.maxPoints,
    (unitCount / readinessConfig.evidenceConfidence.unitMiniTests.fullCreditAtDistinctUnits) *
      readinessConfig.evidenceConfidence.unitMiniTests.maxPoints
  );

  const points = round(fullMockPoints + partPoints + unitPoints);
  const band =
    readinessConfig.evidenceConfidence.bands.find(b => points >= b.min && points <= b.max)?.label || "Low";

  return {
    score: points,
    label: band,
    fullMocks,
    distinctPartReviews: partCount,
    distinctUnitMiniTests: unitCount
  };
}

function latestPartScoresFromMock(fullMock) {
  if (!fullMock?.partStats) return [];
  return Object.values(fullMock.partStats)
    .map(stat => Number(stat?.percentage))
    .filter(Number.isFinite);
}

function unitsWithEvidence(history) {
  const units = new Set();

  for (const attempt of history) {
    if (attempt.type === "unit_mini_test" && Number(attempt.unit) >= 1 && Number(attempt.unit) <= 15) {
      units.add(Number(attempt.unit));
    }

    if (attempt.type === "full_mock" && attempt.unitStats) {
      for (const key of Object.keys(attempt.unitStats)) {
        const unit = Number(key);
        if (unit >= 1 && unit <= 15) units.add(unit);
      }
    }
  }

  return units;
}

function determineLevel(score, history) {
  if (score < 55) return { id: "not_ready", label: "Not ready" };
  if (score < 70) return { id: "developing", label: "Developing" };
  if (score < 80) return { id: "almost_ready", label: "Almost ready" };

  const gates = readinessConfig.levels.find(x => x.id === "tkt_ready").gates;
  const fullMocks = getRecentFullMocks(history, 99);
  const latestFullMock = fullMocks[0] || null;
  const partScores = latestPartScoresFromMock(latestFullMock);
  const minPartScore = partScores.length ? Math.min(...partScores) : null;
  const evidenceUnits = unitsWithEvidence(history).size;

  const passesGates =
    fullMocks.length >= gates.minimumFullMocks &&
    latestFullMock &&
    latestFullMock.percentage >= gates.minimumLatestFullMock &&
    minPartScore != null &&
    minPartScore >= gates.minimumPartScore &&
    evidenceUnits >= gates.minimumUnitsWithEvidence;

  if (passesGates) return { id: "tkt_ready", label: "TKT Ready" };

  return {
    id: "almost_ready",
    label: "Almost ready",
    gatedFromReady: true,
    gateStatus: {
      fullMocks: `${fullMocks.length}/${gates.minimumFullMocks}`,
      latestFullMock: latestFullMock?.percentage ?? null,
      minimumLatestFullMock: gates.minimumLatestFullMock,
      minimumPartScore: minPartScore,
      requiredMinimumPartScore: gates.minimumPartScore,
      unitsWithEvidence: evidenceUnits,
      requiredUnitsWithEvidence: gates.minimumUnitsWithEvidence
    }
  };
}

function extractUnitEvidence(history) {
  const perUnit = new Map();

  const unitMiniMap = getLatestUnitMiniTests(history);
  for (const [unit, attempt] of unitMiniMap.entries()) {
    perUnit.set(unit, [{ score: attempt.percentage, weight: 1.0, source: "unit_mini_test" }]);
  }

  const mocks = getRecentFullMocks(history, 3);
  const mockWeights = [0.7, 0.5, 0.3];

  mocks.forEach((mock, index) => {
    if (!mock.unitStats) return;
    for (const [unitKey, stat] of Object.entries(mock.unitStats)) {
      const unit = Number(unitKey);
      if (unit < 1 || unit > 15 || !Number.isFinite(stat?.percentage)) continue;
      if (!perUnit.has(unit)) perUnit.set(unit, []);
      perUnit.get(unit).push({
        score: stat.percentage,
        weight: mockWeights[index],
        source: "full_mock"
      });
    }
  });

  const results = [];
  for (let unit = 1; unit <= 15; unit++) {
    const evidence = perUnit.get(unit) || [];
    if (!evidence.length) {
      results.push({
        unit,
        mastery: null,
        status: "No evidence",
        evidenceCount: 0
      });
      continue;
    }

    const weightTotal = evidence.reduce((sum, e) => sum + e.weight, 0);
    const mastery = round(
      evidence.reduce((sum, e) => sum + e.score * e.weight, 0) / weightTotal
    );

    let status = "Review recommended";
    if (mastery >= readinessConfig.unitMastery.strong.min) status = "Strong";
    else if (mastery >= readinessConfig.unitMastery.developing.min) status = "Developing";

    results.push({
      unit,
      mastery,
      status,
      evidenceCount: evidence.length,
      sources: [...new Set(evidence.map(e => e.source))]
    });
  }

  return results;
}

function buildRecommendations(history, readiness, unitMastery) {
  const recommendations = [];
  const fullMocks = getRecentFullMocks(history, 99);

  const weakUnits = unitMastery
    .filter(u => u.mastery != null && u.mastery < readinessConfig.recommendationRules.weakUnitThreshold)
    .sort((a, b) => a.mastery - b.mastery)
    .slice(0, readinessConfig.recommendationRules.maxPriorityUnits);

  const noEvidence = unitMastery.filter(u => u.mastery == null);

  if (noEvidence.length) {
    recommendations.push({
      priority: 1,
      type: "coverage",
      title: "Build more unit evidence",
      message: `Complete Mini Tests for Units ${noEvidence.slice(0, 5).map(u => u.unit).join(", ")}${noEvidence.length > 5 ? "…" : ""}.`
    });
  }

  if (weakUnits.length) {
    recommendations.push({
      priority: 1,
      type: "review_units",
      title: "Review priority units",
      units: weakUnits.map(u => u.unit),
      message: `Review Units ${weakUnits.map(u => u.unit).join(", ")} before your next mock.`
    });
  }

  if (fullMocks.length === 0) {
    recommendations.push({
      priority: 1,
      type: "take_full_mock",
      title: "Take your first Full Mock",
      message: "Complete an 80-question Module 1 Full Mock to establish exam-level evidence."
    });
  } else if (readiness.level.id === "almost_ready" && readiness.level.gatedFromReady) {
    recommendations.push({
      priority: 2,
      type: "build_ready_evidence",
      title: "Build TKT Ready evidence",
      message: "Complete another Full Mock after reviewing weak areas and keep every Part above the readiness floor."
    });
  }

  if (readiness.level.id === "tkt_ready") {
    recommendations.push({
      priority: 3,
      type: "maintain",
      title: "Maintain readiness",
      message: "Keep practising your lowest-scoring units and use a fresh Full Mock to maintain exam readiness."
    });
  }

  if (!recommendations.length) {
    recommendations.push({
      priority: 2,
      type: "continue",
      title: "Continue targeted practice",
      message: "Continue with the lowest-scoring unit and complete another Part Review when ready."
    });
  }

  return recommendations.sort((a, b) => a.priority - b.priority);
}

export function calculateReadiness(historyInput = []) {
  const history = sortNewestFirst(historyInput.map(normalizeAttempt));
  const scoreData = componentScore(history);
  const confidence = evidenceConfidence(history);
  const level = determineLevel(scoreData.score, history);
  const unitMastery = extractUnitEvidence(history);

  const result = {
    module: 1,
    score: scoreData.score,
    level,
    confidence,
    components: scoreData.components,
    unitMastery,
    disclaimer: readinessConfig.readinessDisclaimer
  };

  result.recommendations = buildRecommendations(history, result, unitMastery);
  return result;
}

export function getHistorySummary(historyInput = []) {
  const history = sortNewestFirst(historyInput.map(normalizeAttempt));

  const latest = history[0] || null;
  const fullMocks = getRecentFullMocks(history, 99);
  const partReviews = history.filter(x => x.type === "part_review");
  const unitMiniTests = history.filter(x => x.type === "unit_mini_test");

  const best = history.length
    ? [...history].sort((a, b) => b.percentage - a.percentage)[0]
    : null;

  const bestFullMock = fullMocks.length
    ? [...fullMocks].sort((a, b) => b.percentage - a.percentage)[0]
    : null;

  return {
    totalAttempts: history.length,
    latest,
    best,
    latestFullMock: fullMocks[0] || null,
    bestFullMock,
    counts: {
      fullMocks: fullMocks.length,
      partReviews: partReviews.length,
      unitMiniTests: unitMiniTests.length
    }
  };
}
