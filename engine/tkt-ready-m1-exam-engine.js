// TKT Ready — Module 1 Exam Engine
// Part Reviews + Full 80-question Mock
// v1.0.0
// Independent preparation for the Cambridge TKT.
// No feedback is shown during test attempts.

export const examBlueprint = {
  "product": "TKT Ready",
  "module": 1,
  "title": "Module 1 Exam Layer",
  "version": "1.0.0",
  "language": "English",
  "examMode": {
    "feedbackDuringAttempt": false,
    "showAnswersAfterSubmit": true,
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "avoidExactAttemptRepeat": true,
    "preferRecentQuestionAvoidance": true
  },
  "officialStructure": {
    "durationMinutes": 80,
    "questions": 80,
    "tasks": 13,
    "taskTypes": [
      "multiple_choice",
      "matching"
    ],
    "parts": [
      {
        "part": 1,
        "title": "Describing Language and Language Skills",
        "questions": 40,
        "tasks": 6,
        "reviewMinutes": 40,
        "units": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8
        ],
        "attemptCoverage": "5 questions from each of Units 1–8"
      },
      {
        "part": 2,
        "title": "Background to Language Learning",
        "questions": 15,
        "tasks": 3,
        "reviewMinutes": 15,
        "units": [
          9,
          10,
          11
        ],
        "attemptCoverage": "5 questions from each of Units 9–11"
      },
      {
        "part": 3,
        "title": "Background to Language Teaching",
        "questions": 25,
        "tasks": 4,
        "reviewMinutes": 25,
        "units": [
          12,
          13,
          14,
          15
        ],
        "attemptCoverage": "6 questions from three units and 7 from one rotating unit"
      }
    ]
  },
  "taskPatterns": {
    "part1": [
      {
        "type": "multiple_choice",
        "questionCount": 10
      },
      {
        "type": "matching",
        "questionCount": 5
      },
      {
        "type": "multiple_choice",
        "questionCount": 10
      },
      {
        "type": "multiple_choice",
        "questionCount": 5
      },
      {
        "type": "matching",
        "questionCount": 5
      },
      {
        "type": "matching",
        "questionCount": 5
      }
    ],
    "part2": [
      {
        "type": "matching",
        "questionCount": 5
      },
      {
        "type": "multiple_choice",
        "questionCount": 5
      },
      {
        "type": "matching",
        "questionCount": 5
      }
    ],
    "part3": [
      {
        "type": "matching",
        "questionCount": 6
      },
      {
        "type": "matching",
        "questionCount": 6
      },
      {
        "type": "matching",
        "questionCount": 6
      },
      {
        "type": "multiple_choice",
        "questionCount": 7
      }
    ]
  },
  "pool": {
    "testMultipleChoiceItems": 450,
    "testMatchingSets": 15,
    "units": 15
  },
  "note": "Independent preparation for the Cambridge TKT. This engine mirrors the published Module 1 question/task distribution without claiming to reproduce Cambridge exam content."
};

const unitPool = {
  "1": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 1,
      "title": "Parts of Speech",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Describing language: Grammar — Parts of speech / word classes"
    },
    "testQuestions": [
      {
        "id": "M1-U1-031",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "noun",
        "difficulty": "easy",
        "taskType": "multiple_choice",
        "stem": "The teacher wrote the key words on the whiteboard.",
        "prompt": "What kind of noun is “whiteboard”?",
        "options": [
          "Compound noun",
          "Proper noun",
          "Uncountable noun"
        ],
        "correctAnswer": "Compound noun",
        "explanation": "“Whiteboard” is formed from two words combined to make one noun."
      },
      {
        "id": "M1-U1-032",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "noun",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The team agreed on a new classroom routine.",
        "prompt": "What kind of noun is “team”?",
        "options": [
          "Collective noun",
          "Proper noun",
          "Uncountable noun"
        ],
        "correctAnswer": "Collective noun",
        "explanation": "“Team” refers to a group considered as a unit, so it is a collective noun."
      },
      {
        "id": "M1-U1-033",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "word_class_in_context",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The class had a short break.",
        "prompt": "What part of speech is “break”?",
        "options": [
          "Noun",
          "Verb",
          "Adjective"
        ],
        "correctAnswer": "Noun",
        "explanation": "After “a short”, “break” functions as the head of a noun phrase."
      },
      {
        "id": "M1-U1-034",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "noun",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The school bought new equipment for the language lab.",
        "prompt": "What kind of noun is “equipment”?",
        "options": [
          "Uncountable noun",
          "Countable noun",
          "Proper noun"
        ],
        "correctAnswer": "Uncountable noun",
        "explanation": "“Equipment” is normally uncountable in English."
      },
      {
        "id": "M1-U1-035",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "verb",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The learners were studying when the bell rang.",
        "prompt": "What is the function of “were”?",
        "options": [
          "Auxiliary verb",
          "Main verb",
          "Modal verb"
        ],
        "correctAnswer": "Auxiliary verb",
        "explanation": "“Were” helps form the past continuous with “studying”."
      },
      {
        "id": "M1-U1-036",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "verb",
        "difficulty": "easy",
        "taskType": "multiple_choice",
        "stem": "The learners might need more time.",
        "prompt": "What kind of verb is “might”?",
        "options": [
          "Modal verb",
          "Main verb",
          "Reporting verb"
        ],
        "correctAnswer": "Modal verb",
        "explanation": "“Might” is a modal auxiliary expressing possibility."
      },
      {
        "id": "M1-U1-037",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "verb",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The students laughed when they saw the picture.",
        "prompt": "Which description best fits “laughed”?",
        "options": [
          "Intransitive verb",
          "Transitive verb",
          "Auxiliary verb"
        ],
        "correctAnswer": "Intransitive verb",
        "explanation": "“Laughed” does not take a direct object in this sentence."
      },
      {
        "id": "M1-U1-038",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "verb",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "The trainer suggested using a shorter lead-in.",
        "prompt": "What kind of verb is “suggested”?",
        "options": [
          "Reporting verb",
          "Modal verb",
          "Auxiliary verb"
        ],
        "correctAnswer": "Reporting verb",
        "explanation": "“Suggested” reports what someone communicated or proposed."
      },
      {
        "id": "M1-U1-039",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "adjective",
        "difficulty": "easy",
        "taskType": "multiple_choice",
        "stem": "The teacher selected a useful resource.",
        "prompt": "What part of speech is “useful”?",
        "options": [
          "Adjective",
          "Adverb",
          "Noun"
        ],
        "correctAnswer": "Adjective",
        "explanation": "“Useful” describes the noun “resource”."
      },
      {
        "id": "M1-U1-040",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "adjective",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "This was the most effective activity in the lesson.",
        "prompt": "What kind of adjective is “most effective”?",
        "options": [
          "Superlative adjective",
          "Comparative adjective",
          "Possessive adjective"
        ],
        "correctAnswer": "Superlative adjective",
        "explanation": "“Most effective” identifies the highest degree among a group."
      },
      {
        "id": "M1-U1-041",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "adverb",
        "difficulty": "easy",
        "taskType": "multiple_choice",
        "stem": "The teacher rarely uses translation in class.",
        "prompt": "What kind of adverb is “rarely”?",
        "options": [
          "Adverb of frequency",
          "Adverb of manner",
          "Adverb of degree"
        ],
        "correctAnswer": "Adverb of frequency",
        "explanation": "“Rarely” indicates how often something happens."
      },
      {
        "id": "M1-U1-042",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "adverb",
        "difficulty": "easy",
        "taskType": "multiple_choice",
        "stem": "The trainer observed the lesson yesterday.",
        "prompt": "What kind of adverb is “yesterday”?",
        "options": [
          "Adverb of time",
          "Adverb of manner",
          "Adverb of degree"
        ],
        "correctAnswer": "Adverb of time",
        "explanation": "“Yesterday” tells us when the observation happened."
      },
      {
        "id": "M1-U1-043",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "word_class_in_context",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "The candidates worked hard before the exam.",
        "prompt": "What part of speech is “hard”?",
        "options": [
          "Adverb",
          "Adjective",
          "Noun"
        ],
        "correctAnswer": "Adverb",
        "explanation": "Here, “hard” modifies the verb “worked”; an adverb does not always end in -ly."
      },
      {
        "id": "M1-U1-044",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "pronoun",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Their classroom is upstairs, but ours is on the ground floor.",
        "prompt": "What kind of pronoun is “ours”?",
        "options": [
          "Possessive pronoun",
          "Object pronoun",
          "Relative pronoun"
        ],
        "correctAnswer": "Possessive pronoun",
        "explanation": "“Ours” replaces a noun phrase and expresses possession."
      },
      {
        "id": "M1-U1-045",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "pronoun",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "These are the examples we need.",
        "prompt": "What kind of pronoun is “These”?",
        "options": [
          "Demonstrative pronoun",
          "Relative pronoun",
          "Reflexive pronoun"
        ],
        "correctAnswer": "Demonstrative pronoun",
        "explanation": "“These” stands alone and points to specific things, so it is a demonstrative pronoun."
      },
      {
        "id": "M1-U1-046",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "pronoun",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The activity which we tried first was too easy.",
        "prompt": "What kind of pronoun is “which”?",
        "options": [
          "Relative pronoun",
          "Possessive pronoun",
          "Subject pronoun"
        ],
        "correctAnswer": "Relative pronoun",
        "explanation": "“Which” introduces a relative clause referring to “the activity”."
      },
      {
        "id": "M1-U1-047",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "pronoun",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "I gave her the answer key.",
        "prompt": "What kind of pronoun is “her” in this sentence?",
        "options": [
          "Object pronoun",
          "Subject pronoun",
          "Reflexive pronoun"
        ],
        "correctAnswer": "Object pronoun",
        "explanation": "“Her” functions as the indirect object of “gave”."
      },
      {
        "id": "M1-U1-048",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "determiner",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Each candidate received an answer sheet.",
        "prompt": "What part of speech is “Each”?",
        "options": [
          "Determiner",
          "Pronoun",
          "Adverb"
        ],
        "correctAnswer": "Determiner",
        "explanation": "“Each” comes before the noun “candidate” and specifies the members individually."
      },
      {
        "id": "M1-U1-049",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "article",
        "difficulty": "easy",
        "taskType": "multiple_choice",
        "stem": "The trainer collected the papers at the end.",
        "prompt": "What kind of word is “the” before “papers”?",
        "options": [
          "Definite article",
          "Indefinite article",
          "Determiner of quantity"
        ],
        "correctAnswer": "Definite article",
        "explanation": "“The” is the definite article."
      },
      {
        "id": "M1-U1-050",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "determiner",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Many teachers use concept-checking questions.",
        "prompt": "What part of speech is “Many”?",
        "options": [
          "Determiner",
          "Adverb",
          "Conjunction"
        ],
        "correctAnswer": "Determiner",
        "explanation": "“Many” appears before the plural noun “teachers” and gives quantity information."
      },
      {
        "id": "M1-U1-051",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "preposition",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The learners walked through the classroom to form new groups.",
        "prompt": "What part of speech is “through”?",
        "options": [
          "Preposition",
          "Conjunction",
          "Adjective"
        ],
        "correctAnswer": "Preposition",
        "explanation": "“Through” introduces the noun phrase “the classroom” and expresses movement in relation to it."
      },
      {
        "id": "M1-U1-052",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "word_class_in_context",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "The teacher checked the answers after the learners finished.",
        "prompt": "What part of speech is “after”?",
        "options": [
          "Conjunction",
          "Preposition",
          "Adverb"
        ],
        "correctAnswer": "Conjunction",
        "explanation": "Here, “after” introduces the clause “the learners finished”, so it functions as a conjunction."
      },
      {
        "id": "M1-U1-053",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "conjunction",
        "difficulty": "easy",
        "taskType": "multiple_choice",
        "stem": "The task was simple, but the instructions were unclear.",
        "prompt": "What part of speech is “but”?",
        "options": [
          "Conjunction",
          "Preposition",
          "Pronoun"
        ],
        "correctAnswer": "Conjunction",
        "explanation": "“But” connects two contrasting clauses."
      },
      {
        "id": "M1-U1-054",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "conjunction",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The class will continue unless the fire alarm sounds.",
        "prompt": "What part of speech is “unless”?",
        "options": [
          "Conjunction",
          "Adverb",
          "Determiner"
        ],
        "correctAnswer": "Conjunction",
        "explanation": "“Unless” introduces a condition and links two clauses."
      },
      {
        "id": "M1-U1-055",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "exclamation",
        "difficulty": "easy",
        "taskType": "multiple_choice",
        "stem": "Oh! I left the answer key in the staff room.",
        "prompt": "What part of speech is “Oh!”?",
        "options": [
          "Exclamation",
          "Adverb",
          "Conjunction"
        ],
        "correctAnswer": "Exclamation",
        "explanation": "“Oh!” expresses a spontaneous feeling or reaction."
      },
      {
        "id": "M1-U1-056",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "word_class_in_context",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Please turn on the light.",
        "prompt": "What part of speech is “light”?",
        "options": [
          "Noun",
          "Adjective",
          "Verb"
        ],
        "correctAnswer": "Noun",
        "explanation": "Here, “light” names the thing to be turned on, so it functions as a noun."
      },
      {
        "id": "M1-U1-057",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "word_class_in_context",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The learners carried a light bag.",
        "prompt": "What part of speech is “light”?",
        "options": [
          "Adjective",
          "Noun",
          "Adverb"
        ],
        "correctAnswer": "Adjective",
        "explanation": "Here, “light” describes the noun “bag”."
      },
      {
        "id": "M1-U1-058",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "word_class_in_context",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "The groups present their ideas at the end of the lesson.",
        "prompt": "What part of speech is “present”?",
        "options": [
          "Verb",
          "Noun",
          "Adjective"
        ],
        "correctAnswer": "Verb",
        "explanation": "Here, “present” expresses the action the groups perform."
      },
      {
        "id": "M1-U1-059",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "word_class_in_context",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The candidate answered the question well.",
        "prompt": "What part of speech is “well”?",
        "options": [
          "Adverb",
          "Adjective",
          "Noun"
        ],
        "correctAnswer": "Adverb",
        "explanation": "“Well” describes how the candidate answered."
      },
      {
        "id": "M1-U1-060",
        "module": 1,
        "unit": 1,
        "section": "test",
        "skill": "word_class_in_context",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "That lesson was particularly successful.",
        "prompt": "What part of speech is “That”?",
        "options": [
          "Determiner",
          "Pronoun",
          "Conjunction"
        ],
        "correctAnswer": "Determiner",
        "explanation": "“That” comes before the noun “lesson” and identifies it, so it functions as a determiner."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U1-MATCH-T01",
        "section": "test",
        "instruction": "Match each example with the correct grammatical term.",
        "optionBank": [
          "Uncountable noun",
          "Modal verb",
          "Possessive pronoun",
          "Preposition",
          "Conjunction",
          "Exclamation"
        ],
        "items": [
          {
            "questionId": "M1-U1-034",
            "example": "equipment",
            "correctAnswer": "Uncountable noun"
          },
          {
            "questionId": "M1-U1-036",
            "example": "might",
            "correctAnswer": "Modal verb"
          },
          {
            "questionId": "M1-U1-044",
            "example": "ours",
            "correctAnswer": "Possessive pronoun"
          },
          {
            "questionId": "M1-U1-051",
            "example": "through",
            "correctAnswer": "Preposition"
          },
          {
            "questionId": "M1-U1-054",
            "example": "unless",
            "correctAnswer": "Conjunction"
          },
          {
            "questionId": "M1-U1-055",
            "example": "Oh!",
            "correctAnswer": "Exclamation"
          }
        ]
      }
    ]
  },
  "2": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 2,
      "title": "Grammatical Structures",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Describing language: Grammar — Form and use of grammatical structures"
    },
    "testQuestions": [
      {
        "id": "M1-U2-031",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "present_simple",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The library closes at six every evening.",
        "prompt": "Which use of the present simple is shown?",
        "options": [
          "A regular schedule",
          "An action happening now",
          "A recently completed action"
        ],
        "correctAnswer": "A regular schedule",
        "explanation": "The present simple can describe regular schedules and timetables."
      },
      {
        "id": "M1-U2-032",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "present_simple",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which sentence is NOT in the present simple?",
        "prompt": "Choose the best answer.",
        "options": [
          "Teachers need clear aims.",
          "This module contains 80 questions.",
          "The candidates are waiting outside."
        ],
        "correctAnswer": "The candidates are waiting outside.",
        "explanation": "“Are waiting” is present continuous, not present simple."
      },
      {
        "id": "M1-U2-033",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "present_continuous",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "More teachers are using digital resources this year.",
        "prompt": "What use of the present continuous is shown?",
        "options": [
          "A changing or temporary situation around the present",
          "A completed action in the past",
          "A fixed historical fact"
        ],
        "correctAnswer": "A changing or temporary situation around the present",
        "explanation": "The present continuous can describe developments or temporary situations around the present."
      },
      {
        "id": "M1-U2-034",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "present_continuous",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which sentence has the correct present continuous form?",
        "prompt": "Choose the best answer.",
        "options": [
          "The trainer is explaining the task.",
          "The trainer explaining the task.",
          "The trainer has explaining the task."
        ],
        "correctAnswer": "The trainer is explaining the task.",
        "explanation": "Present continuous requires a form of “be” plus the -ing form."
      },
      {
        "id": "M1-U2-035",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "past_simple",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Last year, our school introduced a new assessment policy.",
        "prompt": "Why is the past simple appropriate?",
        "options": [
          "The event happened at a finished time in the past",
          "The event continues until now",
          "The event is a future plan"
        ],
        "correctAnswer": "The event happened at a finished time in the past",
        "explanation": "“Last year” is a finished past time, so the past simple is appropriate."
      },
      {
        "id": "M1-U2-036",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "past_simple",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which sentence is correctly formed in the past simple negative?",
        "prompt": "Choose the best answer.",
        "options": [
          "They did not attend the workshop.",
          "They did not attended the workshop.",
          "They have not attend the workshop."
        ],
        "correctAnswer": "They did not attend the workshop.",
        "explanation": "After “did not”, English uses the base form of the main verb."
      },
      {
        "id": "M1-U2-037",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "present_perfect_simple",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "We have already completed Module 1.",
        "prompt": "What is the grammatical structure?",
        "options": [
          "Present perfect simple",
          "Past perfect simple",
          "Present perfect continuous"
        ],
        "correctAnswer": "Present perfect simple",
        "explanation": "“Have completed” is present perfect simple."
      },
      {
        "id": "M1-U2-038",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "present_perfect_simple",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which sentence best describes an experience without giving a finished past time?",
        "prompt": "Choose the best answer.",
        "options": [
          "I have taken several teaching exams.",
          "I took the exam last June.",
          "I was taking the exam at noon."
        ],
        "correctAnswer": "I have taken several teaching exams.",
        "explanation": "The present perfect simple can describe experience when no finished past time is stated."
      },
      {
        "id": "M1-U2-039",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "present_perfect_continuous",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "She has been teaching since 2018.",
        "prompt": "Which feature is emphasised most strongly?",
        "options": [
          "An activity continuing over a period up to the present",
          "A single completed action at a past time",
          "A future arrangement"
        ],
        "correctAnswer": "An activity continuing over a period up to the present",
        "explanation": "The present perfect continuous often highlights duration and continuity."
      },
      {
        "id": "M1-U2-040",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "present_perfect_continuous",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which form is present perfect continuous?",
        "prompt": "Choose the best answer.",
        "options": [
          "has been working",
          "has worked",
          "had been working"
        ],
        "correctAnswer": "has been working",
        "explanation": "Present perfect continuous is formed with has/have + been + -ing form."
      },
      {
        "id": "M1-U2-041",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "past_perfect_simple",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The webinar had ended before I logged in.",
        "prompt": "What does “had ended” show?",
        "options": [
          "The webinar ended before another past event",
          "The webinar is ending now",
          "The webinar will end later"
        ],
        "correctAnswer": "The webinar ended before another past event",
        "explanation": "The past perfect identifies the earlier of two past events."
      },
      {
        "id": "M1-U2-042",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "past_perfect_simple",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which form correctly represents the past perfect simple?",
        "prompt": "Choose the best answer.",
        "options": [
          "had + past participle",
          "have + past participle",
          "was + -ing form"
        ],
        "correctAnswer": "had + past participle",
        "explanation": "The past perfect simple uses “had” plus the past participle."
      },
      {
        "id": "M1-U2-043",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "modal_must",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "You must answer all the questions on the answer sheet.",
        "prompt": "Which function does “must” express?",
        "options": [
          "Strong obligation",
          "Permission",
          "Past ability"
        ],
        "correctAnswer": "Strong obligation",
        "explanation": "“Must” expresses a strong requirement in this context."
      },
      {
        "id": "M1-U2-044",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "modal_must",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which sentence uses “must” correctly?",
        "prompt": "Choose the best answer.",
        "options": [
          "Candidates must arrive on time.",
          "Candidates must to arrive on time.",
          "Candidates must arriving on time."
        ],
        "correctAnswer": "Candidates must arrive on time.",
        "explanation": "“Must” is followed by the base form without “to”."
      },
      {
        "id": "M1-U2-045",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "modal_must",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which sentence uses “must” to make a logical deduction rather than express obligation?",
        "prompt": "Choose the best answer.",
        "options": [
          "The lights are on, so the trainer must be here.",
          "Candidates must show identification.",
          "You must complete the form before Friday."
        ],
        "correctAnswer": "The lights are on, so the trainer must be here.",
        "explanation": "Here, “must” expresses a strong logical conclusion based on evidence."
      },
      {
        "id": "M1-U2-046",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "future_going_to",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The trainer is going to demonstrate a new activity.",
        "prompt": "Which meaning is most likely?",
        "options": [
          "A planned future action",
          "A finished past action",
          "A general truth"
        ],
        "correctAnswer": "A planned future action",
        "explanation": "“Be going to” commonly expresses a future intention or plan."
      },
      {
        "id": "M1-U2-047",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "future_going_to",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Look at those dark clouds. It is going to rain.",
        "prompt": "Why is “going to” used?",
        "options": [
          "There is present evidence for a future prediction",
          "The speaker is describing a past routine",
          "The speaker is reporting another person's words"
        ],
        "correctAnswer": "There is present evidence for a future prediction",
        "explanation": "“Going to” can make a prediction based on evidence visible in the present."
      },
      {
        "id": "M1-U2-048",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "future_going_to",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which sentence has the correct “going to” form?",
        "prompt": "Choose the best answer.",
        "options": [
          "They are going to revise tonight.",
          "They going to revise tonight.",
          "They are going revise tonight."
        ],
        "correctAnswer": "They are going to revise tonight.",
        "explanation": "The structure requires be + going to + base form."
      },
      {
        "id": "M1-U2-049",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "first_conditional",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "If the candidates arrive early, they will have time to relax.",
        "prompt": "Which clause contains the condition?",
        "options": [
          "If the candidates arrive early",
          "they will have time to relax",
          "to relax"
        ],
        "correctAnswer": "If the candidates arrive early",
        "explanation": "The if-clause states the condition in a first conditional sentence."
      },
      {
        "id": "M1-U2-050",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "first_conditional",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which sentence has the standard first conditional form?",
        "prompt": "Choose the best answer.",
        "options": [
          "If I finish early, I will review my answers.",
          "If I will finish early, I review my answers.",
          "If I finished early, I will review my answers."
        ],
        "correctAnswer": "If I finish early, I will review my answers.",
        "explanation": "A standard first conditional uses present simple in the if-clause and will + base form in the result clause."
      },
      {
        "id": "M1-U2-051",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "first_conditional",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "If you practise regularly, you will become faster at recognising terminology.",
        "prompt": "What type of situation does this sentence describe?",
        "options": [
          "A possible future situation and result",
          "An impossible past situation",
          "A permanent fact with no condition"
        ],
        "correctAnswer": "A possible future situation and result",
        "explanation": "The first conditional describes a possible future condition and its result."
      },
      {
        "id": "M1-U2-052",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "passive",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The answer sheets are collected at the end of the test.",
        "prompt": "Which structure is used?",
        "options": [
          "Present simple passive",
          "Present perfect simple",
          "Past continuous"
        ],
        "correctAnswer": "Present simple passive",
        "explanation": "“Are collected” is present simple passive: be + past participle."
      },
      {
        "id": "M1-U2-053",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "passive",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which sentence is in the passive voice?",
        "prompt": "Choose the best answer.",
        "options": [
          "The results were sent by email.",
          "The centre sent the results by email.",
          "The candidates sent an email."
        ],
        "correctAnswer": "The results were sent by email.",
        "explanation": "“Were sent” is a passive form: past tense of “be” + past participle."
      },
      {
        "id": "M1-U2-054",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "passive",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which option best describes the form of the present simple passive?",
        "prompt": "Choose the best answer.",
        "options": [
          "am/is/are + past participle",
          "have/has + past participle",
          "am/is/are + -ing form"
        ],
        "correctAnswer": "am/is/are + past participle",
        "explanation": "The present simple passive uses the present simple of “be” plus the past participle."
      },
      {
        "id": "M1-U2-055",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "reported_speech",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The candidate said that she felt nervous.",
        "prompt": "Which term best describes this sentence?",
        "options": [
          "Reported speech",
          "Direct speech",
          "Present perfect"
        ],
        "correctAnswer": "Reported speech",
        "explanation": "The sentence reports the candidate's words without quoting them directly."
      },
      {
        "id": "M1-U2-056",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "reported_speech",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Direct speech: The trainer said, “The test is difficult.” Which option is reported speech?",
        "prompt": "Choose the best answer.",
        "options": [
          "The trainer said that the test was difficult.",
          "The trainer said, “The test was difficult.”",
          "The trainer is saying the test."
        ],
        "correctAnswer": "The trainer said that the test was difficult.",
        "explanation": "The sentence reports the original statement indirectly and uses a typical backshift from “is” to “was”."
      },
      {
        "id": "M1-U2-057",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "reported_speech",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which feature commonly occurs when present-tense direct speech is reported after a past reporting verb?",
        "prompt": "Choose the best answer.",
        "options": [
          "Backshift to a past form",
          "Addition of a modal in every sentence",
          "Change from a statement to a question"
        ],
        "correctAnswer": "Backshift to a past form",
        "explanation": "With a past reporting verb, the tense in reported speech often shifts back, depending on context."
      },
      {
        "id": "M1-U2-058",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "gerund",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Teaching requires patience and preparation.",
        "prompt": "What is the grammatical function of “Teaching” here?",
        "options": [
          "Gerund functioning as the subject",
          "Present continuous verb",
          "Past participle"
        ],
        "correctAnswer": "Gerund functioning as the subject",
        "explanation": "“Teaching” is an -ing form functioning as a noun and as the subject of the sentence."
      },
      {
        "id": "M1-U2-059",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "gerund",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which sentence uses an -ing form as a gerund rather than as part of a continuous verb?",
        "prompt": "Choose the best answer.",
        "options": [
          "She enjoys planning lessons.",
          "She is planning a lesson.",
          "She was planning when I called."
        ],
        "correctAnswer": "She enjoys planning lessons.",
        "explanation": "After “enjoys”, “planning” functions as a noun-like complement, so it is a gerund."
      },
      {
        "id": "M1-U2-060",
        "module": 1,
        "unit": 2,
        "section": "test",
        "skill": "gerund",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "In “They discussed using authentic materials”, what grammatical term best describes “using”?",
        "prompt": "Choose the best answer.",
        "options": [
          "Gerund",
          "Present participle in a continuous tense",
          "Past participle"
        ],
        "correctAnswer": "Gerund",
        "explanation": "“Using” is an -ing form functioning as the complement of “discussed”, not as part of a continuous tense."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U2-MATCH-T01",
        "section": "test",
        "instruction": "Match each example with the correct grammatical structure.",
        "optionBank": [
          "Present perfect continuous",
          "Past perfect simple",
          "Modal verb: must",
          "Passive",
          "Reported speech",
          "Gerund"
        ],
        "items": [
          {
            "questionId": "M1-U2-039",
            "example": "She has been teaching since 2018.",
            "correctAnswer": "Present perfect continuous"
          },
          {
            "questionId": "M1-U2-041",
            "example": "The webinar had ended before I logged in.",
            "correctAnswer": "Past perfect simple"
          },
          {
            "questionId": "M1-U2-043",
            "example": "You must answer all the questions.",
            "correctAnswer": "Modal verb: must"
          },
          {
            "questionId": "M1-U2-052",
            "example": "The answer sheets are collected at the end of the test.",
            "correctAnswer": "Passive"
          },
          {
            "questionId": "M1-U2-055",
            "example": "The candidate said that she felt nervous.",
            "correctAnswer": "Reported speech"
          },
          {
            "questionId": "M1-U2-058",
            "example": "Teaching requires patience and preparation.",
            "correctAnswer": "Gerund"
          }
        ]
      }
    ]
  },
  "3": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 3,
      "title": "Lexis: Meaning & Word Formation",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Describing language: Lexis — types of meaning and word formation",
      "scopeNote": "Synonyms, antonyms, lexical sets, homophones, collocation and register are intentionally reserved for Unit 4."
    },
    "testQuestions": [
      {
        "id": "M1-U3-031",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "affix",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which statement about an affix is correct?",
        "prompt": "Choose the best answer.",
        "options": [
          "It is added to a root or base word",
          "It must always be a complete word",
          "It is another term for an idiom"
        ],
        "correctAnswer": "It is added to a root or base word",
        "explanation": "Affixes are meaningful elements added to roots or base words."
      },
      {
        "id": "M1-U3-032",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "affix",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which word contains both a prefix and a suffix?",
        "prompt": "Choose the best answer.",
        "options": [
          "unhappiness",
          "teacher",
          "rewrite"
        ],
        "correctAnswer": "unhappiness",
        "explanation": "“Unhappiness” contains the prefix “un-” and the suffix “-ness” around the base “happy”."
      },
      {
        "id": "M1-U3-033",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "affix",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which pair shows two different kinds of affix?",
        "prompt": "Choose the best answer.",
        "options": [
          "re- and -able",
          "black and board",
          "look and up"
        ],
        "correctAnswer": "re- and -able",
        "explanation": "“Re-” is a prefix and “-able” is a suffix; both are affixes."
      },
      {
        "id": "M1-U3-034",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "prefix",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "In “misunderstand”, which element is the prefix?",
        "prompt": "Choose the best answer.",
        "options": [
          "mis-",
          "under",
          "-stand"
        ],
        "correctAnswer": "mis-",
        "explanation": "A prefix occurs before a root or base word; “mis-” is added before “understand”."
      },
      {
        "id": "M1-U3-035",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "prefix",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which word is formed by adding a prefix to a base word?",
        "prompt": "Choose the best answer.",
        "options": [
          "impossible",
          "movement",
          "notebook"
        ],
        "correctAnswer": "impossible",
        "explanation": "“Im-” is a prefix added to the base adjective “possible”."
      },
      {
        "id": "M1-U3-036",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "prefix",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "What is the function of “re-” in “reconsider”?",
        "prompt": "Choose the best answer.",
        "options": [
          "It is a prefix that adds meaning to the base verb",
          "It is a suffix that changes the word class",
          "It creates a compound from two independent words"
        ],
        "correctAnswer": "It is a prefix that adds meaning to the base verb",
        "explanation": "“Re-” occurs before “consider” and typically adds the meaning of doing something again."
      },
      {
        "id": "M1-U3-037",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "suffix",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which element is the suffix in “development”?",
        "prompt": "Choose the best answer.",
        "options": [
          "-ment",
          "de-",
          "develop"
        ],
        "correctAnswer": "-ment",
        "explanation": "“-ment” is added to the end of the base verb “develop”."
      },
      {
        "id": "M1-U3-038",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "suffix",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which word contains a suffix that changes an adjective into a noun?",
        "prompt": "Choose the best answer.",
        "options": [
          "kindness",
          "unkind",
          "kind-hearted"
        ],
        "correctAnswer": "kindness",
        "explanation": "The suffix “-ness” changes the adjective “kind” into the noun “kindness”."
      },
      {
        "id": "M1-U3-039",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "suffix",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "What is “-less” in the word “careless”?",
        "prompt": "Choose the best answer.",
        "options": [
          "A suffix",
          "A prefix",
          "A root word"
        ],
        "correctAnswer": "A suffix",
        "explanation": "“-less” is attached to the end of the base word “care”."
      },
      {
        "id": "M1-U3-040",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "root_base_word",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "What is the base word in “unpredictable”?",
        "prompt": "Choose the best answer.",
        "options": [
          "predict",
          "un-",
          "-able"
        ],
        "correctAnswer": "predict",
        "explanation": "“Predict” is the base. The prefix “un-” and suffix “-able” are added around it."
      },
      {
        "id": "M1-U3-041",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "root_base_word",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which statement best defines a root or base word?",
        "prompt": "Choose the best answer.",
        "options": [
          "A basic form from which related words can be created",
          "A group of unrelated words on the same topic",
          "A word with two unrelated meanings"
        ],
        "correctAnswer": "A basic form from which related words can be created",
        "explanation": "Roots or base words provide the form from which related words may be built."
      },
      {
        "id": "M1-U3-042",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "root_base_word",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which item is the base for “successful”, “successfully” and “unsuccessful”?",
        "prompt": "Choose the best answer.",
        "options": [
          "success",
          "-ful",
          "un-"
        ],
        "correctAnswer": "success",
        "explanation": "“Success” is the common base used to form the related words."
      },
      {
        "id": "M1-U3-043",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "compound",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which item is a compound noun?",
        "prompt": "Choose the best answer.",
        "options": [
          "lesson plan",
          "careless",
          "disagree"
        ],
        "correctAnswer": "lesson plan",
        "explanation": "“Lesson plan” combines two words that function together as one lexical unit."
      },
      {
        "id": "M1-U3-044",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "compound",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which item is NOT formed by affixation?",
        "prompt": "Choose the best answer.",
        "options": [
          "classroom",
          "unhelpful",
          "teacher"
        ],
        "correctAnswer": "classroom",
        "explanation": "“Classroom” is a compound made from “class” + “room”; it is not created by adding an affix."
      },
      {
        "id": "M1-U3-045",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "compound",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which description best fits a compound?",
        "prompt": "Choose the best answer.",
        "options": [
          "Two or more words functioning as one unit of meaning",
          "A letter group added only to the end of a word",
          "Two words that sound the same"
        ],
        "correctAnswer": "Two or more words functioning as one unit of meaning",
        "explanation": "Compounds are built from multiple words or word elements that function together as a lexical unit."
      },
      {
        "id": "M1-U3-046",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "word_family",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which set forms a word family?",
        "prompt": "Choose the best answer.",
        "options": [
          "analyse, analysis, analytical",
          "speak, talk, say",
          "pen, pencil, notebook"
        ],
        "correctAnswer": "analyse, analysis, analytical",
        "explanation": "These forms share a common root and are related through word formation."
      },
      {
        "id": "M1-U3-047",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "word_family",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "A teacher groups “produce”, “producer”, “production” and “productive” together.",
        "prompt": "Which lexical concept is the teacher illustrating?",
        "options": [
          "Word family",
          "Lexical set",
          "Homonym"
        ],
        "correctAnswer": "Word family",
        "explanation": "The words are related by a shared root/base and different word-building processes."
      },
      {
        "id": "M1-U3-048",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "word_family",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which feature is essential to a word family?",
        "prompt": "Choose the best answer.",
        "options": [
          "A shared root or base word",
          "Exactly the same part of speech",
          "Exactly the same spelling"
        ],
        "correctAnswer": "A shared root or base word",
        "explanation": "Word-family members are connected through a common root or base; their word classes and forms may differ."
      },
      {
        "id": "M1-U3-049",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "false_friend",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "An English learner sees a target-language word that resembles an L1 word and assumes the meanings are identical, but they are not.",
        "prompt": "Which term applies?",
        "options": [
          "False friend",
          "Homonym",
          "Phrasal verb"
        ],
        "correctAnswer": "False friend",
        "explanation": "A false friend creates misleading cross-language similarity in form or sound."
      },
      {
        "id": "M1-U3-050",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "false_friend",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Spanish “embarazada” means “pregnant”, not English “embarrassed”. This pair is commonly used to illustrate which lexical concept?",
        "prompt": "Choose the best answer.",
        "options": [
          "False friends",
          "Homonyms",
          "Compounds"
        ],
        "correctAnswer": "False friends",
        "explanation": "The words look similar across the two languages but their meanings differ."
      },
      {
        "id": "M1-U3-051",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "false_friend",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which feature distinguishes a false friend from a homonym?",
        "prompt": "Choose the best answer.",
        "options": [
          "A false friend involves misleading similarity across languages",
          "A false friend must be a multi-word verb",
          "A false friend is formed by adding a suffix"
        ],
        "correctAnswer": "A false friend involves misleading similarity across languages",
        "explanation": "False friends concern target-language forms that resemble L1 forms but differ in meaning; homonyms are forms within a language with distinct meanings."
      },
      {
        "id": "M1-U3-052",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "homonym",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The word “light” can refer to illumination or mean “not heavy”.",
        "prompt": "Which term best describes this lexical relationship?",
        "options": [
          "Homonym",
          "False friend",
          "Affix"
        ],
        "correctAnswer": "Homonym",
        "explanation": "The same word form is associated with different meanings."
      },
      {
        "id": "M1-U3-053",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "homonym",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which example best represents homonyms?",
        "prompt": "Choose the best answer.",
        "options": [
          "seal = an animal / seal = close something tightly",
          "happy / unhappy",
          "teach / teacher"
        ],
        "correctAnswer": "seal = an animal / seal = close something tightly",
        "explanation": "“Seal” has the same form but distinct meanings."
      },
      {
        "id": "M1-U3-054",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "homonym",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "A dictionary gives separate meanings for the same spelling “file”: a folder for documents and a metal tool for smoothing a surface.",
        "prompt": "Which term is most relevant?",
        "options": [
          "Homonym",
          "Prefix",
          "Word family"
        ],
        "correctAnswer": "Homonym",
        "explanation": "The same written form represents distinct lexical meanings."
      },
      {
        "id": "M1-U3-055",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "idiom",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "“Hit the books” means “study hard”.",
        "prompt": "What type of expression is this?",
        "options": [
          "Idiom",
          "Compound noun",
          "False friend"
        ],
        "correctAnswer": "Idiom",
        "explanation": "The overall meaning is not obtained simply by interpreting “hit” and “books” literally."
      },
      {
        "id": "M1-U3-056",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "idiom",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which statement best describes an idiom?",
        "prompt": "Choose the best answer.",
        "options": [
          "Its overall meaning may differ from the literal meanings of its individual words",
          "It always contains a prefix and a suffix",
          "It is always a formal expression"
        ],
        "correctAnswer": "Its overall meaning may differ from the literal meanings of its individual words",
        "explanation": "Idioms function as lexical units whose meanings are often non-literal."
      },
      {
        "id": "M1-U3-057",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "idiom",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "In “We need to get the ball rolling”, the speaker means “We need to start the process.”",
        "prompt": "Which term describes “get the ball rolling”?",
        "options": [
          "Idiom",
          "Homonym",
          "Word family"
        ],
        "correctAnswer": "Idiom",
        "explanation": "The phrase has a conventional non-literal meaning as a whole."
      },
      {
        "id": "M1-U3-058",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "phrasal_verb",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The teacher asked the learners to “find out” the meaning from context.",
        "prompt": "What is “find out”?",
        "options": [
          "A phrasal verb",
          "A compound noun",
          "A suffix"
        ],
        "correctAnswer": "A phrasal verb",
        "explanation": "“Find out” is a verb plus particle functioning together as a multi-word verb."
      },
      {
        "id": "M1-U3-059",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "phrasal_verb",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which sentence contains a phrasal verb?",
        "prompt": "Choose the best answer.",
        "options": [
          "Please hand in your assignment.",
          "Please write your assignment.",
          "Please check your assignment."
        ],
        "correctAnswer": "Please hand in your assignment.",
        "explanation": "“Hand in” is a multi-word verb meaning to submit something."
      },
      {
        "id": "M1-U3-060",
        "module": 1,
        "unit": 3,
        "section": "test",
        "skill": "phrasal_verb",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Why is it useful to treat “put off” as one lexical unit in “They put off the meeting”?",
        "prompt": "Choose the best answer.",
        "options": [
          "Its combined meaning is “postpone”, which is not obtained by interpreting each word separately",
          "It contains a suffix",
          "It is a word family"
        ],
        "correctAnswer": "Its combined meaning is “postpone”, which is not obtained by interpreting each word separately",
        "explanation": "Phrasal verbs often have a meaning that belongs to the combination as a whole."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U3-MATCH-T01",
        "section": "test",
        "instruction": "Match each description or example with the correct lexical term.",
        "optionBank": [
          "False friend",
          "Homonym",
          "Idiom",
          "Phrasal verb",
          "Affix"
        ],
        "items": [
          {
            "questionId": "M1-U3-049",
            "example": "A similar-looking L1 and English word with different meanings",
            "correctAnswer": "False friend"
          },
          {
            "questionId": "M1-U3-052",
            "example": "light = illumination / not heavy",
            "correctAnswer": "Homonym"
          },
          {
            "questionId": "M1-U3-055",
            "example": "hit the books = study hard",
            "correctAnswer": "Idiom"
          },
          {
            "questionId": "M1-U3-058",
            "example": "find out",
            "correctAnswer": "Phrasal verb"
          },
          {
            "questionId": "M1-U3-031",
            "example": "A meaningful element added to a root/base word",
            "correctAnswer": "Affix"
          }
        ]
      }
    ]
  },
  "4": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 4,
      "title": "Lexical Relationships & Register",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Describing language: Lexis — word groupings, lexical relationships and register",
      "skills": [
        "synonym",
        "antonym",
        "lexical_set",
        "homophone",
        "collocation",
        "register"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U4-031",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "synonym",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which pair is closest in meaning?",
        "prompt": "Choose the best answer.",
        "options": [
          "purchase / buy",
          "borrow / lend",
          "arrive / leave"
        ],
        "correctAnswer": "purchase / buy",
        "explanation": "“Purchase” and “buy” are synonyms, although “purchase” is generally more formal."
      },
      {
        "id": "M1-U4-032",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "synonym",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The teacher asks learners to match “rapid” with “fast”.",
        "prompt": "Which lexical relationship is being tested?",
        "options": [
          "Synonymy",
          "Antonymy",
          "Homophony"
        ],
        "correctAnswer": "Synonymy",
        "explanation": "“Rapid” and “fast” have similar meanings in many contexts."
      },
      {
        "id": "M1-U4-033",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "synonym",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which statement about synonyms is most accurate?",
        "prompt": "Choose the best answer.",
        "options": [
          "They may share core meaning but differ in register or typical context",
          "They must be interchangeable in every sentence",
          "They must have identical spelling patterns"
        ],
        "correctAnswer": "They may share core meaning but differ in register or typical context",
        "explanation": "Synonymy is often partial rather than absolute; usage, connotation and register can differ."
      },
      {
        "id": "M1-U4-034",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "synonym",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which word is a synonym of “require” in this sentence: “The task requires careful planning”?",
        "prompt": "Choose the best answer.",
        "options": [
          "needs",
          "avoids",
          "finishes"
        ],
        "correctAnswer": "needs",
        "explanation": "Here “require” and “need” have very similar meanings."
      },
      {
        "id": "M1-U4-035",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "synonym",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "“Residence” and “home” can sometimes refer to the same place, but “residence” is usually more formal.",
        "prompt": "What does this illustrate?",
        "options": [
          "Synonyms can differ in register",
          "Antonyms can have similar meanings",
          "Homophones can differ in spelling"
        ],
        "correctAnswer": "Synonyms can differ in register",
        "explanation": "Words may be semantically similar while differing in level of formality."
      },
      {
        "id": "M1-U4-036",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "antonym",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which pair has opposite meanings?",
        "prompt": "Choose the best answer.",
        "options": [
          "increase / decrease",
          "increase / rise",
          "increase / growth"
        ],
        "correctAnswer": "increase / decrease",
        "explanation": "“Increase” and “decrease” express opposing meanings."
      },
      {
        "id": "M1-U4-037",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "antonym",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The opposite of “optional” is:",
        "prompt": "Choose the best answer.",
        "options": [
          "compulsory",
          "possible",
          "flexible"
        ],
        "correctAnswer": "compulsory",
        "explanation": "“Optional” means not required; “compulsory” means required."
      },
      {
        "id": "M1-U4-038",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "antonym",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which pair illustrates antonymy created through a prefix?",
        "prompt": "Choose the best answer.",
        "options": [
          "possible / impossible",
          "possible / possibility",
          "possible / possibly"
        ],
        "correctAnswer": "possible / impossible",
        "explanation": "The negative prefix “im-” creates an opposite meaning."
      },
      {
        "id": "M1-U4-039",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "antonym",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which lexical relationship is illustrated by “formal / informal”?",
        "prompt": "Choose the best answer.",
        "options": [
          "Antonym",
          "Synonym",
          "Collocation"
        ],
        "correctAnswer": "Antonym",
        "explanation": "The two words contrast in meaning."
      },
      {
        "id": "M1-U4-040",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "antonym",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "A vocabulary exercise asks candidates to match “maximum” with “minimum”.",
        "prompt": "What relationship is being tested?",
        "options": [
          "Antonymy",
          "Synonymy",
          "Homophony"
        ],
        "correctAnswer": "Antonymy",
        "explanation": "“Maximum” and “minimum” represent opposite ends of a scale."
      },
      {
        "id": "M1-U4-041",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "lexical_set",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which group forms a lexical set connected with assessment?",
        "prompt": "Choose the best answer.",
        "options": [
          "test, mark, grade, feedback",
          "teach, teacher, teaching, taught",
          "quick, quickly, quicker, quickest"
        ],
        "correctAnswer": "test, mark, grade, feedback",
        "explanation": "These words are linked by the topic of assessment."
      },
      {
        "id": "M1-U4-042",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "lexical_set",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The words “airport, passport, luggage, boarding pass” can be grouped together because they share:",
        "prompt": "Choose the best answer.",
        "options": [
          "A topic area",
          "A common root",
          "An opposite meaning"
        ],
        "correctAnswer": "A topic area",
        "explanation": "They form a lexical set connected with air travel."
      },
      {
        "id": "M1-U4-043",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "lexical_set",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which set is based on semantic topic rather than morphology?",
        "prompt": "Choose the best answer.",
        "options": [
          "keyboard, screen, mouse, printer",
          "employ, employer, employee, employment",
          "decide, decision, decisive, decisively"
        ],
        "correctAnswer": "keyboard, screen, mouse, printer",
        "explanation": "These items belong to the topic of computing but do not share one morphological root."
      },
      {
        "id": "M1-U4-044",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "lexical_set",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "A teacher organises vocabulary under the heading “Weather”: windy, cloudy, humid, stormy.",
        "prompt": "What is the teacher creating?",
        "options": [
          "A lexical set",
          "A word family",
          "A set of homophones"
        ],
        "correctAnswer": "A lexical set",
        "explanation": "The words are grouped by a shared topic or semantic field."
      },
      {
        "id": "M1-U4-045",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "lexical_set",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which statement is true of lexical sets?",
        "prompt": "Choose the best answer.",
        "options": [
          "They help organise vocabulary according to semantic relationships or topic",
          "Every word in the set must have the same root",
          "Every word in the set must be the same part of speech"
        ],
        "correctAnswer": "They help organise vocabulary according to semantic relationships or topic",
        "explanation": "Lexical sets are semantic groupings and can contain different word classes and unrelated roots."
      },
      {
        "id": "M1-U4-046",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "homophone",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which pair consists of homophones?",
        "prompt": "Choose the best answer.",
        "options": [
          "weak / week",
          "weak / strong",
          "weak / weakness"
        ],
        "correctAnswer": "weak / week",
        "explanation": "“Weak” and “week” are pronounced the same but differ in spelling and meaning."
      },
      {
        "id": "M1-U4-047",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "homophone",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "A listening activity asks learners to distinguish the intended meaning of /peə/ in context: “pair” or “pear”.",
        "prompt": "Which lexical relationship is involved?",
        "options": [
          "Homophony",
          "Antonymy",
          "Collocation"
        ],
        "correctAnswer": "Homophony",
        "explanation": "“Pair” and “pear” share the same pronunciation but have different meanings."
      },
      {
        "id": "M1-U4-048",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "homophone",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which pair is NOT homophonous in standard pronunciation?",
        "prompt": "Choose the best answer.",
        "options": [
          "know / no",
          "one / won",
          "food / foot"
        ],
        "correctAnswer": "food / foot",
        "explanation": "“Food” and “foot” have different vowel sounds."
      },
      {
        "id": "M1-U4-049",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "homophone",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which definition is correct?",
        "prompt": "Choose the best answer.",
        "options": [
          "Homophones sound the same but have different meanings",
          "Homophones have opposite meanings",
          "Homophones are words that commonly occur together"
        ],
        "correctAnswer": "Homophones sound the same but have different meanings",
        "explanation": "Shared pronunciation is the defining feature of homophones."
      },
      {
        "id": "M1-U4-050",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "homophone",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Why can homophones create spelling difficulties?",
        "prompt": "Choose the best answer.",
        "options": [
          "The pronunciation alone may not show which spelling and meaning is intended",
          "They always contain silent letters",
          "They always belong to different registers"
        ],
        "correctAnswer": "The pronunciation alone may not show which spelling and meaning is intended",
        "explanation": "Because homophones sound the same, context is often needed to choose the correct spelling and meaning."
      },
      {
        "id": "M1-U4-051",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "collocation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which combination is the most natural collocation?",
        "prompt": "Choose the best answer.",
        "options": [
          "take an exam",
          "make an exam",
          "do an exam paper"
        ],
        "correctAnswer": "take an exam",
        "explanation": "“Take an exam” is a standard collocation in many varieties of English."
      },
      {
        "id": "M1-U4-052",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "collocation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which adjective commonly collocates with “mistake”?",
        "prompt": "Choose the best answer.",
        "options": [
          "serious",
          "powerful",
          "deeply"
        ],
        "correctAnswer": "serious",
        "explanation": "“Serious mistake” is a conventional adjective + noun collocation."
      },
      {
        "id": "M1-U4-053",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "collocation",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which sentence contains an unnatural collocation?",
        "prompt": "Choose the best answer.",
        "options": [
          "She made a decision.",
          "She did her homework.",
          "She performed a decision."
        ],
        "correctAnswer": "She performed a decision.",
        "explanation": "English normally uses “make a decision”, not “perform a decision”."
      },
      {
        "id": "M1-U4-054",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "collocation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "“Highly effective” is an example of which type of lexical relationship?",
        "prompt": "Choose the best answer.",
        "options": [
          "Collocation",
          "Antonymy",
          "Homophony"
        ],
        "correctAnswer": "Collocation",
        "explanation": "“Highly” commonly occurs with adjectives such as “effective”."
      },
      {
        "id": "M1-U4-055",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "collocation",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "A learner knows the meaning of “decision” but repeatedly says “do a decision”. What knowledge is mainly missing?",
        "prompt": "Choose the best answer.",
        "options": [
          "Collocational knowledge",
          "Knowledge of antonyms",
          "Knowledge of homophones"
        ],
        "correctAnswer": "Collocational knowledge",
        "explanation": "The learner needs to know which words typically combine with “decision”."
      },
      {
        "id": "M1-U4-056",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "register",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which sentence uses the most informal register?",
        "prompt": "Choose the best answer.",
        "options": [
          "That lesson was awesome!",
          "The lesson was highly effective.",
          "The lesson achieved its stated objectives."
        ],
        "correctAnswer": "That lesson was awesome!",
        "explanation": "“Awesome” in this context is conversational and informal."
      },
      {
        "id": "M1-U4-057",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "register",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which expression would be most appropriate in a formal email to an examination centre?",
        "prompt": "Choose the best answer.",
        "options": [
          "I am writing to enquire about the test date.",
          "Hey, when's the test?",
          "Just wanna know the date."
        ],
        "correctAnswer": "I am writing to enquire about the test date.",
        "explanation": "The wording is appropriately formal and professional."
      },
      {
        "id": "M1-U4-058",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "register",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "A learner uses “gonna” in a formal academic presentation.",
        "prompt": "What vocabulary issue is most relevant?",
        "options": [
          "Register",
          "Homophony",
          "Antonymy"
        ],
        "correctAnswer": "Register",
        "explanation": "“Gonna” is associated with informal spoken language and may be inappropriate in a formal academic context."
      },
      {
        "id": "M1-U4-059",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "register",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "The difference between “depart” and “leave” can partly be described in terms of:",
        "prompt": "Choose the best answer.",
        "options": [
          "Register",
          "Homophony",
          "Word formation only"
        ],
        "correctAnswer": "Register",
        "explanation": "“Depart” is generally more formal than “leave” in many contexts."
      },
      {
        "id": "M1-U4-060",
        "module": 1,
        "unit": 4,
        "section": "test",
        "skill": "register",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which statement about register is most accurate?",
        "prompt": "Choose the best answer.",
        "options": [
          "Appropriate language choices depend on audience, purpose and situation",
          "Formal language is always better than informal language",
          "Register concerns pronunciation only"
        ],
        "correctAnswer": "Appropriate language choices depend on audience, purpose and situation",
        "explanation": "Register is about selecting language appropriate to context, including audience, purpose and degree of formality."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U4-MATCH-T01",
        "section": "test",
        "instruction": "Match each item with the lexical term it illustrates.",
        "optionBank": [
          "Synonym",
          "Antonym",
          "Lexical set",
          "Homophone",
          "Collocation",
          "Register"
        ],
        "items": [
          {
            "questionId": "M1-U4-031",
            "example": "purchase / buy",
            "correctAnswer": "Synonym"
          },
          {
            "questionId": "M1-U4-036",
            "example": "increase / decrease",
            "correctAnswer": "Antonym"
          },
          {
            "questionId": "M1-U4-042",
            "example": "airport / passport / luggage / boarding pass",
            "correctAnswer": "Lexical set"
          },
          {
            "questionId": "M1-U4-046",
            "example": "weak / week",
            "correctAnswer": "Homophone"
          },
          {
            "questionId": "M1-U4-054",
            "example": "highly effective",
            "correctAnswer": "Collocation"
          },
          {
            "questionId": "M1-U4-057",
            "example": "I am writing to enquire about the test date.",
            "correctAnswer": "Register"
          }
        ]
      }
    ]
  },
  "5": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 5,
      "title": "Phonology: Sounds & Stress",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Describing language: Phonology — IPA symbols, phonemes, word stress and sentence stress",
      "scopeNote": "Intonation, linking, weak forms and connected speech are reserved for Unit 6.",
      "skills": [
        "phoneme_ipa",
        "vowels_consonants",
        "voicing",
        "minimal_pairs",
        "word_stress",
        "sentence_stress"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U5-006",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "phoneme_ipa",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Think about the first sound in “judge”.",
        "prompt": "Which IPA symbol represents this sound?",
        "options": [
          "/dʒ/",
          "/j/",
          "/ʒ/"
        ],
        "correctAnswer": "/dʒ/",
        "explanation": "The first sound in “judge” is /dʒ/."
      },
      {
        "id": "M1-U5-007",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "phoneme_ipa",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Think about the final sound in “sing”.",
        "prompt": "Which IPA symbol represents this sound?",
        "options": [
          "/ŋ/",
          "/n/",
          "/g/"
        ],
        "correctAnswer": "/ŋ/",
        "explanation": "The final sound in “sing” is /ŋ/ in standard pronunciation."
      },
      {
        "id": "M1-U5-008",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "phoneme_ipa",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which definition best describes a phoneme?",
        "prompt": "Choose the best answer.",
        "options": [
          "A distinctive sound unit that can contrast meaning",
          "Any written letter",
          "A group of related words"
        ],
        "correctAnswer": "A distinctive sound unit that can contrast meaning",
        "explanation": "A phoneme is a sound category that can distinguish words and meanings."
      },
      {
        "id": "M1-U5-009",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "phoneme_ipa",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Think about the first sound in “this”.",
        "prompt": "Which IPA symbol represents this sound?",
        "options": [
          "/ð/",
          "/θ/",
          "/d/"
        ],
        "correctAnswer": "/ð/",
        "explanation": "The first sound in “this” is /ð/."
      },
      {
        "id": "M1-U5-010",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "phoneme_ipa",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Why are IPA symbols useful in language teaching?",
        "prompt": "Choose the best answer.",
        "options": [
          "They represent pronunciation consistently",
          "They show verb tense",
          "They show formality"
        ],
        "correctAnswer": "They represent pronunciation consistently",
        "explanation": "IPA symbols represent sounds independently of ordinary spelling."
      },
      {
        "id": "M1-U5-016",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "vowels_consonants",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which symbol represents a vowel sound?",
        "prompt": "Choose the best answer.",
        "options": [
          "/ʌ/",
          "/v/",
          "/tʃ/"
        ],
        "correctAnswer": "/ʌ/",
        "explanation": "/ʌ/ is a vowel sound."
      },
      {
        "id": "M1-U5-017",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "vowels_consonants",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which symbol represents a consonant sound?",
        "prompt": "Choose the best answer.",
        "options": [
          "/ʒ/",
          "/ɒ/",
          "/ə/"
        ],
        "correctAnswer": "/ʒ/",
        "explanation": "/ʒ/ is a consonant sound."
      },
      {
        "id": "M1-U5-018",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "vowels_consonants",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which pair contains two vowel phonemes?",
        "prompt": "Choose the best answer.",
        "options": [
          "/ɪ/ and /iː/",
          "/p/ and /b/",
          "/s/ and /z/"
        ],
        "correctAnswer": "/ɪ/ and /iː/",
        "explanation": "Both /ɪ/ and /iː/ are vowel phonemes."
      },
      {
        "id": "M1-U5-019",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "vowels_consonants",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which symbol represents the weak central vowel called schwa?",
        "prompt": "Choose the best answer.",
        "options": [
          "/ə/",
          "/æ/",
          "/e/"
        ],
        "correctAnswer": "/ə/",
        "explanation": "Schwa is represented by /ə/."
      },
      {
        "id": "M1-U5-020",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "vowels_consonants",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which statement is true?",
        "prompt": "Choose the best answer.",
        "options": [
          "A vowel sound can form the nucleus of a syllable",
          "Every consonant must be followed by a written vowel",
          "Every vowel letter represents the same sound"
        ],
        "correctAnswer": "A vowel sound can form the nucleus of a syllable",
        "explanation": "A vowel sound normally forms the central part of a syllable."
      },
      {
        "id": "M1-U5-026",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "voicing",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which pair contrasts an unvoiced sound with its voiced counterpart?",
        "prompt": "Choose the best answer.",
        "options": [
          "/t/ and /d/",
          "/m/ and /n/",
          "/l/ and /r/"
        ],
        "correctAnswer": "/t/ and /d/",
        "explanation": "/t/ is unvoiced and /d/ is voiced."
      },
      {
        "id": "M1-U5-027",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "voicing",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which sound is voiced?",
        "prompt": "Choose the best answer.",
        "options": [
          "/v/",
          "/f/",
          "/θ/"
        ],
        "correctAnswer": "/v/",
        "explanation": "/v/ is voiced."
      },
      {
        "id": "M1-U5-028",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "voicing",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which pair is distinguished mainly by voicing?",
        "prompt": "Choose the best answer.",
        "options": [
          "/ʃ/ and /ʒ/",
          "/ʃ/ and /tʃ/",
          "/m/ and /ŋ/"
        ],
        "correctAnswer": "/ʃ/ and /ʒ/",
        "explanation": "/ʃ/ is unvoiced and /ʒ/ is voiced."
      },
      {
        "id": "M1-U5-029",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "voicing",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "What happens during the production of a voiced sound?",
        "prompt": "Choose the best answer.",
        "options": [
          "The vocal folds vibrate",
          "The pitch always rises",
          "The sound must be a vowel"
        ],
        "correctAnswer": "The vocal folds vibrate",
        "explanation": "Voiced sounds involve vibration of the vocal folds."
      },
      {
        "id": "M1-U5-030",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "voicing",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which classroom technique most directly helps learners notice voicing?",
        "prompt": "Choose the best answer.",
        "options": [
          "Feeling throat vibration while producing contrasting sounds",
          "Counting written letters",
          "Underlining stressed words"
        ],
        "correctAnswer": "Feeling throat vibration while producing contrasting sounds",
        "explanation": "Touching the throat makes voicing physically noticeable."
      },
      {
        "id": "M1-U5-036",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "minimal_pairs",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which pair is a minimal pair?",
        "prompt": "Choose the best answer.",
        "options": [
          "thin / sin",
          "thin / thing",
          "thin / teacher"
        ],
        "correctAnswer": "thin / sin",
        "explanation": "“Thin” and “sin” differ by one phoneme."
      },
      {
        "id": "M1-U5-037",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "minimal_pairs",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "“cap” and “cab” differ only in their final consonant phoneme.",
        "prompt": "What are they?",
        "options": [
          "A minimal pair",
          "Homophones",
          "A word family"
        ],
        "correctAnswer": "A minimal pair",
        "explanation": "They differ by one phoneme and have different meanings."
      },
      {
        "id": "M1-U5-038",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "minimal_pairs",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which pair is NOT a minimal pair?",
        "prompt": "Choose the best answer.",
        "options": [
          "ship / sheep",
          "fan / van",
          "ship / teacher"
        ],
        "correctAnswer": "ship / teacher",
        "explanation": "The words differ in several phonemes and syllables."
      },
      {
        "id": "M1-U5-039",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "minimal_pairs",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "A pronunciation exercise contrasts /ɪ/ and /iː/ using “ship” and “sheep”.",
        "prompt": "What is the main aim?",
        "options": [
          "To help learners discriminate between two phonemes",
          "To teach formal register",
          "To teach suffixes"
        ],
        "correctAnswer": "To help learners discriminate between two phonemes",
        "explanation": "Minimal-pair work develops perception and production of sound contrasts."
      },
      {
        "id": "M1-U5-040",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "minimal_pairs",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which feature must be true for two words to form a minimal pair?",
        "prompt": "Choose the best answer.",
        "options": [
          "They differ by only one phoneme in the same position",
          "They have identical spelling",
          "They belong to the same word family"
        ],
        "correctAnswer": "They differ by only one phoneme in the same position",
        "explanation": "A minimal pair differs in one phonemic contrast while the rest of the sound sequence remains the same."
      },
      {
        "id": "M1-U5-046",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "word_stress",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which word is typically stressed on the second syllable?",
        "prompt": "Choose the best answer.",
        "options": [
          "banana",
          "teacher",
          "comfortable"
        ],
        "correctAnswer": "banana",
        "explanation": "“Banana” is typically ba-NA-na."
      },
      {
        "id": "M1-U5-047",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "word_stress",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which notation shows first-syllable stress in “teacher”?",
        "prompt": "Choose the best answer.",
        "options": [
          "TEAcher",
          "teaCHER",
          "teachER"
        ],
        "correctAnswer": "TEAcher",
        "explanation": "Capitalising the stressed syllable is a common teaching convention."
      },
      {
        "id": "M1-U5-048",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "word_stress",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which pair best illustrates a stress shift within a word family?",
        "prompt": "Choose the best answer.",
        "options": [
          "PHOtograph / phoTOGraphy",
          "BIG / large",
          "SEE / sea"
        ],
        "correctAnswer": "PHOtograph / phoTOGraphy",
        "explanation": "The main stress shifts across related forms."
      },
      {
        "id": "M1-U5-049",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "word_stress",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "What must learners identify to mark word stress accurately?",
        "prompt": "Choose the best answer.",
        "options": [
          "The stressed syllable",
          "Only the number of letters",
          "The register"
        ],
        "correctAnswer": "The stressed syllable",
        "explanation": "Word stress is marked by identifying the syllable with primary prominence."
      },
      {
        "id": "M1-U5-050",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "word_stress",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Why can incorrect word stress reduce intelligibility?",
        "prompt": "Choose the best answer.",
        "options": [
          "Listeners rely partly on expected stress patterns to recognise words",
          "Stress changes every consonant into a vowel",
          "Word stress is part of spelling"
        ],
        "correctAnswer": "Listeners rely partly on expected stress patterns to recognise words",
        "explanation": "Unexpected stress may make a familiar word harder to recognise."
      },
      {
        "id": "M1-U5-056",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "sentence_stress",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "In “I wanted the BLUE one”, stressing “BLUE” most likely highlights:",
        "prompt": "Choose the best answer.",
        "options": [
          "A contrast with another colour",
          "The tense of the verb",
          "The number of syllables"
        ],
        "correctAnswer": "A contrast with another colour",
        "explanation": "Contrastive stress can signal correction or contrast."
      },
      {
        "id": "M1-U5-057",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "sentence_stress",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which kinds of words most commonly receive sentence stress in neutral speech?",
        "prompt": "Choose the best answer.",
        "options": [
          "Content words",
          "Articles only",
          "Prepositions only"
        ],
        "correctAnswer": "Content words",
        "explanation": "Content words usually convey the key lexical information."
      },
      {
        "id": "M1-U5-058",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "sentence_stress",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Compare “I sent the EMAIL” and “I SENT the email.”",
        "prompt": "What changes most directly?",
        "options": [
          "The focus or contrast of the message",
          "The grammatical tense",
          "The number of phonemes"
        ],
        "correctAnswer": "The focus or contrast of the message",
        "explanation": "Moving sentence stress changes which information is especially important."
      },
      {
        "id": "M1-U5-059",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "sentence_stress",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which statement about sentence stress is correct?",
        "prompt": "Choose the best answer.",
        "options": [
          "It can vary according to the speaker's intended focus",
          "It always falls on the final word",
          "It is fixed by spelling"
        ],
        "correctAnswer": "It can vary according to the speaker's intended focus",
        "explanation": "Sentence stress can shift with emphasis and meaning."
      },
      {
        "id": "M1-U5-060",
        "module": 1,
        "unit": 5,
        "section": "test",
        "skill": "sentence_stress",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "A learner stresses every word equally in a sentence.",
        "prompt": "What is the most relevant pronunciation issue?",
        "options": [
          "Sentence stress",
          "Word formation",
          "Register"
        ],
        "correctAnswer": "Sentence stress",
        "explanation": "Natural speech normally gives some words greater prominence than others."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U5-MATCH-T01",
        "section": "test",
        "instruction": "Match each example with the phonological feature it illustrates.",
        "optionBank": [
          "Vowel phoneme",
          "Consonant phoneme",
          "Voicing contrast",
          "Minimal pair",
          "Word stress shift",
          "Contrastive sentence stress"
        ],
        "items": [
          {
            "example": "/ʌ/",
            "correctAnswer": "Vowel phoneme"
          },
          {
            "example": "/ʒ/",
            "correctAnswer": "Consonant phoneme"
          },
          {
            "example": "/t/ and /d/",
            "correctAnswer": "Voicing contrast"
          },
          {
            "example": "thin / sin",
            "correctAnswer": "Minimal pair"
          },
          {
            "example": "PHOtograph / phoTOGraphy",
            "correctAnswer": "Word stress shift"
          },
          {
            "example": "I wanted the BLUE one",
            "correctAnswer": "Contrastive sentence stress"
          }
        ]
      }
    ]
  },
  "6": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 6,
      "title": "Phonology: Intonation & Connected Speech",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Describing language: Phonology — intonation and features of connected speech",
      "scopeNote": "Unit 5 covers phonemes, IPA, vowels/consonants, voicing, minimal pairs, word stress and sentence stress.",
      "skills": [
        "intonation",
        "connected_speech",
        "linking",
        "weak_forms",
        "contractions",
        "elision"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U6-006",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "intonation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement best defines intonation?",
        "options": [
          "The pattern of pitch movement across speech",
          "The omission of a sound",
          "The shortening of two grammatical words"
        ],
        "correctAnswer": "The pattern of pitch movement across speech",
        "explanation": "Intonation concerns changes in pitch across an utterance."
      },
      {
        "id": "M1-U6-007",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "intonation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A speaker says “Really?” with strongly rising pitch to show surprise. Which feature is most relevant?",
        "options": [
          "Intonation",
          "Contraction",
          "Elision"
        ],
        "correctAnswer": "Intonation",
        "explanation": "The pitch movement shapes the communicative effect."
      },
      {
        "id": "M1-U6-008",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "intonation",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity most directly practises intonation?",
        "options": [
          "Marking rising and falling pitch on short dialogues",
          "Matching prefixes to roots",
          "Sorting vocabulary by topic"
        ],
        "correctAnswer": "Marking rising and falling pitch on short dialogues",
        "explanation": "This activity directly focuses learners on pitch movement."
      },
      {
        "id": "M1-U6-009",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "intonation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Why is intonation important for communication?",
        "options": [
          "It can express attitude, focus and communicative meaning",
          "It determines spelling",
          "It creates compounds"
        ],
        "correctAnswer": "It can express attitude, focus and communicative meaning",
        "explanation": "Intonation can affect how a listener interprets an utterance."
      },
      {
        "id": "M1-U6-010",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "intonation",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A sentence is grammatically correct, but the speaker's pitch pattern makes it sound unexpectedly rude. Which area needs attention?",
        "options": [
          "Intonation",
          "Affixation",
          "Homophones"
        ],
        "correctAnswer": "Intonation",
        "explanation": "Inappropriate intonation can change the perceived attitude of an utterance."
      },
      {
        "id": "M1-U6-016",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "connected_speech",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which term is an umbrella label for linking, weak forms and elision in natural speech?",
        "options": [
          "Connected speech",
          "Word formation",
          "Lexical set"
        ],
        "correctAnswer": "Connected speech",
        "explanation": "Connected speech is the broader category that includes these pronunciation processes."
      },
      {
        "id": "M1-U6-017",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "connected_speech",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher asks learners to notice how words run together in a recording. What is the main focus?",
        "options": [
          "Connected speech",
          "Word families",
          "Register"
        ],
        "correctAnswer": "Connected speech",
        "explanation": "The activity focuses on sound interaction across words."
      },
      {
        "id": "M1-U6-018",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "connected_speech",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about connected speech is most accurate?",
        "options": [
          "It includes changes that occur when words are spoken in a continuous stream",
          "It simply means speaking quickly",
          "It means stressing every word"
        ],
        "correctAnswer": "It includes changes that occur when words are spoken in a continuous stream",
        "explanation": "Connected speech includes processes such as linking, weakening and elision."
      },
      {
        "id": "M1-U6-019",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "connected_speech",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which learner problem is most closely related to connected speech?",
        "options": [
          "Recognising familiar words after they have been reduced or linked",
          "Choosing a formal synonym",
          "Identifying a suffix"
        ],
        "correctAnswer": "Recognising familiar words after they have been reduced or linked",
        "explanation": "Connected speech can make known words harder to recognise."
      },
      {
        "id": "M1-U6-020",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "connected_speech",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teaching aim best matches connected-speech work?",
        "options": [
          "Help learners recognise and produce natural sound changes across words",
          "Teach irregular spelling only",
          "Teach antonyms"
        ],
        "correctAnswer": "Help learners recognise and produce natural sound changes across words",
        "explanation": "Connected-speech practice focuses on how sounds behave in continuous language."
      },
      {
        "id": "M1-U6-026",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "linking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which pronunciation feature joins sounds across word boundaries?",
        "options": [
          "Linking",
          "Affixation",
          "Antonymy"
        ],
        "correctAnswer": "Linking",
        "explanation": "Linking connects neighbouring words in connected speech."
      },
      {
        "id": "M1-U6-027",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "linking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which instruction most directly targets linking?",
        "options": [
          "Say the words smoothly without a pause between them",
          "Stress every syllable equally",
          "Underline all adjectives"
        ],
        "correctAnswer": "Say the words smoothly without a pause between them",
        "explanation": "This directly practises connection across word boundaries."
      },
      {
        "id": "M1-U6-028",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "linking",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which phrase is especially likely to involve linking in natural speech?",
        "options": [
          "come in",
          "careless",
          "teacher"
        ],
        "correctAnswer": "come in",
        "explanation": "The final consonant of “come” can connect smoothly to the initial vowel of “in”."
      },
      {
        "id": "M1-U6-029",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "linking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What is a main listening benefit of studying linking?",
        "options": [
          "Learners recognise where words connect in natural speech",
          "Learners learn word families",
          "Learners learn formal register"
        ],
        "correctAnswer": "Learners recognise where words connect in natural speech",
        "explanation": "Awareness of linking helps learners decode continuous language."
      },
      {
        "id": "M1-U6-030",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "linking",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Linking is best described as:",
        "options": [
          "A connected-speech feature that joins sounds between neighbouring words",
          "A process that always removes a sound",
          "A change in grammatical form"
        ],
        "correctAnswer": "A connected-speech feature that joins sounds between neighbouring words",
        "explanation": "Linking is one specific process within connected speech."
      },
      {
        "id": "M1-U6-036",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "weak_forms",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which is a common weak pronunciation of unstressed “to”?",
        "options": [
          "/tə/",
          "/tuː/ with strong stress",
          "/taɪ/"
        ],
        "correctAnswer": "/tə/",
        "explanation": "Unstressed “to” is commonly reduced to /tə/."
      },
      {
        "id": "M1-U6-037",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "weak_forms",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What term describes an unstressed reduced pronunciation of a function word?",
        "options": [
          "Weak form",
          "Minimal pair",
          "Word family"
        ],
        "correctAnswer": "Weak form",
        "explanation": "Weak forms occur when function words are not stressed."
      },
      {
        "id": "M1-U6-038",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "weak_forms",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "When is a strong form of a function word more likely?",
        "options": [
          "When it is stressed for emphasis or contrast",
          "Whenever it occurs in the middle of a sentence",
          "Only when speech is fast"
        ],
        "correctAnswer": "When it is stressed for emphasis or contrast",
        "explanation": "Function words can take strong forms when they receive special prominence."
      },
      {
        "id": "M1-U6-039",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "weak_forms",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which pair best contrasts a weak and strong form of “can”?",
        "options": [
          "/kən/ and /kæn/",
          "/kæn/ and /kæn/",
          "/kən/ and /kən/"
        ],
        "correctAnswer": "/kən/ and /kæn/",
        "explanation": "/kən/ is a common weak form and /kæn/ is the strong form."
      },
      {
        "id": "M1-U6-040",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "weak_forms",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner expects every occurrence of “and” to have its full pronunciation and misses it in rapid speech. Which area needs attention?",
        "options": [
          "Weak forms",
          "Word families",
          "Register"
        ],
        "correctAnswer": "Weak forms",
        "explanation": "Function words such as “and” are frequently reduced when unstressed."
      },
      {
        "id": "M1-U6-046",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "contractions",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which is the contracted form of “we have”?",
        "options": [
          "we've",
          "we're",
          "we'll"
        ],
        "correctAnswer": "we've",
        "explanation": "“We've” is the contraction of “we have”."
      },
      {
        "id": "M1-U6-047",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "contractions",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "In “I'd finished before they arrived”, what does “I'd” mean?",
        "options": [
          "I had",
          "I would",
          "I did"
        ],
        "correctAnswer": "I had",
        "explanation": "Before the past participle “finished”, “I'd” represents “I had”."
      },
      {
        "id": "M1-U6-048",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "contractions",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which item is NOT a contraction?",
        "options": [
          "teacher",
          "can't",
          "she'll"
        ],
        "correctAnswer": "teacher",
        "explanation": "“Teacher” is a lexical word, not a shortened grammatical form."
      },
      {
        "id": "M1-U6-049",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "contractions",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "In “He's finished the task”, what does “'s” represent?",
        "options": [
          "has",
          "is",
          "does"
        ],
        "correctAnswer": "has",
        "explanation": "Before the past participle “finished”, “he's” means “he has”."
      },
      {
        "id": "M1-U6-050",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "contractions",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teaching aim best fits contraction practice?",
        "options": [
          "Help learners recognise common shortened grammatical forms in speech",
          "Teach suffixes",
          "Teach antonyms"
        ],
        "correctAnswer": "Help learners recognise common shortened grammatical forms in speech",
        "explanation": "Contraction practice supports listening and natural spoken production."
      },
      {
        "id": "M1-U6-056",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "elision",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which term describes the omission of a sound in connected speech?",
        "options": [
          "Elision",
          "Contraction",
          "Intonation"
        ],
        "correctAnswer": "Elision",
        "explanation": "Elision means a sound is not pronounced in a connected sequence."
      },
      {
        "id": "M1-U6-057",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "elision",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which situation best illustrates elision?",
        "options": [
          "A consonant sound is omitted in a difficult sound sequence",
          "A function word is strongly stressed",
          "Pitch rises at the end of a question"
        ],
        "correctAnswer": "A consonant sound is omitted in a difficult sound sequence",
        "explanation": "Elision may remove a sound from a complex sequence."
      },
      {
        "id": "M1-U6-058",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "elision",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "How does elision differ from linking?",
        "options": [
          "Elision omits a sound; linking connects sounds across words",
          "Elision changes register; linking changes grammar",
          "Elision adds stress; linking removes stress"
        ],
        "correctAnswer": "Elision omits a sound; linking connects sounds across words",
        "explanation": "They are different connected-speech processes: omission versus connection."
      },
      {
        "id": "M1-U6-059",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "elision",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Why should learners be aware of elision when listening?",
        "options": [
          "They may otherwise expect to hear every sound suggested by the written form",
          "It helps them identify prefixes",
          "It shows formal register"
        ],
        "correctAnswer": "They may otherwise expect to hear every sound suggested by the written form",
        "explanation": "Awareness of sound omission makes natural speech easier to decode."
      },
      {
        "id": "M1-U6-060",
        "module": 1,
        "unit": 6,
        "section": "test",
        "skill": "elision",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity best develops awareness of elision?",
        "options": [
          "Compare a written phrase with a recording and identify sounds that are not clearly pronounced",
          "Match synonyms",
          "Sort words by suffix"
        ],
        "correctAnswer": "Compare a written phrase with a recording and identify sounds that are not clearly pronounced",
        "explanation": "This activity directly draws attention to omitted sounds."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U6-MATCH-T01",
        "section": "test",
        "instruction": "Match each description with the correct phonological term.",
        "optionBank": [
          "Intonation",
          "Connected speech",
          "Linking",
          "Weak form",
          "Contraction",
          "Elision"
        ],
        "items": [
          {
            "example": "Pitch movement that can express attitude",
            "correctAnswer": "Intonation"
          },
          {
            "example": "Umbrella term for sound changes in continuous spoken language",
            "correctAnswer": "Connected speech"
          },
          {
            "example": "Connection of sounds across neighbouring words",
            "correctAnswer": "Linking"
          },
          {
            "example": "Reduced pronunciation of an unstressed function word",
            "correctAnswer": "Weak form"
          },
          {
            "example": "Shortened form such as we've or can't",
            "correctAnswer": "Contraction"
          },
          {
            "example": "Omission of a sound in continuous speech",
            "correctAnswer": "Elision"
          }
        ]
      }
    ]
  },
  "7": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 7,
      "title": "Functions",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Describing language: Functions — context, levels of formality, appropriacy, functions and typical exponents",
      "skills": [
        "requests",
        "invitations",
        "agreement_disagreement",
        "thanking",
        "introductions",
        "refusals"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U7-006",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "requests",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which exponent is most likely to be used for a polite request?",
        "prompt": "Choose the best answer.",
        "options": [
          "Would you mind waiting a moment?",
          "Wait.",
          "No way!"
        ],
        "correctAnswer": "Would you mind waiting a moment?",
        "explanation": "“Would you mind...?” is a common polite request form."
      },
      {
        "id": "M1-U7-007",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "requests",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "“Pass me that pen, will you?”",
        "prompt": "What function does this exponent perform?",
        "options": [
          "Requesting",
          "Apologising",
          "Agreeing"
        ],
        "correctAnswer": "Requesting",
        "explanation": "The speaker is asking another person to pass the pen."
      },
      {
        "id": "M1-U7-008",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "requests",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "A learner says to a university administrator, “Give me the form.”",
        "prompt": "What is the main problem?",
        "options": [
          "The exponent is too direct for the context",
          "The function is thanking",
          "The grammar makes it an invitation"
        ],
        "correctAnswer": "The exponent is too direct for the context",
        "explanation": "The request may be grammatically possible but is not appropriately polite for the situation."
      },
      {
        "id": "M1-U7-009",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "requests",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which factor most affects whether “Could you...?” or “Do it now.” is appropriate?",
        "prompt": "Choose the best answer.",
        "options": [
          "Context and relationship between speakers",
          "Number of syllables",
          "Word family"
        ],
        "correctAnswer": "Context and relationship between speakers",
        "explanation": "Appropriacy depends on factors such as audience, purpose, power relationship and situation."
      },
      {
        "id": "M1-U7-010",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "requests",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which statement is most accurate?",
        "prompt": "Choose the best answer.",
        "options": [
          "One function can be expressed by several different exponents",
          "Every function has only one fixed exponent",
          "Formality is unrelated to context"
        ],
        "correctAnswer": "One function can be expressed by several different exponents",
        "explanation": "A communicative function such as requesting can be realised by many different language forms."
      },
      {
        "id": "M1-U7-016",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "invitations",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which exponent is most clearly an invitation?",
        "prompt": "Choose the best answer.",
        "options": [
          "Would you like to join us tomorrow?",
          "Would you mind opening the door?",
          "Thank you for coming."
        ],
        "correctAnswer": "Would you like to join us tomorrow?",
        "explanation": "The speaker is inviting the listener to participate."
      },
      {
        "id": "M1-U7-017",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "invitations",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "“Why don't we have lunch together?”",
        "prompt": "What function does this exponent most likely perform?",
        "options": [
          "Inviting/suggesting a shared activity",
          "Requesting permission",
          "Thanking"
        ],
        "correctAnswer": "Inviting/suggesting a shared activity",
        "explanation": "The speaker proposes a shared activity and invites the listener to take part."
      },
      {
        "id": "M1-U7-018",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "invitations",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which invitation is least appropriate for a formal business event?",
        "prompt": "Choose the best answer.",
        "options": [
          "Wanna come hang out with us?",
          "We would be pleased if you could attend.",
          "You are warmly invited to join us."
        ],
        "correctAnswer": "Wanna come hang out with us?",
        "explanation": "The wording is very informal and unsuitable for a formal business context."
      },
      {
        "id": "M1-U7-019",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "invitations",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "In “Would you like to come to dinner?”, what is “Would you like to...”?",
        "prompt": "Choose the best answer.",
        "options": [
          "An exponent of inviting",
          "A definition of register",
          "A phonological feature"
        ],
        "correctAnswer": "An exponent of inviting",
        "explanation": "An exponent is the actual language used to realise a communicative function."
      },
      {
        "id": "M1-U7-020",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "invitations",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Why might a TKT question give several different invitation phrases?",
        "prompt": "Choose the best answer.",
        "options": [
          "To test recognition of different exponents of the same function",
          "To prove all invitations have identical formality",
          "To test spelling only"
        ],
        "correctAnswer": "To test recognition of different exponents of the same function",
        "explanation": "TKT tests the relationship between communicative functions and the language forms used to express them."
      },
      {
        "id": "M1-U7-026",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "agreement_disagreement",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which exponent shows agreement?",
        "prompt": "Choose the best answer.",
        "options": [
          "That's a good point.",
          "I'm afraid I can't.",
          "Could you repeat that?"
        ],
        "correctAnswer": "That's a good point.",
        "explanation": "The speaker positively evaluates and aligns with the previous idea."
      },
      {
        "id": "M1-U7-027",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "agreement_disagreement",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "“I'm afraid I don't quite agree.”",
        "prompt": "What function does this exponent perform?",
        "options": [
          "Disagreeing politely",
          "Inviting formally",
          "Thanking neutrally"
        ],
        "correctAnswer": "Disagreeing politely",
        "explanation": "The language softens the expression of disagreement."
      },
      {
        "id": "M1-U7-028",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "agreement_disagreement",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which exponent would be most appropriate for polite disagreement in a professional meeting?",
        "prompt": "Choose the best answer.",
        "options": [
          "I see your point, but I'm not completely convinced.",
          "No. You're wrong.",
          "That's nonsense."
        ],
        "correctAnswer": "I see your point, but I'm not completely convinced.",
        "explanation": "This exponent recognises the other view and expresses disagreement tactfully."
      },
      {
        "id": "M1-U7-029",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "agreement_disagreement",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "What does the expression “Yeah, exactly” most likely function as?",
        "prompt": "Choose the best answer.",
        "options": [
          "An informal exponent of agreement",
          "A formal invitation",
          "A refusal"
        ],
        "correctAnswer": "An informal exponent of agreement",
        "explanation": "“Yeah, exactly” commonly signals agreement in informal speech."
      },
      {
        "id": "M1-U7-030",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "agreement_disagreement",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Why is context important when choosing an exponent of disagreement?",
        "prompt": "Choose the best answer.",
        "options": [
          "The acceptable degree of directness depends on audience and situation",
          "Disagreement changes into a different tense",
          "Context determines spelling"
        ],
        "correctAnswer": "The acceptable degree of directness depends on audience and situation",
        "explanation": "Appropriate disagreement varies according to relationship, setting and purpose."
      },
      {
        "id": "M1-U7-036",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "thanking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which exponent is the most neutral way to thank someone?",
        "prompt": "Choose the best answer.",
        "options": [
          "Thank you.",
          "Much obliged.",
          "Cheers, mate!"
        ],
        "correctAnswer": "Thank you.",
        "explanation": "“Thank you” is broadly neutral and appropriate in many contexts."
      },
      {
        "id": "M1-U7-037",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "thanking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "“I really appreciate your help.”",
        "prompt": "What function does this exponent perform?",
        "options": [
          "Thanking",
          "Requesting",
          "Inviting"
        ],
        "correctAnswer": "Thanking",
        "explanation": "The speaker expresses gratitude and appreciation."
      },
      {
        "id": "M1-U7-038",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "thanking",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "A learner writes “Cheers, dude!” to the director of an examination centre.",
        "prompt": "What is the main issue?",
        "options": [
          "The register is too informal",
          "The function is not thanking",
          "The sentence is a request"
        ],
        "correctAnswer": "The register is too informal",
        "explanation": "The gratitude function is clear, but the exponent is inappropriate for the formal relationship."
      },
      {
        "id": "M1-U7-039",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "thanking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which factor should a learner consider when choosing between “Thanks” and “I am extremely grateful”?",
        "prompt": "Choose the best answer.",
        "options": [
          "Context and desired level of formality",
          "Number of consonants",
          "Word family"
        ],
        "correctAnswer": "Context and desired level of formality",
        "explanation": "Both can express thanks, but appropriacy depends on situation and relationship."
      },
      {
        "id": "M1-U7-040",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "thanking",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which statement best describes the relationship between function and exponent?",
        "prompt": "Choose the best answer.",
        "options": [
          "The function “thanking” can be realised through many different exponents",
          "Every function has one fixed sentence",
          "An exponent is the same as a phoneme"
        ],
        "correctAnswer": "The function “thanking” can be realised through many different exponents",
        "explanation": "A function is the communicative purpose; an exponent is the language form used to express it."
      },
      {
        "id": "M1-U7-046",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "introductions",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which exponent most clearly introduces the speaker in a formal context?",
        "prompt": "Choose the best answer.",
        "options": [
          "Allow me to introduce myself. I'm Dr Patel.",
          "Hiya, I'm Pat.",
          "Thanks for that."
        ],
        "correctAnswer": "Allow me to introduce myself. I'm Dr Patel.",
        "explanation": "The exponent is explicitly introductory and relatively formal."
      },
      {
        "id": "M1-U7-047",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "introductions",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "“I'd like you to meet Ana, our new coordinator.”",
        "prompt": "What function does this exponent perform?",
        "options": [
          "Introducing another person",
          "Requesting permission",
          "Disagreeing"
        ],
        "correctAnswer": "Introducing another person",
        "explanation": "The speaker presents Ana to someone else."
      },
      {
        "id": "M1-U7-048",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "introductions",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "A learner says “Yo, I'm Mike” in a formal job interview.",
        "prompt": "What is the main issue?",
        "options": [
          "The introduction is too informal for the context",
          "The function is refusing",
          "The grammar makes it a request"
        ],
        "correctAnswer": "The introduction is too informal for the context",
        "explanation": "The intended function is clear, but the exponent is not appropriate to the formal setting."
      },
      {
        "id": "M1-U7-049",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "introductions",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "What is the role of context when interpreting “This is Alex”?",
        "prompt": "Choose the best answer.",
        "options": [
          "It helps show whether the speaker is introducing someone",
          "It changes “Alex” into a verb",
          "It determines the word's spelling"
        ],
        "correctAnswer": "It helps show whether the speaker is introducing someone",
        "explanation": "The communicative function of an exponent is interpreted in context."
      },
      {
        "id": "M1-U7-050",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "introductions",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which statement is most accurate about introductions?",
        "prompt": "Choose the best answer.",
        "options": [
          "They can be expressed differently depending on formality and relationship",
          "They always require the same fixed words",
          "They are unrelated to context"
        ],
        "correctAnswer": "They can be expressed differently depending on formality and relationship",
        "explanation": "Different settings call for different exponents of the same social function."
      },
      {
        "id": "M1-U7-056",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "refusals",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which exponent most clearly expresses a polite refusal?",
        "prompt": "Choose the best answer.",
        "options": [
          "I'd love to, but I'm afraid I can't.",
          "Come with us!",
          "Thank you very much."
        ],
        "correctAnswer": "I'd love to, but I'm afraid I can't.",
        "explanation": "The speaker declines while maintaining politeness."
      },
      {
        "id": "M1-U7-057",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "refusals",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "“No, thanks.”",
        "prompt": "What function can this exponent perform in response to an offer?",
        "options": [
          "Refusing",
          "Introducing",
          "Requesting"
        ],
        "correctAnswer": "Refusing",
        "explanation": "The speaker politely declines the offer."
      },
      {
        "id": "M1-U7-058",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "refusals",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "A learner says to a client, “No way. I won't do that.”",
        "prompt": "What is the main appropriacy problem?",
        "options": [
          "The refusal is too direct and informal",
          "The learner is thanking the client",
          "The learner is making an invitation"
        ],
        "correctAnswer": "The refusal is too direct and informal",
        "explanation": "The communicative function is clear, but the exponent is inappropriate for a professional relationship."
      },
      {
        "id": "M1-U7-059",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "refusals",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "Which factor is most important when choosing how direct a refusal should be?",
        "prompt": "Choose the best answer.",
        "options": [
          "Relationship, situation and purpose",
          "Number of syllables",
          "Whether the sentence contains a noun"
        ],
        "correctAnswer": "Relationship, situation and purpose",
        "explanation": "Appropriacy depends on social context and communicative purpose."
      },
      {
        "id": "M1-U7-060",
        "module": 1,
        "unit": 7,
        "section": "test",
        "skill": "refusals",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "Which statement is most accurate?",
        "prompt": "Choose the best answer.",
        "options": [
          "The same refusal function can have formal, neutral and informal exponents",
          "A refusal always begins with “no”",
          "Refusals are unrelated to register"
        ],
        "correctAnswer": "The same refusal function can have formal, neutral and informal exponents",
        "explanation": "Functions can be realised through a range of exponents with different levels of formality and directness."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U7-MATCH-T01",
        "section": "test",
        "instruction": "Match each exponent with the function it most naturally performs.",
        "optionBank": [
          "Requesting",
          "Inviting",
          "Disagreeing",
          "Thanking",
          "Introducing",
          "Refusing"
        ],
        "items": [
          {
            "example": "Would you mind waiting a moment?",
            "correctAnswer": "Requesting"
          },
          {
            "example": "Why don't you come with us?",
            "correctAnswer": "Inviting"
          },
          {
            "example": "I'm not sure I agree.",
            "correctAnswer": "Disagreeing"
          },
          {
            "example": "I really appreciate your help.",
            "correctAnswer": "Thanking"
          },
          {
            "example": "I'd like you to meet Ana.",
            "correctAnswer": "Introducing"
          },
          {
            "example": "I'd love to, but I'm afraid I can't.",
            "correctAnswer": "Refusing"
          }
        ]
      }
    ]
  },
  "8": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 8,
      "title": "Language Skills & Subskills",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Describing language and language skills: reading, listening, speaking, writing, their subskills, and features of spoken/written texts",
      "skills": [
        "reading_gist_skimming",
        "reading_detail_scanning",
        "listening_subskills",
        "speaking_subskills",
        "writing_subskills",
        "text_features"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U8-006",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "reading_gist_skimming",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Learners have 30 seconds to read four short texts and match each one to a heading. Which subskill is primarily being tested?",
        "options": [
          "Reading for gist",
          "Scanning for a number",
          "Proofreading"
        ],
        "correctAnswer": "Reading for gist",
        "explanation": "Matching headings requires understanding the overall meaning of each text."
      },
      {
        "id": "M1-U8-007",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "reading_gist_skimming",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which instruction most clearly encourages skimming?",
        "options": [
          "Read quickly and decide what the text is mainly about",
          "Find the exact price mentioned in paragraph 3",
          "Correct the punctuation"
        ],
        "correctAnswer": "Read quickly and decide what the text is mainly about",
        "explanation": "Skimming involves fast reading for general meaning."
      },
      {
        "id": "M1-U8-008",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "reading_gist_skimming",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher shows only the title and photograph before learners read. Which subskill is the teacher most likely activating?",
        "options": [
          "Predicting",
          "Editing",
          "Scanning"
        ],
        "correctAnswer": "Predicting",
        "explanation": "Titles and visuals provide clues that readers can use to anticipate text content."
      },
      {
        "id": "M1-U8-009",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "reading_gist_skimming",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which task is least suitable for practising gist reading?",
        "options": [
          "Find every example of the past perfect",
          "Choose the best summary sentence",
          "Decide which headline matches the article"
        ],
        "correctAnswer": "Find every example of the past perfect",
        "explanation": "Finding every example of a form requires close reading rather than gist reading."
      },
      {
        "id": "M1-U8-010",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "reading_gist_skimming",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which distinction between skimming and scanning is correct?",
        "options": [
          "Skimming is for general meaning; scanning is for specific information",
          "Skimming is for grammar; scanning is for pronunciation",
          "They are identical"
        ],
        "correctAnswer": "Skimming is for general meaning; scanning is for specific information",
        "explanation": "Skimming seeks an overview; scanning searches selectively for particular information."
      },
      {
        "id": "M1-U8-016",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "reading_detail_scanning",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Learners search a long webpage for the registration deadline. Which subskill are they mainly using?",
        "options": [
          "Scanning",
          "Skimming",
          "Paraphrasing"
        ],
        "correctAnswer": "Scanning",
        "explanation": "They are searching selectively for one specific piece of information."
      },
      {
        "id": "M1-U8-017",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "reading_detail_scanning",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which question most clearly tests reading for detail?",
        "options": [
          "What two problems did the author experience on the journey?",
          "What is the text generally about?",
          "What do you think the article may discuss?"
        ],
        "correctAnswer": "What two problems did the author experience on the journey?",
        "explanation": "Answering requires careful understanding of specific information."
      },
      {
        "id": "M1-U8-018",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "reading_detail_scanning",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "The writer calls a failed proposal “another brilliant idea from management”. Which subskill helps the reader recognise possible sarcasm?",
        "options": [
          "Inferring attitude",
          "Scanning",
          "Skimming"
        ],
        "correctAnswer": "Inferring attitude",
        "explanation": "The reader must interpret attitude from context rather than literal words alone."
      },
      {
        "id": "M1-U8-019",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "reading_detail_scanning",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity practises deducing meaning from context?",
        "options": [
          "Work out an unknown word using the sentences around it",
          "Look up every unknown word before reading",
          "Count the paragraphs"
        ],
        "correctAnswer": "Work out an unknown word using the sentences around it",
        "explanation": "Contextual clues can help readers infer the meaning of unfamiliar vocabulary."
      },
      {
        "id": "M1-U8-020",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "reading_detail_scanning",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement best distinguishes scanning from reading for detail?",
        "options": [
          "Scanning searches selectively for a target; reading for detail processes information more thoroughly",
          "Scanning always takes longer",
          "Reading for detail means reading only headings"
        ],
        "correctAnswer": "Scanning searches selectively for a target; reading for detail processes information more thoroughly",
        "explanation": "Scanning is selective, while detailed reading involves closer processing of relevant information."
      },
      {
        "id": "M1-U8-026",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "listening_subskills",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which task most clearly practises listening for gist?",
        "options": [
          "Decide whether the speakers are discussing work, travel or health",
          "Write down the exact address",
          "Identify every verb tense"
        ],
        "correctAnswer": "Decide whether the speakers are discussing work, travel or health",
        "explanation": "The task focuses on the overall topic rather than details."
      },
      {
        "id": "M1-U8-027",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "listening_subskills",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Learners listen repeatedly to a short extract and identify exact words and pronunciation features. What type of listening is this?",
        "options": [
          "Intensive listening",
          "Listening only for gist",
          "Skimming"
        ],
        "correctAnswer": "Intensive listening",
        "explanation": "Intensive listening involves close, focused attention to a relatively short stretch of speech."
      },
      {
        "id": "M1-U8-028",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "listening_subskills",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which question mainly tests inference in listening?",
        "options": [
          "How does the speaker probably feel about the decision?",
          "What time does the train leave?",
          "How many speakers are there?"
        ],
        "correctAnswer": "How does the speaker probably feel about the decision?",
        "explanation": "The listener must interpret an attitude or feeling that may not be directly stated."
      },
      {
        "id": "M1-U8-029",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "listening_subskills",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher pauses a recording and asks learners what they expect to hear next. Which subskill is being practised?",
        "options": [
          "Predicting",
          "Proofreading",
          "Scanning"
        ],
        "correctAnswer": "Predicting",
        "explanation": "Learners use what they have already heard to anticipate subsequent content."
      },
      {
        "id": "M1-U8-030",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "listening_subskills",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What is the main difference between listening for gist and listening for detail?",
        "options": [
          "Gist focuses on overall meaning; detail focuses on specific information and relationships",
          "Gist is only for beginners",
          "Detail always requires writing"
        ],
        "correctAnswer": "Gist focuses on overall meaning; detail focuses on specific information and relationships",
        "explanation": "The two subskills differ mainly in depth and focus of comprehension."
      },
      {
        "id": "M1-U8-036",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "speaking_subskills",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which behaviour best illustrates an interactive strategy?",
        "options": [
          "Asking for clarification when something is unclear",
          "Checking spelling after writing",
          "Looking for a date in a text"
        ],
        "correctAnswer": "Asking for clarification when something is unclear",
        "explanation": "Clarification requests help speakers manage interaction."
      },
      {
        "id": "M1-U8-037",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "speaking_subskills",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner says, “In other words, the project was delayed because...” Which subskill is the learner using?",
        "options": [
          "Paraphrasing",
          "Scanning",
          "Proofreading"
        ],
        "correctAnswer": "Paraphrasing",
        "explanation": "The learner is reformulating an idea using different wording."
      },
      {
        "id": "M1-U8-038",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "speaking_subskills",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which task primarily develops summarising in speaking?",
        "options": [
          "Listen to a three-minute report and give the main points in thirty seconds",
          "Repeat every sentence exactly",
          "Underline the stressed syllable"
        ],
        "correctAnswer": "Listen to a three-minute report and give the main points in thirty seconds",
        "explanation": "The speaker must select and restate the main information briefly."
      },
      {
        "id": "M1-U8-039",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "speaking_subskills",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement best describes fluency?",
        "options": [
          "The ability to communicate relatively smoothly and efficiently",
          "The absence of every grammatical error",
          "The visual organisation of a written text"
        ],
        "correctAnswer": "The ability to communicate relatively smoothly and efficiently",
        "explanation": "Fluency focuses on flow and ease of communication rather than perfect correctness."
      },
      {
        "id": "M1-U8-040",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "speaking_subskills",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A speaking activity asks learners to focus on correct verb endings and precise pronunciation rather than speed. Which feature is being prioritised?",
        "options": [
          "Accuracy",
          "Fluency",
          "Authenticity"
        ],
        "correctAnswer": "Accuracy",
        "explanation": "Accuracy concerns correct language use, including grammar, vocabulary and pronunciation."
      },
      {
        "id": "M1-U8-046",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "writing_subskills",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity most directly practises proofreading?",
        "options": [
          "Find and correct spelling and punctuation errors in a final draft",
          "Choose the best title for an article",
          "Predict the next paragraph"
        ],
        "correctAnswer": "Find and correct spelling and punctuation errors in a final draft",
        "explanation": "Proofreading focuses on detecting and correcting surface errors."
      },
      {
        "id": "M1-U8-047",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "writing_subskills",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity is mainly editing rather than proofreading?",
        "options": [
          "Remove an irrelevant paragraph and improve the order of ideas",
          "Correct three misspelled words",
          "Add missing full stops only"
        ],
        "correctAnswer": "Remove an irrelevant paragraph and improve the order of ideas",
        "explanation": "Editing includes decisions about relevance, organisation and clarity."
      },
      {
        "id": "M1-U8-048",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "writing_subskills",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which task best practises paraphrasing?",
        "options": [
          "Rewrite a sentence using different words but keep the meaning",
          "Copy a sentence exactly",
          "Find the phone number in a text"
        ],
        "correctAnswer": "Rewrite a sentence using different words but keep the meaning",
        "explanation": "Paraphrasing preserves meaning while changing wording or structure."
      },
      {
        "id": "M1-U8-049",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "writing_subskills",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which task best practises summarising?",
        "options": [
          "Write the three main points of a long text in one short paragraph",
          "Correct every comma",
          "List every example in the text"
        ],
        "correctAnswer": "Write the three main points of a long text in one short paragraph",
        "explanation": "Summarising selects essential information and presents it concisely."
      },
      {
        "id": "M1-U8-050",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "writing_subskills",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner has excellent grammar but the ideas in an essay appear in a confusing order. Which feature most needs improvement?",
        "options": [
          "Organisation",
          "Pronunciation",
          "Scanning"
        ],
        "correctAnswer": "Organisation",
        "explanation": "Written texts need clear logical organisation as well as accurate language."
      },
      {
        "id": "M1-U8-056",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "text_features",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which feature is most directly concerned with how information is visually arranged on a page?",
        "options": [
          "Layout",
          "Fluency",
          "Inference"
        ],
        "correctAnswer": "Layout",
        "explanation": "Layout includes visual features such as headings, columns, paragraphs and spacing."
      },
      {
        "id": "M1-U8-057",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "text_features",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A podcast episode produced for the general public and used unchanged in class is:",
        "options": [
          "Authentic",
          "Edited for learners by definition",
          "A lexical set"
        ],
        "correctAnswer": "Authentic",
        "explanation": "It was created for a real-world audience rather than specifically for language learning."
      },
      {
        "id": "M1-U8-058",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "text_features",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which pair best contrasts accuracy and fluency?",
        "options": [
          "Correctness versus smooth, efficient communication",
          "Reading versus writing",
          "Formal versus informal vocabulary"
        ],
        "correctAnswer": "Correctness versus smooth, efficient communication",
        "explanation": "Accuracy concerns correctness; fluency concerns flow and ease of communication."
      },
      {
        "id": "M1-U8-059",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "text_features",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A text has accurate grammar but jumps randomly from one idea to another. Which feature is weakest?",
        "options": [
          "Organisation",
          "Accuracy",
          "Authenticity"
        ],
        "correctAnswer": "Organisation",
        "explanation": "The problem is how ideas are structured and connected, not grammatical correctness."
      },
      {
        "id": "M1-U8-060",
        "module": 1,
        "unit": 8,
        "section": "test",
        "skill": "text_features",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about authenticity is most accurate?",
        "options": [
          "Authenticity concerns whether a text or task reflects real-world language use or purpose",
          "Authentic texts must always be difficult",
          "Authenticity is another term for grammatical accuracy"
        ],
        "correctAnswer": "Authenticity concerns whether a text or task reflects real-world language use or purpose",
        "explanation": "In ELT, authenticity relates to real-world sources, purposes or language use rather than simply difficulty."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U8-MATCH-T01",
        "section": "test",
        "instruction": "Match each description with the correct language-skill term.",
        "optionBank": [
          "Skimming",
          "Reading/listening for detail",
          "Using interactive strategies",
          "Summarising",
          "Accuracy",
          "Authenticity"
        ],
        "items": [
          {
            "example": "Read rapidly to get an overview.",
            "correctAnswer": "Skimming"
          },
          {
            "example": "Understand specific information carefully.",
            "correctAnswer": "Reading/listening for detail"
          },
          {
            "example": "Ask for clarification and keep a conversation going.",
            "correctAnswer": "Using interactive strategies"
          },
          {
            "example": "Give only the main points in a shorter form.",
            "correctAnswer": "Summarising"
          },
          {
            "example": "Use language correctly.",
            "correctAnswer": "Accuracy"
          },
          {
            "example": "Use a real-world text created for genuine communication.",
            "correctAnswer": "Authenticity"
          }
        ]
      }
    ]
  },
  "9": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 9,
      "title": "Motivation, Exposure & Acquisition",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Background to language learning: motivation; exposure to language and focus on form; acquisition; silent period; interaction",
      "skills": [
        "motivation",
        "exposure",
        "acquisition",
        "silent_period",
        "interaction",
        "focus_on_form"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U9-006",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "motivation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner attends optional English practice every week because she enjoys communicating with classmates. What is the clearest explanation?",
        "options": [
          "She is motivated to learn",
          "She is in a silent period",
          "She is avoiding exposure"
        ],
        "correctAnswer": "She is motivated to learn",
        "explanation": "Voluntary participation and enjoyment are signs of motivation."
      },
      {
        "id": "M1-U9-007",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "motivation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which factor can most directly reduce learner motivation?",
        "options": [
          "Repeated failure with no sense of progress",
          "Meaningful interaction",
          "Tasks linked to learner goals"
        ],
        "correctAnswer": "Repeated failure with no sense of progress",
        "explanation": "Persistent failure without support can reduce confidence and willingness to continue."
      },
      {
        "id": "M1-U9-008",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "motivation",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about motivation is most accurate?",
        "options": [
          "It can change over time and be influenced by classroom experience",
          "It is fixed and cannot be influenced by teaching",
          "It matters only at beginner level"
        ],
        "correctAnswer": "It can change over time and be influenced by classroom experience",
        "explanation": "Motivation is dynamic and can change with experience, goals and classroom conditions."
      },
      {
        "id": "M1-U9-009",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "motivation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher lets learners choose between two project topics connected to their interests. What is the most likely purpose?",
        "options": [
          "Increase motivation",
          "Create a silent period",
          "Prevent interaction"
        ],
        "correctAnswer": "Increase motivation",
        "explanation": "Choice and personal relevance can increase learner involvement."
      },
      {
        "id": "M1-U9-010",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "motivation",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which situation best shows motivation affecting learning behaviour?",
        "options": [
          "A learner practises regularly because passing an exam is an important goal",
          "A learner hears English on television by chance",
          "A learner notices a verb ending"
        ],
        "correctAnswer": "A learner practises regularly because passing an exam is an important goal",
        "explanation": "The goal is driving sustained learning effort."
      },
      {
        "id": "M1-U9-016",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "exposure",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher increases the amount of English learners hear during classroom routines. What factor is being increased?",
        "options": [
          "Exposure",
          "Silent period",
          "Interference"
        ],
        "correctAnswer": "Exposure",
        "explanation": "Learners are receiving more target-language input."
      },
      {
        "id": "M1-U9-017",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "exposure",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which situation gives the greatest amount of direct exposure to English?",
        "options": [
          "Reading articles and listening to English every day",
          "Studying only explanations in another language",
          "Avoiding English outside class"
        ],
        "correctAnswer": "Reading articles and listening to English every day",
        "explanation": "Regular contact with the target language increases exposure."
      },
      {
        "id": "M1-U9-018",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "exposure",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Why might exposure without meaningful engagement be insufficient?",
        "options": [
          "Learners also benefit from interaction and attention to useful forms",
          "Exposure automatically prevents all errors",
          "Exposure is relevant only to pronunciation"
        ],
        "correctAnswer": "Learners also benefit from interaction and attention to useful forms",
        "explanation": "Input is important, but learning is strengthened when learners process and use language."
      },
      {
        "id": "M1-U9-019",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "exposure",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher choice increases exposure most directly?",
        "options": [
          "Use English for understandable classroom instructions and routines",
          "Translate every instruction before using English",
          "Reduce all listening activities"
        ],
        "correctAnswer": "Use English for understandable classroom instructions and routines",
        "explanation": "Comprehensible target-language routines increase input."
      },
      {
        "id": "M1-U9-020",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "exposure",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner watches many English videos but rarely tries to understand or use the language. Which statement is best?",
        "options": [
          "The learner has exposure, but other learning processes may still be needed",
          "The learner has no exposure",
          "The learner is automatically fluent"
        ],
        "correctAnswer": "The learner has exposure, but other learning processes may still be needed",
        "explanation": "Contact with English is exposure, but interaction and purposeful processing can still matter."
      },
      {
        "id": "M1-U9-026",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "acquisition",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner starts producing a pattern correctly before being able to explain the rule. What may this illustrate?",
        "options": [
          "Acquisition",
          "Proofreading",
          "Register awareness only"
        ],
        "correctAnswer": "Acquisition",
        "explanation": "Implicit knowledge can develop before a learner can verbalise a rule."
      },
      {
        "id": "M1-U9-027",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "acquisition",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which classroom condition is most supportive of acquisition?",
        "options": [
          "Frequent meaningful exposure and opportunities to use language",
          "No target-language input",
          "Only memorising terminology"
        ],
        "correctAnswer": "Frequent meaningful exposure and opportunities to use language",
        "explanation": "Acquisition is supported by rich input and meaningful use."
      },
      {
        "id": "M1-U9-028",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "acquisition",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about acquisition is most accurate?",
        "options": [
          "It can occur gradually without full conscious awareness of every rule",
          "It requires immediate error-free language",
          "It happens only in children"
        ],
        "correctAnswer": "It can occur gradually without full conscious awareness of every rule",
        "explanation": "Acquisition may be gradual and implicit."
      },
      {
        "id": "M1-U9-029",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "acquisition",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner understands a new expression after repeatedly hearing it in real conversations. Which concept is most relevant?",
        "options": [
          "Acquisition",
          "Elision",
          "Placement testing"
        ],
        "correctAnswer": "Acquisition",
        "explanation": "Repeated meaningful exposure can support gradual acquisition."
      },
      {
        "id": "M1-U9-030",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "acquisition",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which example is least characteristic of acquisition?",
        "options": [
          "Memorising a metalanguage definition without using the target language",
          "Picking up a phrase from repeated meaningful exposure",
          "Developing a feel for what sounds natural"
        ],
        "correctAnswer": "Memorising a metalanguage definition without using the target language",
        "explanation": "This is explicit study rather than implicit language acquisition."
      },
      {
        "id": "M1-U9-036",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "silent_period",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A new learner points to correct pictures and follows instructions but rarely speaks. What concept is most relevant?",
        "options": [
          "Silent period",
          "Interference",
          "Word stress"
        ],
        "correctAnswer": "Silent period",
        "explanation": "The learner shows comprehension despite limited oral production."
      },
      {
        "id": "M1-U9-037",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "silent_period",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity is most suitable during a silent period?",
        "options": [
          "Listen and choose the correct picture",
          "Give a five-minute spontaneous speech",
          "Debate a complex topic"
        ],
        "correctAnswer": "Listen and choose the correct picture",
        "explanation": "Low-pressure response tasks allow participation without forcing extended speech."
      },
      {
        "id": "M1-U9-038",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "silent_period",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Why should a teacher not automatically interpret silence as lack of learning?",
        "options": [
          "Learners may be developing comprehension before production",
          "Silence always means perfect comprehension",
          "Silent learners never need interaction"
        ],
        "correctAnswer": "Learners may be developing comprehension before production",
        "explanation": "Receptive knowledge can develop before extensive output."
      },
      {
        "id": "M1-U9-039",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "silent_period",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What is the teacher's most supportive role during a silent period?",
        "options": [
          "Continue providing understandable language and low-pressure participation",
          "Remove all target-language exposure",
          "Require constant correction"
        ],
        "correctAnswer": "Continue providing understandable language and low-pressure participation",
        "explanation": "Rich input and supportive participation can help learners progress."
      },
      {
        "id": "M1-U9-040",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "silent_period",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement is least appropriate?",
        "options": [
          "A learner in a silent period should be forced to speak extensively from day one",
          "A learner may understand more than they can produce",
          "Non-verbal responses can show comprehension"
        ],
        "correctAnswer": "A learner in a silent period should be forced to speak extensively from day one",
        "explanation": "The silent period is better supported through input and low-pressure participation."
      },
      {
        "id": "M1-U9-046",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "interaction",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which classroom activity most clearly promotes interaction?",
        "options": [
          "A pair-work problem-solving task",
          "Silent copying",
          "Individual spelling memorisation only"
        ],
        "correctAnswer": "A pair-work problem-solving task",
        "explanation": "Learners need to exchange ideas and respond to one another."
      },
      {
        "id": "M1-U9-047",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "interaction",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner modifies a sentence after a partner says, “I don't understand.” What is happening?",
        "options": [
          "Negotiation of meaning during interaction",
          "A silent period",
          "Scanning"
        ],
        "correctAnswer": "Negotiation of meaning during interaction",
        "explanation": "The learner adjusts language to make meaning clearer."
      },
      {
        "id": "M1-U9-048",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "interaction",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about interaction is most accurate?",
        "options": [
          "It can help learners notice gaps in their ability to express meaning",
          "It is useful only for advanced learners",
          "It means learners should never receive teacher input"
        ],
        "correctAnswer": "It can help learners notice gaps in their ability to express meaning",
        "explanation": "Attempting to communicate can reveal what learners cannot yet express."
      },
      {
        "id": "M1-U9-049",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "interaction",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Why are pair and group tasks often useful for interaction?",
        "options": [
          "They increase opportunities for learners to exchange language",
          "They eliminate all errors",
          "They reduce learner talking time"
        ],
        "correctAnswer": "They increase opportunities for learners to exchange language",
        "explanation": "Pair and group formats can increase learner participation."
      },
      {
        "id": "M1-U9-050",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "interaction",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity provides exposure but very little interaction?",
        "options": [
          "Watching a video without any response or discussion",
          "Completing an information-gap task",
          "Clarifying meaning with a partner"
        ],
        "correctAnswer": "Watching a video without any response or discussion",
        "explanation": "The learner receives input, but there is little or no exchange of meaning."
      },
      {
        "id": "M1-U9-056",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "focus_on_form",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher move is the clearest example of focus on form?",
        "options": [
          "Pause pair work briefly to clarify a useful structure learners are struggling with",
          "Cancel all communication and teach terminology for the whole lesson",
          "Ignore every recurring language problem"
        ],
        "correctAnswer": "Pause pair work briefly to clarify a useful structure learners are struggling with",
        "explanation": "The teacher responds to a language need arising during meaningful activity."
      },
      {
        "id": "M1-U9-057",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "focus_on_form",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What is a likely benefit of focus on form?",
        "options": [
          "It can help learners notice the relationship between form and meaning/use",
          "It removes the need for exposure",
          "It guarantees instant mastery"
        ],
        "correctAnswer": "It can help learners notice the relationship between form and meaning/use",
        "explanation": "Attention to form can make language patterns more noticeable."
      },
      {
        "id": "M1-U9-058",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "focus_on_form",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which situation best combines exposure, interaction and focus on form?",
        "options": [
          "Learners listen to a model, discuss a task in pairs, and briefly analyse a useful language pattern",
          "Learners silently copy a rule only",
          "Learners watch a video with no follow-up"
        ],
        "correctAnswer": "Learners listen to a model, discuss a task in pairs, and briefly analyse a useful language pattern",
        "explanation": "This combines input, meaningful communication and attention to form."
      },
      {
        "id": "M1-U9-059",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "focus_on_form",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher underlines recurring language in a text and asks learners what pattern they notice. Which concept is most relevant?",
        "options": [
          "Focus on form",
          "Silent period",
          "Motivation only"
        ],
        "correctAnswer": "Focus on form",
        "explanation": "The task directs attention to a language pattern in meaningful input."
      },
      {
        "id": "M1-U9-060",
        "module": 1,
        "unit": 9,
        "section": "test",
        "skill": "focus_on_form",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement is least accurate?",
        "options": [
          "Focus on form means meaningful communication must stop completely whenever grammar is discussed",
          "Focus on form can be brief and responsive to learner needs",
          "Focus on form can help learners notice features in input"
        ],
        "correctAnswer": "Focus on form means meaningful communication must stop completely whenever grammar is discussed",
        "explanation": "Focus on form can be integrated into communication rather than replacing it."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U9-MATCH-T01",
        "section": "test",
        "instruction": "Match each description with the correct term.",
        "optionBank": [
          "Motivation",
          "Exposure",
          "Acquisition",
          "Silent period",
          "Interaction",
          "Focus on form"
        ],
        "items": [
          {
            "example": "Willingness and reasons for learning.",
            "correctAnswer": "Motivation"
          },
          {
            "example": "Contact with target-language input.",
            "correctAnswer": "Exposure"
          },
          {
            "example": "Gradual development of language through meaningful input and use.",
            "correctAnswer": "Acquisition"
          },
          {
            "example": "A phase of limited production despite developing comprehension.",
            "correctAnswer": "Silent period"
          },
          {
            "example": "Exchange of meaning between learners or speakers.",
            "correctAnswer": "Interaction"
          },
          {
            "example": "Attention to a language feature within meaning-focused activity.",
            "correctAnswer": "Focus on form"
          }
        ]
      }
    ]
  },
  "10": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 10,
      "title": "Errors & L1/L2 Learning",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Background to language learning: the role of error, errors and slips, L1 interference, developmental errors, overgeneralisation, interlanguage and fossilisation",
      "skills": [
        "error_vs_slip",
        "developmental_error",
        "l1_interference",
        "overgeneralisation",
        "interlanguage",
        "fossilisation_correction"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U10-006",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "error_vs_slip",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which example most clearly shows a slip?",
        "options": [
          "A learner says “went” incorrectly once, then corrects it without help",
          "A beginner consistently says “goed” and cannot correct it",
          "A learner applies an L1 word order pattern repeatedly"
        ],
        "correctAnswer": "A learner says “went” incorrectly once, then corrects it without help",
        "explanation": "The learner already knows the correct form and is able to self-correct."
      },
      {
        "id": "M1-U10-007",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "error_vs_slip",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner has never studied the past simple and says, “Yesterday I go to the park.” Which term is most appropriate?",
        "options": [
          "Error",
          "Slip",
          "Contraction"
        ],
        "correctAnswer": "Error",
        "explanation": "The learner is attempting language beyond their current level of control."
      },
      {
        "id": "M1-U10-008",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "error_vs_slip",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher comment most strongly suggests a slip rather than an error?",
        "options": [
          "“She was tired and corrected herself as soon as I prompted her.”",
          "“He has never learned this structure.”",
          "“She always transfers this pattern from her first language.”"
        ],
        "correctAnswer": "“She was tired and corrected herself as soon as I prompted her.”",
        "explanation": "A learner who can correct the language shows that the underlying knowledge is already available."
      },
      {
        "id": "M1-U10-009",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "error_vs_slip",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What can teachers learn from systematic learner errors?",
        "options": [
          "Which areas may need more teaching or practice",
          "That correction is never necessary",
          "That all learners have the same needs"
        ],
        "correctAnswer": "Which areas may need more teaching or practice",
        "explanation": "Patterns of error can help teachers adapt teaching and identify learner needs."
      },
      {
        "id": "M1-U10-010",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "error_vs_slip",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement is least accurate?",
        "options": [
          "Every learner mistake should automatically be treated as a serious error",
          "Some mistakes are slips",
          "Errors can be a natural part of learning"
        ],
        "correctAnswer": "Every learner mistake should automatically be treated as a serious error",
        "explanation": "Teachers need to distinguish slips from more systematic errors and decide whether correction is useful."
      },
      {
        "id": "M1-U10-016",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "developmental_error",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A child learning English as an additional language says “comed” for “came”. Which explanation best fits?",
        "options": [
          "Developmental error",
          "Formal register",
          "Elision"
        ],
        "correctAnswer": "Developmental error",
        "explanation": "The learner is applying a developing past-tense rule to an irregular verb."
      },
      {
        "id": "M1-U10-017",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "developmental_error",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about developmental errors is most accurate?",
        "options": [
          "They may disappear as the learner's language develops",
          "They are always permanent",
          "They are caused only by first-language interference"
        ],
        "correctAnswer": "They may disappear as the learner's language develops",
        "explanation": "As learners reorganise their language system, many developmental errors disappear."
      },
      {
        "id": "M1-U10-018",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "developmental_error",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which learner behaviour most strongly indicates a developmental process?",
        "options": [
          "Applying a productive rule too widely while building the system",
          "Making one typo because of fatigue",
          "Choosing informal language in a formal email"
        ],
        "correctAnswer": "Applying a productive rule too widely while building the system",
        "explanation": "This shows active rule-building during language development."
      },
      {
        "id": "M1-U10-019",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "developmental_error",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Why should teachers not view all developmental errors as failure?",
        "options": [
          "They can be evidence that learners are experimenting with language rules",
          "They are always correct alternatives",
          "They mean the syllabus is unnecessary"
        ],
        "correctAnswer": "They can be evidence that learners are experimenting with language rules",
        "explanation": "Errors can reveal active processing and development."
      },
      {
        "id": "M1-U10-020",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "developmental_error",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which example is least likely to be a developmental error?",
        "options": [
          "A learner accidentally writes “teh” for “the” once",
          "A learner says “foots” for “feet”",
          "A learner says “buyed” for “bought”"
        ],
        "correctAnswer": "A learner accidentally writes “teh” for “the” once",
        "explanation": "A one-off typing mistake is more likely to be a slip than a developmental error."
      },
      {
        "id": "M1-U10-026",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "l1_interference",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner consistently places adjectives after nouns because this is normal in the learner's first language. What is the most likely cause?",
        "options": [
          "L1 interference",
          "A slip",
          "Word stress"
        ],
        "correctAnswer": "L1 interference",
        "explanation": "The learner is transferring an L1 word-order pattern into English."
      },
      {
        "id": "M1-U10-027",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "l1_interference",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher comment most clearly describes L1 interference?",
        "options": [
          "“They use this structure because it works that way in their own language.”",
          "“They know the rule but were tired.”",
          "“They have created a new intermediate system.”"
        ],
        "correctAnswer": "“They use this structure because it works that way in their own language.”",
        "explanation": "The comment directly identifies first-language influence."
      },
      {
        "id": "M1-U10-028",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "l1_interference",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about L1 interference is most accurate?",
        "options": [
          "It can affect both receptive expectations and productive language",
          "It affects only beginners",
          "It is always negative and never useful"
        ],
        "correctAnswer": "It can affect both receptive expectations and productive language",
        "explanation": "Learners use prior language knowledge in many ways, and some transfer may help while other transfer causes errors."
      },
      {
        "id": "M1-U10-029",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "l1_interference",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner says an English word with an L1 sound because English contains a phoneme absent from the learner's first language. Which category best fits?",
        "options": [
          "L1 interference",
          "Developmental error only",
          "Proofreading"
        ],
        "correctAnswer": "L1 interference",
        "explanation": "The learner is relying on the first-language sound system."
      },
      {
        "id": "M1-U10-030",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "l1_interference",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which example is least likely to be caused primarily by L1 interference?",
        "options": [
          "A learner says “goed” after learning regular past -ed",
          "A learner transfers L1 word order into English",
          "A learner substitutes an L1 sound for an unfamiliar English sound"
        ],
        "correctAnswer": "A learner says “goed” after learning regular past -ed",
        "explanation": "“Goed” is typically explained by overgeneralisation/development rather than direct L1 transfer."
      },
      {
        "id": "M1-U10-036",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "overgeneralisation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner says “She can sings.” Which explanation may fit?",
        "options": [
          "Overgeneralisation of third-person -s",
          "A silent period",
          "Authenticity"
        ],
        "correctAnswer": "Overgeneralisation of third-person -s",
        "explanation": "The learner applies the -s rule where a modal verb requires the base form."
      },
      {
        "id": "M1-U10-037",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "overgeneralisation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which learner error most clearly shows overgeneralisation?",
        "options": [
          "“Childs” instead of “children”",
          "One accidental misspelling",
          "Using a direct translation from L1"
        ],
        "correctAnswer": "“Childs” instead of “children”",
        "explanation": "The regular plural rule is being applied to an irregular noun."
      },
      {
        "id": "M1-U10-038",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "overgeneralisation",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement is most accurate?",
        "options": [
          "Overgeneralisation can show partial learning of a rule",
          "Overgeneralisation means the learner has learned no rule",
          "It always comes from L1"
        ],
        "correctAnswer": "Overgeneralisation can show partial learning of a rule",
        "explanation": "The learner has learned a productive rule but not yet its limits or exceptions."
      },
      {
        "id": "M1-U10-039",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "overgeneralisation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher hears “I am knowing the answer.” Which possible explanation is closest to overgeneralisation?",
        "options": [
          "The learner is extending present continuous use to a stative verb",
          "The learner is making a spelling slip",
          "The learner is refusing to answer"
        ],
        "correctAnswer": "The learner is extending present continuous use to a stative verb",
        "explanation": "The learner is applying a familiar form in a context where English normally restricts it."
      },
      {
        "id": "M1-U10-040",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "overgeneralisation",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teaching response best addresses overgeneralisation?",
        "options": [
          "Show the rule together with important exceptions and contrasting examples",
          "Tell learners never to form rules",
          "Ignore all repeated examples"
        ],
        "correctAnswer": "Show the rule together with important exceptions and contrasting examples",
        "explanation": "Learners need to refine the limits of the rule they have already begun to form."
      },
      {
        "id": "M1-U10-046",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "interlanguage",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner regularly uses a self-created grammatical pattern that changes later after more exposure. What does this illustrate?",
        "options": [
          "Interlanguage",
          "A one-off slip",
          "Word stress"
        ],
        "correctAnswer": "Interlanguage",
        "explanation": "A changing internal language system is characteristic of interlanguage."
      },
      {
        "id": "M1-U10-047",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "interlanguage",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher comment best reflects an interlanguage perspective?",
        "options": [
          "“This pattern is part of the learner's current developing system.”",
          "“Every error is just carelessness.”",
          "“The learner has no internal grammar.”"
        ],
        "correctAnswer": "“This pattern is part of the learner's current developing system.”",
        "explanation": "Interlanguage treats learner language as systematic and developmental."
      },
      {
        "id": "M1-U10-048",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "interlanguage",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement is most accurate?",
        "options": [
          "Interlanguage may contain rules from L1, rules from English and learner-created patterns",
          "Interlanguage is identical for all learners",
          "Interlanguage disappears after one lesson"
        ],
        "correctAnswer": "Interlanguage may contain rules from L1, rules from English and learner-created patterns",
        "explanation": "A learner's developing system can combine several sources of knowledge."
      },
      {
        "id": "M1-U10-049",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "interlanguage",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Why can two learners at the same level have different interlanguage systems?",
        "options": [
          "They may have different L1s, experiences and developing hypotheses",
          "Interlanguage is random",
          "All learners should have identical systems"
        ],
        "correctAnswer": "They may have different L1s, experiences and developing hypotheses",
        "explanation": "Learner language develops individually based on prior knowledge and experience."
      },
      {
        "id": "M1-U10-050",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "interlanguage",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which example best illustrates interlanguage rather than a simple slip?",
        "options": [
          "A learner repeatedly uses a stable self-created pattern over several weeks",
          "A learner makes one typo and corrects it",
          "A learner says the correct form immediately"
        ],
        "correctAnswer": "A learner repeatedly uses a stable self-created pattern over several weeks",
        "explanation": "A recurring learner-created pattern is evidence of an organised developing system."
      },
      {
        "id": "M1-U10-056",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "fossilisation_correction",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which description best fits a fossilised error?",
        "options": [
          "A persistent error that has become difficult to change",
          "A mistake the learner instantly self-corrects",
          "A new word learned today"
        ],
        "correctAnswer": "A persistent error that has become difficult to change",
        "explanation": "Fossilised errors are entrenched habits in learner language."
      },
      {
        "id": "M1-U10-057",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "fossilisation_correction",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which correction technique encourages learner autonomy most directly?",
        "options": [
          "Prompting the learner to self-correct",
          "Immediately giving every answer",
          "Avoiding feedback entirely"
        ],
        "correctAnswer": "Prompting the learner to self-correct",
        "explanation": "Self-correction encourages learners to monitor and retrieve language themselves."
      },
      {
        "id": "M1-U10-058",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "fossilisation_correction",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which factor should influence whether a teacher corrects immediately?",
        "options": [
          "The lesson aim, activity type and effect on communication",
          "The teacher's mood only",
          "Whether the error contains a long word"
        ],
        "correctAnswer": "The lesson aim, activity type and effect on communication",
        "explanation": "Correction decisions depend on pedagogical purpose and communicative context."
      },
      {
        "id": "M1-U10-059",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "fossilisation_correction",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner makes the same error repeatedly over a long period despite repeated instruction. Which concept is most relevant?",
        "options": [
          "Fossilisation",
          "Prediction",
          "Scanning"
        ],
        "correctAnswer": "Fossilisation",
        "explanation": "Persistence over time despite instruction suggests fossilisation."
      },
      {
        "id": "M1-U10-060",
        "module": 1,
        "unit": 10,
        "section": "test",
        "skill": "fossilisation_correction",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about correction is most accurate?",
        "options": [
          "Effective correction is selective and should support learning without unnecessarily blocking communication",
          "Every error must be corrected immediately",
          "Correction is never useful"
        ],
        "correctAnswer": "Effective correction is selective and should support learning without unnecessarily blocking communication",
        "explanation": "Teachers decide if, when and how to correct depending on the learning goal and context."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U10-MATCH-T01",
        "section": "test",
        "instruction": "Match each example with the most appropriate explanation.",
        "optionBank": [
          "Slip",
          "Error",
          "L1 interference",
          "Overgeneralisation",
          "Interlanguage",
          "Fossilised error"
        ],
        "items": [
          {
            "example": "A tired learner says the wrong form once, then self-corrects.",
            "correctAnswer": "Slip"
          },
          {
            "example": "A learner uses a structure not yet under their control and cannot self-correct.",
            "correctAnswer": "Error"
          },
          {
            "example": "An English sound is replaced by the nearest sound in the learner's first language.",
            "correctAnswer": "L1 interference"
          },
          {
            "example": "A learner says “buyed” for “bought”.",
            "correctAnswer": "Overgeneralisation"
          },
          {
            "example": "A learner repeatedly uses a self-created pattern that later changes.",
            "correctAnswer": "Interlanguage"
          },
          {
            "example": "A long-standing habitual error is difficult to eliminate.",
            "correctAnswer": "Fossilised error"
          }
        ]
      }
    ]
  },
  "11": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 11,
      "title": "Learners: Characteristics & Needs",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Background to language learning: differences between L1/L2 learning, learner characteristics and learner needs",
      "skills": [
        "age_maturity",
        "learning_context_l1_l2",
        "learning_preferences",
        "learning_strategies",
        "past_learning_experience",
        "learner_needs"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U11-006",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "age_maturity",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher replaces a 30-minute teacher-fronted explanation with several short tasks for a class of young learners. What characteristic is the teacher mainly responding to?",
        "options": [
          "Age and maturity",
          "Professional needs",
          "Past examination experience"
        ],
        "correctAnswer": "Age and maturity",
        "explanation": "The teacher is adapting the lesson to learners' likely developmental and concentration needs."
      },
      {
        "id": "M1-U11-007",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "age_maturity",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which feature is more likely to differ between children, teenagers and adults?",
        "options": [
          "Attitude to risk-taking and making mistakes",
          "The definition of a noun",
          "The number of English phonemes"
        ],
        "correctAnswer": "Attitude to risk-taking and making mistakes",
        "explanation": "Learners of different ages and maturity levels may differ in confidence, risk-taking and self-consciousness."
      },
      {
        "id": "M1-U11-008",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "age_maturity",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher decision best shows awareness of learner maturity?",
        "options": [
          "Choosing tasks that match learners' cognitive and social development",
          "Using identical tasks for all ages because age is irrelevant",
          "Choosing activities only by textbook page number"
        ],
        "correctAnswer": "Choosing tasks that match learners' cognitive and social development",
        "explanation": "Maturity affects what kinds of demands and interaction patterns are appropriate."
      },
      {
        "id": "M1-U11-009",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "age_maturity",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A class of adults responds well to discussing workplace decisions and real-life problems. Which factor may help explain this?",
        "options": [
          "Their maturity and life experience",
          "Their lack of learning strategies",
          "A silent period"
        ],
        "correctAnswer": "Their maturity and life experience",
        "explanation": "Adults can often draw on wider personal and professional experience."
      },
      {
        "id": "M1-U11-010",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "age_maturity",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement should a TKT candidate avoid?",
        "options": [
          "All learners of the same age have identical characteristics",
          "Age can influence classroom behaviour",
          "Maturity can affect attitudes to learning"
        ],
        "correctAnswer": "All learners of the same age have identical characteristics",
        "explanation": "Age is one factor, but individuals within the same age group still differ considerably."
      },
      {
        "id": "M1-U11-016",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_context_l1_l2",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner studies English mainly in a classroom and rarely encounters it elsewhere. Which factor is especially important?",
        "options": [
          "Context of learning",
          "Word family",
          "Elision"
        ],
        "correctAnswer": "Context of learning",
        "explanation": "The learner's environment limits natural exposure and may affect teaching decisions."
      },
      {
        "id": "M1-U11-017",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_context_l1_l2",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which situation most clearly shows a difference in learning context?",
        "options": [
          "One learner uses English daily at work; another uses it only in a weekly lesson",
          "Two learners prefer diagrams",
          "Two learners both take notes"
        ],
        "correctAnswer": "One learner uses English daily at work; another uses it only in a weekly lesson",
        "explanation": "The amount and purpose of English use outside class are contextual differences."
      },
      {
        "id": "M1-U11-018",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_context_l1_l2",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Why might an L2 teacher deliberately create information-gap tasks?",
        "options": [
          "To provide interaction that may be less available outside class",
          "To imitate spelling practice",
          "To eliminate all learner differences"
        ],
        "correctAnswer": "To provide interaction that may be less available outside class",
        "explanation": "Classroom tasks can create communicative opportunities that learners may lack in their wider environment."
      },
      {
        "id": "M1-U11-019",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_context_l1_l2",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which difference is most clearly about ways of learning rather than context?",
        "options": [
          "An adult consciously analyses grammar rules",
          "A learner studies in Colombia",
          "A learner has two lessons a week"
        ],
        "correctAnswer": "An adult consciously analyses grammar rules",
        "explanation": "Conscious analysis is a learning process, while place and lesson frequency are contextual factors."
      },
      {
        "id": "M1-U11-020",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_context_l1_l2",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which conclusion is most appropriate for teaching?",
        "options": [
          "Teachers should consider how much exposure and use learners get beyond the classroom",
          "All L2 learners should be taught exactly like young L1 learners",
          "Classroom context has no effect on learning"
        ],
        "correctAnswer": "Teachers should consider how much exposure and use learners get beyond the classroom",
        "explanation": "Teaching choices should respond to the opportunities and limitations of the learner's actual context."
      },
      {
        "id": "M1-U11-026",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_preferences",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner enjoys role play and learns well through active participation. Which learner characteristic is most directly involved?",
        "options": [
          "Learning preference",
          "Professional need",
          "L1 interference"
        ],
        "correctAnswer": "Learning preference",
        "explanation": "The example describes a preferred way of participating in learning."
      },
      {
        "id": "M1-U11-027",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_preferences",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which lesson plan best acknowledges different learning preferences?",
        "options": [
          "It combines examples, discussion, short written work and active practice where appropriate",
          "It uses only one activity type throughout every lesson",
          "It permanently separates learners by supposed type"
        ],
        "correctAnswer": "It combines examples, discussion, short written work and active practice where appropriate",
        "explanation": "A varied lesson can provide multiple ways to engage with content."
      },
      {
        "id": "M1-U11-028",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_preferences",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement should a TKT candidate choose?",
        "options": [
          "Learning preferences may affect how learners respond to activities",
          "A visual preference means a learner cannot learn through listening",
          "Learning preferences are identical to language level"
        ],
        "correctAnswer": "Learning preferences may affect how learners respond to activities",
        "explanation": "Preferences can influence engagement and response, but they do not define absolute ability."
      },
      {
        "id": "M1-U11-029",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_preferences",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher notices some learners like individual reflection while others prefer collaborative discussion. What is the teacher observing?",
        "options": [
          "Different learning preferences",
          "Different verb tenses",
          "Different phonemes"
        ],
        "correctAnswer": "Different learning preferences",
        "explanation": "Learners may prefer different interaction patterns and modes of working."
      },
      {
        "id": "M1-U11-030",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_preferences",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What is the best pedagogic implication of learning preferences?",
        "options": [
          "Offer variety while still helping learners develop flexibility",
          "Teach each learner only through one preferred mode",
          "Ignore all learner reactions to activities"
        ],
        "correctAnswer": "Offer variety while still helping learners develop flexibility",
        "explanation": "Good teaching responds to preferences without restricting learners to them."
      },
      {
        "id": "M1-U11-036",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_strategies",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner uses flashcards with spaced review to remember vocabulary. Which characteristic is this?",
        "options": [
          "Learning strategy",
          "Maturity",
          "Learning context"
        ],
        "correctAnswer": "Learning strategy",
        "explanation": "The learner is using a deliberate technique to improve retention."
      },
      {
        "id": "M1-U11-037",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_strategies",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which behaviour shows a compensation strategy?",
        "options": [
          "Paraphrasing when the exact word is unknown",
          "Refusing to communicate until every word is known",
          "Copying the date from the board"
        ],
        "correctAnswer": "Paraphrasing when the exact word is unknown",
        "explanation": "Paraphrasing helps a learner communicate despite a gap in language knowledge."
      },
      {
        "id": "M1-U11-038",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_strategies",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about learning strategies is most accurate?",
        "options": [
          "Different strategies may be useful for different tasks and learners",
          "One strategy is best for every learner and task",
          "Strategies are the same as learner needs"
        ],
        "correctAnswer": "Different strategies may be useful for different tasks and learners",
        "explanation": "Effective strategy use depends on the task, learner and learning goal."
      },
      {
        "id": "M1-U11-039",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_strategies",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner decides to listen to English for ten minutes every day and records progress. What is most clearly demonstrated?",
        "options": [
          "Goal-setting and self-monitoring",
          "L1 interference",
          "A silent period"
        ],
        "correctAnswer": "Goal-setting and self-monitoring",
        "explanation": "The learner plans learning and tracks progress independently."
      },
      {
        "id": "M1-U11-040",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learning_strategies",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher action best develops strategic competence as a learner?",
        "options": [
          "Ask learners to reflect on which strategies helped and why",
          "Give answers without discussing process",
          "Prevent learners from evaluating their own work"
        ],
        "correctAnswer": "Ask learners to reflect on which strategies helped and why",
        "explanation": "Reflection helps learners become more aware of useful strategies and when to use them."
      },
      {
        "id": "M1-U11-046",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "past_learning_experience",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner strongly prefers teacher correction because previous courses were highly teacher-centred. Which factor may explain this?",
        "options": [
          "Past language-learning experience",
          "Professional need",
          "Age alone"
        ],
        "correctAnswer": "Past language-learning experience",
        "explanation": "Previous teaching styles can shape expectations about teacher and learner roles."
      },
      {
        "id": "M1-U11-047",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "past_learning_experience",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which previous experience is most likely to reduce confidence?",
        "options": [
          "Repeated unsuccessful attempts to learn a language",
          "Successful completion of a challenging course",
          "Receiving useful feedback"
        ],
        "correctAnswer": "Repeated unsuccessful attempts to learn a language",
        "explanation": "Past failure can influence present confidence and motivation."
      },
      {
        "id": "M1-U11-048",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "past_learning_experience",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about past learning experience is most accurate?",
        "options": [
          "It can affect how learners respond to a teacher's methods",
          "It has no effect once a new course begins",
          "It determines future success completely"
        ],
        "correctAnswer": "It can affect how learners respond to a teacher's methods",
        "explanation": "Prior experience influences expectations but does not determine all future learning."
      },
      {
        "id": "M1-U11-049",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "past_learning_experience",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A class dislikes pair work because they have almost never used it before. What is a sensible first response?",
        "options": [
          "Teach the routine gradually and explain its purpose",
          "Conclude that pair work can never work with them",
          "Force complex pair tasks immediately without support"
        ],
        "correctAnswer": "Teach the routine gradually and explain its purpose",
        "explanation": "Learners may need support to adapt to an unfamiliar classroom procedure."
      },
      {
        "id": "M1-U11-050",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "past_learning_experience",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher question would best reveal relevant past learning experience?",
        "options": [
          "What kinds of English classes and activities have you done before?",
          "What is your favourite colour?",
          "How many syllables are in 'teacher'?"
        ],
        "correctAnswer": "What kinds of English classes and activities have you done before?",
        "explanation": "The question directly explores previous language-learning experiences."
      },
      {
        "id": "M1-U11-056",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learner_needs",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which learner most clearly has a future professional need?",
        "options": [
          "A nursing student who will work in an English-speaking hospital",
          "A learner who likes blue notebooks",
          "A learner who prefers diagrams"
        ],
        "correctAnswer": "A nursing student who will work in an English-speaking hospital",
        "explanation": "The learner will need English for future employment."
      },
      {
        "id": "M1-U11-057",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learner_needs",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner has only 20 minutes a day available for independent study. Which category can this inform?",
        "options": [
          "Learning needs",
          "Phonology only",
          "L1 interference"
        ],
        "correctAnswer": "Learning needs",
        "explanation": "Time availability affects how learning can realistically be organised."
      },
      {
        "id": "M1-U11-058",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learner_needs",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which course decision best reflects learner needs?",
        "options": [
          "Prioritise telephone language for learners who handle international calls",
          "Teach identical content regardless of learners' goals",
          "Choose topics only because the teacher likes them"
        ],
        "correctAnswer": "Prioritise telephone language for learners who handle international calls",
        "explanation": "Relevant language content should reflect learners' real communicative goals."
      },
      {
        "id": "M1-U11-059",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learner_needs",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which question is most useful in a needs analysis?",
        "options": [
          "What do you need to do in English now or in the future?",
          "Which English letter do you like best?",
          "Can you name three prepositions?"
        ],
        "correctAnswer": "What do you need to do in English now or in the future?",
        "explanation": "The question identifies real personal, learning or professional purposes."
      },
      {
        "id": "M1-U11-060",
        "module": 1,
        "unit": 11,
        "section": "test",
        "skill": "learner_needs",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about learner needs is most accurate?",
        "options": [
          "Different learners in the same class may have different personal, learning and professional needs",
          "All learners at the same level have identical needs",
          "Needs are the same as learning preferences"
        ],
        "correctAnswer": "Different learners in the same class may have different personal, learning and professional needs",
        "explanation": "Language level alone does not determine why, what or how learners need to learn."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U11-MATCH-T01",
        "section": "test",
        "instruction": "Match each example with the most relevant TKT concept.",
        "optionBank": [
          "Maturity",
          "Ways of learning",
          "Learning preference",
          "Learning strategy",
          "Past language-learning experience",
          "Professional need"
        ],
        "items": [
          {
            "example": "Ability to manage longer abstract tasks develops with age.",
            "correctAnswer": "Maturity"
          },
          {
            "example": "An adult consciously analyses grammar rules.",
            "correctAnswer": "Ways of learning"
          },
          {
            "example": "A learner prefers collaborative discussion to individual reflection.",
            "correctAnswer": "Learning preference"
          },
          {
            "example": "A learner sets a weekly goal and monitors progress.",
            "correctAnswer": "Learning strategy"
          },
          {
            "example": "Previous unsuccessful courses have reduced confidence.",
            "correctAnswer": "Past language-learning experience"
          },
          {
            "example": "A learner will need English for international customer calls.",
            "correctAnswer": "Professional need"
          }
        ]
      }
    ]
  },
  "12": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 12,
      "title": "Presenting Language",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Background to language teaching: presentation techniques and introductory activities",
      "scopeNote": "Eliciting, prompting, drilling and broader activity/task terminology are developed mainly in Unit 13. PPP, TBL, TPR, Lexical Approach, Grammar-Translation, test-teach-test and guided discovery are developed mainly in Unit 14.",
      "skills": [
        "warmers",
        "ice_breakers",
        "lead_ins",
        "contextualising",
        "presenting_explaining",
        "concept_checking"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U12-006",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "warmers",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher begins with a quick memory game unrelated to the main reading topic. What is the activity most likely to be?",
        "options": [
          "A warmer",
          "A lead-in",
          "A proficiency test"
        ],
        "correctAnswer": "A warmer",
        "explanation": "Because its main aim is to activate and engage the class rather than introduce the main topic."
      },
      {
        "id": "M1-U12-007",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "warmers",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher aim best fits a warmer?",
        "options": [
          "Help learners relax and participate at the start",
          "Check whether learners understand a newly presented concept",
          "Introduce classmates to one another for the first time"
        ],
        "correctAnswer": "Help learners relax and participate at the start",
        "explanation": "Relaxation and increased participation are common purposes of warmers."
      },
      {
        "id": "M1-U12-008",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "warmers",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity is least likely to function as a warmer?",
        "options": [
          "A 25-minute formal explanation of a complex grammar rule",
          "A quick vocabulary race",
          "A short guessing game"
        ],
        "correctAnswer": "A 25-minute formal explanation of a complex grammar rule",
        "explanation": "Warmers are normally brief opening activities, not extended formal presentations."
      },
      {
        "id": "M1-U12-009",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "warmers",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A warmer is best classified as:",
        "options": [
          "An introductory activity",
          "An assessment type",
          "A language error"
        ],
        "correctAnswer": "An introductory activity",
        "explanation": "Cambridge includes warmers among introductory activities in Module 1."
      },
      {
        "id": "M1-U12-010",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "warmers",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What mainly distinguishes a warmer from a lead-in?",
        "options": [
          "A lead-in usually connects more directly to the upcoming topic or task",
          "A warmer is always individual and a lead-in is always group work",
          "A warmer tests grammar and a lead-in tests vocabulary"
        ],
        "correctAnswer": "A lead-in usually connects more directly to the upcoming topic or task",
        "explanation": "Warmers primarily energise or relax; lead-ins more specifically prepare learners for the content that follows."
      },
      {
        "id": "M1-U12-016",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "ice_breakers",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher tosses a ball around a circle; each learner says their name and favourite activity. What is this?",
        "options": [
          "Ice-breaker",
          "Lead-in",
          "Concept check"
        ],
        "correctAnswer": "Ice-breaker",
        "explanation": "The activity is designed to help learners get to know one another."
      },
      {
        "id": "M1-U12-017",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "ice_breakers",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher aim best matches an ice-breaker?",
        "options": [
          "Encourage a good relationship among members of a new class",
          "Clarify the meaning of a newly presented tense",
          "Assess learners' end-of-unit progress"
        ],
        "correctAnswer": "Encourage a good relationship among members of a new class",
        "explanation": "Rapport-building is a key purpose of ice-breakers."
      },
      {
        "id": "M1-U12-018",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "ice_breakers",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about ice-breakers is most accurate?",
        "options": [
          "They are especially useful when participants do not know one another well",
          "They are always used to present grammar",
          "They must be repeated at the start of every lesson"
        ],
        "correctAnswer": "They are especially useful when participants do not know one another well",
        "explanation": "Ice-breakers are particularly valuable when a group is new or relationships still need to be established."
      },
      {
        "id": "M1-U12-019",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "ice_breakers",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "An activity helps the teacher learn learners' names and personal interests. What is its most likely function?",
        "options": [
          "Ice-breaking",
          "Concept checking",
          "Drilling"
        ],
        "correctAnswer": "Ice-breaking",
        "explanation": "The activity supports mutual familiarity and rapport."
      },
      {
        "id": "M1-U12-020",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "ice_breakers",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity is least likely to be an ice-breaker?",
        "options": [
          "Learners analyse examples to discover a grammar rule",
          "Learners find three things they have in common",
          "Learners introduce a partner"
        ],
        "correctAnswer": "Learners analyse examples to discover a grammar rule",
        "explanation": "Rule discovery is a language-learning procedure, not primarily a social getting-to-know-you activity."
      },
      {
        "id": "M1-U12-026",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "lead_ins",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "The teacher asks, “What news stories have you read this week?” before a lesson on journalism. What is this?",
        "options": [
          "Lead-in",
          "Concept check",
          "Placement task"
        ],
        "correctAnswer": "Lead-in",
        "explanation": "The question creates interest and brings relevant learner experience into the topic."
      },
      {
        "id": "M1-U12-027",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "lead_ins",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which aim best fits a lead-in?",
        "options": [
          "Create interest in the topic and prepare learners for the main task",
          "Check whether learners have mastered the whole course",
          "Help strangers learn each other's names"
        ],
        "correctAnswer": "Create interest in the topic and prepare learners for the main task",
        "explanation": "Lead-ins connect learners to the content that follows."
      },
      {
        "id": "M1-U12-028",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "lead_ins",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement best distinguishes a lead-in from an ice-breaker?",
        "options": [
          "A lead-in focuses on the upcoming topic; an ice-breaker focuses on people getting to know each other",
          "A lead-in is always written",
          "An ice-breaker always lasts longer"
        ],
        "correctAnswer": "A lead-in focuses on the upcoming topic; an ice-breaker focuses on people getting to know each other",
        "explanation": "Their main aims are different: content preparation versus relationship-building."
      },
      {
        "id": "M1-U12-029",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "lead_ins",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher pre-teaches two essential words before learners listen to a difficult recording. This can be part of a lead-in because it:",
        "options": [
          "Prepares learners for the main task",
          "Tests final achievement",
          "Functions only as an ice-breaker"
        ],
        "correctAnswer": "Prepares learners for the main task",
        "explanation": "A lead-in may include limited key language needed for the task that follows."
      },
      {
        "id": "M1-U12-030",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "lead_ins",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity is least suitable as a lead-in to a text about environmental problems?",
        "options": [
          "An unrelated spelling race with no connection to the topic",
          "Discussing local pollution",
          "Predicting content from the title and photograph"
        ],
        "correctAnswer": "An unrelated spelling race with no connection to the topic",
        "explanation": "A lead-in should normally connect learners to the topic, context or task that follows."
      },
      {
        "id": "M1-U12-036",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "contextualising",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "The teacher tells a short story that naturally includes several examples of “used to”. Why?",
        "options": [
          "To contextualise the target structure",
          "To assess final proficiency",
          "To create an ice-breaker only"
        ],
        "correctAnswer": "To contextualise the target structure",
        "explanation": "The story provides a meaningful situation in which the structure makes sense."
      },
      {
        "id": "M1-U12-037",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "contextualising",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher action most clearly contextualises new language?",
        "options": [
          "Use a picture and situation in which the target phrase would naturally occur",
          "Give only a metalanguage definition",
          "Ask learners to copy the phrase ten times"
        ],
        "correctAnswer": "Use a picture and situation in which the target phrase would naturally occur",
        "explanation": "A meaningful situation helps reveal what the phrase means and how it is used."
      },
      {
        "id": "M1-U12-038",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "contextualising",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What is the main problem with presenting a functional phrase completely without context?",
        "options": [
          "Learners may know the words but not understand when or why to use the phrase",
          "Learners will automatically infer all uses",
          "The phrase stops being grammatical"
        ],
        "correctAnswer": "Learners may know the words but not understand when or why to use the phrase",
        "explanation": "Language presentation should help learners connect form with communicative meaning and use."
      },
      {
        "id": "M1-U12-039",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "contextualising",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A restaurant role-play is used before focusing on “I'd like...”. Which aspect is the role-play mainly providing?",
        "options": [
          "Context",
          "Final assessment",
          "A fossilised error"
        ],
        "correctAnswer": "Context",
        "explanation": "The restaurant situation gives a natural reason for using the target phrase."
      },
      {
        "id": "M1-U12-040",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "contextualising",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which context is most suitable for presenting “You should see a doctor”?",
        "options": [
          "Someone describes feeling ill and asks for advice",
          "Two strangers exchange names",
          "A class counts classroom objects"
        ],
        "correctAnswer": "Someone describes feeling ill and asks for advice",
        "explanation": "The situation makes the advice function of “should” immediately relevant."
      },
      {
        "id": "M1-U12-046",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "presenting_explaining",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher says, “We use this expression to make a polite request.” What is the teacher mainly clarifying?",
        "options": [
          "Meaning/use",
          "Word formation only",
          "Assessment purpose"
        ],
        "correctAnswer": "Meaning/use",
        "explanation": "The explanation tells learners the communicative purpose of the expression."
      },
      {
        "id": "M1-U12-047",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "presenting_explaining",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher marks the stressed syllable in a newly presented word. Which aspect is being clarified?",
        "options": [
          "Pronunciation",
          "Meaning",
          "Register only"
        ],
        "correctAnswer": "Pronunciation",
        "explanation": "Stress is a pronunciation feature."
      },
      {
        "id": "M1-U12-048",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "presenting_explaining",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which approach to presentation is least helpful?",
        "options": [
          "Give a complex technical rule with no example, context or check of understanding",
          "Use examples and clarify meaning",
          "Show how the language is formed"
        ],
        "correctAnswer": "Give a complex technical rule with no example, context or check of understanding",
        "explanation": "Presentation should make language accessible and connect explanation to understandable examples."
      },
      {
        "id": "M1-U12-049",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "presenting_explaining",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "The teacher underlines “-ed” endings in several examples of regular past forms. What is mainly being highlighted?",
        "options": [
          "Form",
          "Lead-in purpose",
          "Ice-breaking"
        ],
        "correctAnswer": "Form",
        "explanation": "The teacher is directing attention to the grammatical form of the target language."
      },
      {
        "id": "M1-U12-050",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "presenting_explaining",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Why should teachers avoid explaining only the grammatical label of a new structure?",
        "options": [
          "Learners also need to understand what it means and how it is used",
          "Labels automatically teach pronunciation",
          "The label is always incorrect"
        ],
        "correctAnswer": "Learners also need to understand what it means and how it is used",
        "explanation": "Knowing terminology is not the same as being able to understand and use the language."
      },
      {
        "id": "M1-U12-056",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "concept_checking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "The teacher asks, “Did the action happen once or many times?” after presenting a new structure. What is the teacher doing?",
        "options": [
          "Concept checking",
          "Drilling",
          "Ice-breaking"
        ],
        "correctAnswer": "Concept checking",
        "explanation": "The question checks learners' understanding of the target meaning."
      },
      {
        "id": "M1-U12-057",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "concept_checking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which question is a concept-check question rather than a form-check question?",
        "options": [
          "Is the person still working there now?",
          "Which auxiliary comes before the past participle?",
          "How do you spell the verb?"
        ],
        "correctAnswer": "Is the person still working there now?",
        "explanation": "This question checks meaning rather than grammatical construction."
      },
      {
        "id": "M1-U12-058",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "concept_checking",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What makes a concept-check question effective?",
        "options": [
          "It focuses on a key meaning distinction and has a clear answer",
          "It asks learners whether they understand",
          "It contains as much difficult language as possible"
        ],
        "correctAnswer": "It focuses on a key meaning distinction and has a clear answer",
        "explanation": "A good CCQ isolates an important aspect of meaning in simple language."
      },
      {
        "id": "M1-U12-059",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "concept_checking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which is the best CCQ for the word “borrow”?",
        "options": [
          "Do I take something and give it back later?",
          "How many syllables does it have?",
          "Is it a noun or a verb?"
        ],
        "correctAnswer": "Do I take something and give it back later?",
        "explanation": "The question checks the core meaning of borrowing."
      },
      {
        "id": "M1-U12-060",
        "module": 1,
        "unit": 12,
        "section": "test",
        "skill": "concept_checking",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner answers a CCQ incorrectly after the teacher's explanation. What does this most clearly tell the teacher?",
        "options": [
          "The meaning may need further clarification",
          "The learner has definitely failed the course",
          "The target language should never be taught again"
        ],
        "correctAnswer": "The meaning may need further clarification",
        "explanation": "Concept checking gives the teacher evidence about whether learners have understood the presented language."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U12-MATCH-T01",
        "section": "test",
        "instruction": "Match each teaching aim with the most appropriate technique.",
        "optionBank": [
          "Warmer",
          "Ice-breaker",
          "Lead-in",
          "Contextualising",
          "Presenting language",
          "Concept checking"
        ],
        "items": [
          {
            "example": "Increase energy at the start of the lesson.",
            "correctAnswer": "Warmer"
          },
          {
            "example": "Help a new group get to know one another.",
            "correctAnswer": "Ice-breaker"
          },
          {
            "example": "Create interest and activate knowledge before the main task.",
            "correctAnswer": "Lead-in"
          },
          {
            "example": "Put target language into a situation that shows its meaning.",
            "correctAnswer": "Contextualising"
          },
          {
            "example": "Introduce a new item and focus attention on meaning/form/pronunciation.",
            "correctAnswer": "Presenting language"
          },
          {
            "example": "Confirm that learners understand the meaning of a new item.",
            "correctAnswer": "Concept checking"
          }
        ]
      }
    ]
  },
  "13": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 13,
      "title": "Teaching Activities & Techniques",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Background to language teaching: types of activities and tasks for language and skills development",
      "scopeNote": "Lesson frameworks and named approaches such as PPP, TBL, Test-Teach-Test, TPR, Guided Discovery, Grammar-Translation and Lexical Approach are reserved mainly for Unit 14.",
      "skills": [
        "drilling_modeling",
        "eliciting_prompting",
        "controlled_to_free_practice",
        "comprehension_vs_production",
        "communicative_task_types",
        "feedback_correction_review"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U13-006",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "drilling_modeling",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity gives the most controlled oral practice?",
        "options": [
          "A substitution drill",
          "An open debate",
          "A free role-play"
        ],
        "correctAnswer": "A substitution drill",
        "explanation": "The language pattern is tightly controlled and learners have little choice."
      },
      {
        "id": "M1-U13-007",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "drilling_modeling",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which term refers to the language the teacher provides for learners to imitate?",
        "options": [
          "Model",
          "Prompt",
          "Warmer"
        ],
        "correctAnswer": "Model",
        "explanation": "A model is an example learners can repeat or use as a reference."
      },
      {
        "id": "M1-U13-008",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "drilling_modeling",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What is the main purpose of drilling?",
        "options": [
          "Provide guided practice of language",
          "Assess final proficiency",
          "Generate unrelated ideas"
        ],
        "correctAnswer": "Provide guided practice of language",
        "explanation": "Drilling gives learners repeated, guided practice of forms or pronunciation."
      },
      {
        "id": "M1-U13-009",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "drilling_modeling",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which drill changes affirmative sentences into negatives?",
        "options": [
          "Transformation drill",
          "Substitution drill",
          "Choral drill only"
        ],
        "correctAnswer": "Transformation drill",
        "explanation": "The learner transforms one grammatical structure into another."
      },
      {
        "id": "M1-U13-010",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "drilling_modeling",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about drilling is most accurate?",
        "options": [
          "It can support accurate production but usually offers limited communicative choice",
          "It is always free practice",
          "It always develops reading for gist"
        ],
        "correctAnswer": "It can support accurate production but usually offers limited communicative choice",
        "explanation": "Drills are generally controlled and focus on accurate production."
      },
      {
        "id": "M1-U13-016",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "eliciting_prompting",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "The teacher asks targeted questions to get learners to produce the past tense of a familiar verb. What is this?",
        "options": [
          "Eliciting",
          "Modelling only",
          "Free practice"
        ],
        "correctAnswer": "Eliciting",
        "explanation": "The teacher is drawing known language from learners."
      },
      {
        "id": "M1-U13-017",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "eliciting_prompting",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "The teacher says, “It begins with /b/...” to help a learner remember “borrow”. What is this?",
        "options": [
          "Prompting",
          "Concept checking",
          "Scanning"
        ],
        "correctAnswer": "Prompting",
        "explanation": "The teacher gives a clue rather than the complete answer."
      },
      {
        "id": "M1-U13-018",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "eliciting_prompting",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about prompting is correct?",
        "options": [
          "It gives support while leaving learners some responsibility for producing the answer",
          "It always supplies the entire answer",
          "It is another term for final assessment"
        ],
        "correctAnswer": "It gives support while leaving learners some responsibility for producing the answer",
        "explanation": "Prompts scaffold learner retrieval without fully taking over."
      },
      {
        "id": "M1-U13-019",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "eliciting_prompting",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity most clearly uses elicitation?",
        "options": [
          "Ask learners what vocabulary they already know about transport",
          "Give learners a finished list to copy",
          "Play a recording with no response"
        ],
        "correctAnswer": "Ask learners what vocabulary they already know about transport",
        "explanation": "The teacher is drawing information from learners."
      },
      {
        "id": "M1-U13-020",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "eliciting_prompting",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher action is least likely to develop learner participation?",
        "options": [
          "Immediately provide every answer before learners have a chance to respond",
          "Use clues to elicit known language",
          "Prompt a learner who is nearly able to answer"
        ],
        "correctAnswer": "Immediately provide every answer before learners have a chance to respond",
        "explanation": "Eliciting and prompting encourage learners to contribute rather than remain passive."
      },
      {
        "id": "M1-U13-026",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "controlled_to_free_practice",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which task is most controlled?",
        "options": [
          "Substitute one word in a fixed sentence pattern",
          "Role-play a complaint using any appropriate language",
          "Debate an open question"
        ],
        "correctAnswer": "Substitute one word in a fixed sentence pattern",
        "explanation": "The output is almost completely predetermined."
      },
      {
        "id": "M1-U13-027",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "controlled_to_free_practice",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which task is most likely to develop fluency?",
        "options": [
          "A freer speaking task",
          "A tightly controlled substitution drill",
          "Copying isolated sentences"
        ],
        "correctAnswer": "A freer speaking task",
        "explanation": "Freer practice allows learners to prioritise communicating meaning with greater language choice."
      },
      {
        "id": "M1-U13-028",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "controlled_to_free_practice",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A task gives learners sentence starters but lets them finish the ideas themselves. What is this best described as?",
        "options": [
          "Less controlled practice",
          "Fully controlled practice",
          "No practice at all"
        ],
        "correctAnswer": "Less controlled practice",
        "explanation": "There is support and some constraint, but learners still make meaningful choices."
      },
      {
        "id": "M1-U13-029",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "controlled_to_free_practice",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement is most accurate?",
        "options": [
          "Controlled practice usually prioritises accuracy more than free practice",
          "Free practice always has one correct sentence",
          "Controlled practice gives maximum language choice"
        ],
        "correctAnswer": "Controlled practice usually prioritises accuracy more than free practice",
        "explanation": "Controlled tasks limit choice to help learners practise a target form accurately."
      },
      {
        "id": "M1-U13-030",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "controlled_to_free_practice",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which sequencing principle is pedagogically sensible?",
        "options": [
          "Move toward greater choice as learners become more secure with the target language",
          "Begin with maximum complexity regardless of learner readiness",
          "Keep all practice fully controlled forever"
        ],
        "correctAnswer": "Move toward greater choice as learners become more secure with the target language",
        "explanation": "Gradual release supports learners as they move toward independent production."
      },
      {
        "id": "M1-U13-036",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "comprehension_vs_production",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A jigsaw listening task mainly develops:",
        "options": [
          "Listening comprehension plus information exchange",
          "Only spelling",
          "Only pronunciation drilling"
        ],
        "correctAnswer": "Listening comprehension plus information exchange",
        "explanation": "Learners first process spoken information, then share it with others."
      },
      {
        "id": "M1-U13-037",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "comprehension_vs_production",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A guided writing task is primarily:",
        "options": [
          "A production task",
          "A comprehension task only",
          "A warmer by definition"
        ],
        "correctAnswer": "A production task",
        "explanation": "Learners produce written language, although with support."
      },
      {
        "id": "M1-U13-038",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "comprehension_vs_production",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity primarily develops comprehension?",
        "options": [
          "Read a text and identify the writer's main point",
          "Role-play a job interview",
          "Write a complaint email"
        ],
        "correctAnswer": "Read a text and identify the writer's main point",
        "explanation": "The learner is processing meaning from written input."
      },
      {
        "id": "M1-U13-039",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "comprehension_vs_production",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which activity primarily develops productive speaking?",
        "options": [
          "Conduct a class survey",
          "Listen for a train time",
          "Read a jumbled text"
        ],
        "correctAnswer": "Conduct a class survey",
        "explanation": "A survey usually requires learners to ask and answer questions orally."
      },
      {
        "id": "M1-U13-040",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "comprehension_vs_production",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement best distinguishes comprehension and production tasks?",
        "options": [
          "Comprehension tasks focus on understanding input; production tasks require learners to create language",
          "Comprehension tasks are always easier",
          "Production tasks never involve comprehension"
        ],
        "correctAnswer": "Comprehension tasks focus on understanding input; production tasks require learners to create language",
        "explanation": "The central distinction is receptive processing versus language production."
      },
      {
        "id": "M1-U13-046",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "communicative_task_types",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which task usually involves learners taking on roles in a simulated situation?",
        "options": [
          "Role-play",
          "Brainstorm",
          "Drill"
        ],
        "correctAnswer": "Role-play",
        "explanation": "Learners act within an assigned or imagined role."
      },
      {
        "id": "M1-U13-047",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "communicative_task_types",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Learners quickly generate as many ideas as possible about a topic before writing. What activity is this?",
        "options": [
          "Brainstorming",
          "Scanning",
          "Transformation drilling"
        ],
        "correctAnswer": "Brainstorming",
        "explanation": "Brainstorming rapidly generates ideas, often as preparation for speaking or writing."
      },
      {
        "id": "M1-U13-048",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "communicative_task_types",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A text is cut into sections; different learners read different sections and then share information. What is this?",
        "options": [
          "Jigsaw reading",
          "Free writing",
          "Concept checking"
        ],
        "correctAnswer": "Jigsaw reading",
        "explanation": "In a jigsaw task, different learners hold different parts of the information and must combine them."
      },
      {
        "id": "M1-U13-049",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "communicative_task_types",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Learners put a set of sentences into the correct order to reconstruct a text. What is this?",
        "options": [
          "Jumbled-text activity",
          "Survey",
          "Role-play"
        ],
        "correctAnswer": "Jumbled-text activity",
        "explanation": "A jumbled-text task asks learners to restore the correct order of text parts."
      },
      {
        "id": "M1-U13-050",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "communicative_task_types",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which task most strongly requires negotiation and agreeing/disagreeing?",
        "options": [
          "Rank ordering/prioritising",
          "Choral repetition",
          "Copying a model sentence"
        ],
        "correctAnswer": "Rank ordering/prioritising",
        "explanation": "Learners must discuss priorities and reach agreement about an ordered list."
      },
      {
        "id": "M1-U13-056",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "feedback_correction_review",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "The teacher uses fingers to show where a learner's word-order error occurred. What technique is this?",
        "options": [
          "Finger correction",
          "Choral drill",
          "Lead-in"
        ],
        "correctAnswer": "Finger correction",
        "explanation": "Finger correction visually locates the position of a spoken error."
      },
      {
        "id": "M1-U13-057",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "feedback_correction_review",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which feedback technique gives learners responsibility for improving their own language?",
        "options": [
          "Self-correction",
          "Immediate teacher replacement of every answer",
          "Ignoring all errors"
        ],
        "correctAnswer": "Self-correction",
        "explanation": "Self-correction encourages learners to monitor and repair their own language."
      },
      {
        "id": "M1-U13-058",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "feedback_correction_review",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about praise is most accurate?",
        "options": [
          "Specific, credible praise can support confidence and motivation",
          "Praise should replace all corrective feedback",
          "Praise is an assessment type"
        ],
        "correctAnswer": "Specific, credible praise can support confidence and motivation",
        "explanation": "Effective praise recognises successful performance and can encourage learners."
      },
      {
        "id": "M1-U13-059",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "feedback_correction_review",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What is the main purpose of review?",
        "options": [
          "Strengthen memory of previously taught language or skills",
          "Introduce learners to one another",
          "Measure final proficiency"
        ],
        "correctAnswer": "Strengthen memory of previously taught language or skills",
        "explanation": "Review revisits prior learning to help learners remember and consolidate it."
      },
      {
        "id": "M1-U13-060",
        "module": 1,
        "unit": 13,
        "section": "test",
        "skill": "feedback_correction_review",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher response best balances feedback and learner independence?",
        "options": [
          "Give a clue and allow the learner to self-correct when possible",
          "Correct every error before the learner can respond",
          "Never provide feedback"
        ],
        "correctAnswer": "Give a clue and allow the learner to self-correct when possible",
        "explanation": "Prompts and self-correction can provide support while keeping learners actively involved."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U13-MATCH-T01",
        "section": "test",
        "instruction": "Match each activity with its main purpose or category.",
        "optionBank": [
          "Transformation drill",
          "Less controlled practice",
          "Comprehension task",
          "Production task",
          "Jigsaw task",
          "Peer correction"
        ],
        "items": [
          {
            "example": "Change an affirmative sentence into a negative one.",
            "correctAnswer": "Transformation drill"
          },
          {
            "example": "Use a target structure but create some of your own content.",
            "correctAnswer": "Less controlled practice"
          },
          {
            "example": "Listen and choose the correct picture.",
            "correctAnswer": "Comprehension task"
          },
          {
            "example": "Write a short email.",
            "correctAnswer": "Production task"
          },
          {
            "example": "Different learners combine separate pieces of information.",
            "correctAnswer": "Jigsaw task"
          },
          {
            "example": "Learners help correct one another's language.",
            "correctAnswer": "Peer correction"
          }
        ]
      }
    ]
  },
  "14": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 14,
      "title": "Teaching Approaches & Lesson Frameworks",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Background to language teaching: teaching approaches, frameworks and procedures",
      "skills": [
        "ppp",
        "tbl",
        "test_teach_test",
        "guided_discovery",
        "tpr_grammar_translation",
        "lexical_skills_based"
      ],
      "coverage": [
        "Presentation, Practice and Production (PPP)",
        "Task-based learning (TBL)",
        "Test-teach-test",
        "Guided discovery",
        "Total Physical Response (TPR)",
        "Grammar-Translation",
        "Lexical Approach",
        "Skills-based lessons"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U14-006",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "ppp",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A lesson follows: context → explanation of target language → gap-fill practice → freer speaking. Which framework is this?",
        "options": [
          "PPP",
          "Guided discovery",
          "Grammar-translation"
        ],
        "correctAnswer": "PPP",
        "explanation": "The sequence matches Presentation, Practice and Production."
      },
      {
        "id": "M1-U14-007",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "ppp",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which learner preference is often compatible with PPP?",
        "options": [
          "Learners who like a clear focus on new language before freer use",
          "Learners who want only open tasks with no prior language focus",
          "Learners who want grammar rules followed by translation only"
        ],
        "correctAnswer": "Learners who like a clear focus on new language before freer use",
        "explanation": "PPP provides an explicit focus on language followed by supported practice."
      },
      {
        "id": "M1-U14-008",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "ppp",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What mainly distinguishes PPP from Test-teach-test?",
        "options": [
          "PPP normally teaches before testing freer use; Test-teach-test begins with a diagnostic task",
          "PPP never includes practice",
          "Test-teach-test never includes teaching"
        ],
        "correctAnswer": "PPP normally teaches before testing freer use; Test-teach-test begins with a diagnostic task",
        "explanation": "Test-teach-test starts by seeing what learners can already do, whereas PPP usually presents first."
      },
      {
        "id": "M1-U14-009",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "ppp",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which sequence is most typical of PPP?",
        "options": [
          "Present → controlled practice → freer practice",
          "Task → language focus → task discussion",
          "Rule → translation"
        ],
        "correctAnswer": "Present → controlled practice → freer practice",
        "explanation": "This is the defining sequence of PPP."
      },
      {
        "id": "M1-U14-010",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "ppp",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which criticism is sometimes made of a rigid PPP lesson?",
        "options": [
          "Learners may have limited opportunity to discover needs before the target language is selected",
          "It contains no language practice",
          "It always avoids communication"
        ],
        "correctAnswer": "Learners may have limited opportunity to discover needs before the target language is selected",
        "explanation": "A rigid PPP sequence can be less responsive to learner-generated language needs than diagnostic or task-first frameworks."
      },
      {
        "id": "M1-U14-016",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "tbl",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A lesson begins with learners solving a real-world problem in groups, followed by discussion of useful language. Which framework is this?",
        "options": [
          "TBL",
          "PPP",
          "TPR"
        ],
        "correctAnswer": "TBL",
        "explanation": "The task comes first and language focus follows."
      },
      {
        "id": "M1-U14-017",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "tbl",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which learner preference may suit TBL?",
        "options": [
          "Learners who like communicating to achieve an outcome",
          "Learners who want grammar rules followed only by translation",
          "Learners who prefer only repetition drills"
        ],
        "correctAnswer": "Learners who like communicating to achieve an outcome",
        "explanation": "TBL gives learners a reason to use language to complete meaningful tasks."
      },
      {
        "id": "M1-U14-018",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "tbl",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What distinguishes TBL from PPP most clearly?",
        "options": [
          "TBL typically starts from a task; PPP typically starts from presentation of target language",
          "TBL has no communication",
          "PPP always starts with assessment"
        ],
        "correctAnswer": "TBL typically starts from a task; PPP typically starts from presentation of target language",
        "explanation": "The sequencing and central role of the task distinguish the two frameworks."
      },
      {
        "id": "M1-U14-019",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "tbl",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which sequence best matches TBL?",
        "options": [
          "Task → discussion/language focus",
          "Rule → translation",
          "Presentation → controlled drill → freer role-play"
        ],
        "correctAnswer": "Task → discussion/language focus",
        "explanation": "Cambridge's TKT worksheet links TBL with task completion followed by focus on language used in the task."
      },
      {
        "id": "M1-U14-020",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "tbl",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Why can TBL help reveal learner needs?",
        "options": [
          "The task can show what learners can and cannot yet express successfully",
          "The task guarantees perfect accuracy",
          "The task removes the need for feedback"
        ],
        "correctAnswer": "The task can show what learners can and cannot yet express successfully",
        "explanation": "Real task performance can expose gaps in learners' available language."
      },
      {
        "id": "M1-U14-026",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "test_teach_test",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Learners attempt a conditional-sentence task before any explanation. The teacher then clarifies problem areas and gives a second task. Which framework is this?",
        "options": [
          "Test-teach-test",
          "PPP",
          "Lexical Approach"
        ],
        "correctAnswer": "Test-teach-test",
        "explanation": "The sequence is diagnostic attempt, teaching, then re-attempt."
      },
      {
        "id": "M1-U14-027",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "test_teach_test",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which learner group may particularly benefit from Test-teach-test?",
        "options": [
          "Learners who may already know some of the target language",
          "Learners who must always begin with full teacher presentation",
          "Learners doing only translation"
        ],
        "correctAnswer": "Learners who may already know some of the target language",
        "explanation": "The framework identifies what learners already control and what still needs teaching."
      },
      {
        "id": "M1-U14-028",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "test_teach_test",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What distinguishes the first stage of Test-teach-test from the first stage of PPP?",
        "options": [
          "It diagnoses existing ability before explicit teaching",
          "It always includes translation",
          "It never involves target language"
        ],
        "correctAnswer": "It diagnoses existing ability before explicit teaching",
        "explanation": "Test-teach-test starts with learner performance rather than teacher presentation."
      },
      {
        "id": "M1-U14-029",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "test_teach_test",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What is the main purpose of the final 'test'?",
        "options": [
          "Check whether learners can use the language more successfully after teaching",
          "Assign a formal qualification",
          "Introduce the topic"
        ],
        "correctAnswer": "Check whether learners can use the language more successfully after teaching",
        "explanation": "The second task provides evidence of learning after targeted teaching."
      },
      {
        "id": "M1-U14-030",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "test_teach_test",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about Test-teach-test is most accurate?",
        "options": [
          "It is diagnostic and responsive to learner needs",
          "It requires the teacher to pre-teach everything",
          "It is identical to grammar-translation"
        ],
        "correctAnswer": "It is diagnostic and responsive to learner needs",
        "explanation": "Its first stage helps determine what teaching is actually necessary."
      },
      {
        "id": "M1-U14-036",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "guided_discovery",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Learners underline several examples of comparatives, answer questions, then formulate the rule. What approach is this?",
        "options": [
          "Guided discovery",
          "Grammar-translation",
          "TPR"
        ],
        "correctAnswer": "Guided discovery",
        "explanation": "Learners infer the rule from examples with teacher guidance."
      },
      {
        "id": "M1-U14-037",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "guided_discovery",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which sequence best represents guided discovery?",
        "options": [
          "Examples → learners work out rule → practice",
          "Rule → translation",
          "Task → language focus only"
        ],
        "correctAnswer": "Examples → learners work out rule → practice",
        "explanation": "This sequence appears directly in Cambridge's TKT worksheet."
      },
      {
        "id": "M1-U14-038",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "guided_discovery",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What distinguishes guided discovery from direct explanation?",
        "options": [
          "Learners infer the rule through structured analysis",
          "No target language is shown",
          "The teacher never intervenes"
        ],
        "correctAnswer": "Learners infer the rule through structured analysis",
        "explanation": "The teacher supports the process rather than immediately stating the rule."
      },
      {
        "id": "M1-U14-039",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "guided_discovery",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which learner behaviour is central to guided discovery?",
        "options": [
          "Noticing patterns in examples",
          "Repeating commands physically",
          "Translating every sentence"
        ],
        "correctAnswer": "Noticing patterns in examples",
        "explanation": "Learners analyse language evidence and derive generalisations."
      },
      {
        "id": "M1-U14-040",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "guided_discovery",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which teacher action would undermine guided discovery?",
        "options": [
          "State the rule before learners examine the examples",
          "Ask focused questions about the examples",
          "Let learners compare hypotheses"
        ],
        "correctAnswer": "State the rule before learners examine the examples",
        "explanation": "If the rule is supplied immediately, learners have little to discover."
      },
      {
        "id": "M1-U14-046",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "tpr_grammar_translation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Learners listen to commands, perform the actions, then later give commands themselves. Which approach is this?",
        "options": [
          "TPR",
          "PPP",
          "Grammar-Translation"
        ],
        "correctAnswer": "TPR",
        "explanation": "Cambridge's TKT worksheet links TPR with instructions, learner actions and later learner instructions."
      },
      {
        "id": "M1-U14-047",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "tpr_grammar_translation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which lesson is most clearly Grammar-Translation?",
        "options": [
          "The teacher explains a rule, then learners translate a passage",
          "Learners solve a task before language focus",
          "Learners respond physically to commands"
        ],
        "correctAnswer": "The teacher explains a rule, then learners translate a passage",
        "explanation": "This is the classic Grammar-Translation sequence used in Cambridge's TKT materials."
      },
      {
        "id": "M1-U14-048",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "tpr_grammar_translation",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which learner may find TPR particularly accessible at an early stage?",
        "options": [
          "A learner who can show comprehension physically before producing much language",
          "A learner who only wants literary translation",
          "A learner doing advanced essay proofreading only"
        ],
        "correctAnswer": "A learner who can show comprehension physically before producing much language",
        "explanation": "TPR allows learners to demonstrate understanding through action."
      },
      {
        "id": "M1-U14-049",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "tpr_grammar_translation",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What is a limitation of using Grammar-Translation alone for communicative goals?",
        "options": [
          "It may provide limited spontaneous interaction and spoken communication",
          "It includes too much physical action",
          "It always starts with a real-world task"
        ],
        "correctAnswer": "It may provide limited spontaneous interaction and spoken communication",
        "explanation": "Rule study and translation do not automatically provide extensive communicative use."
      },
      {
        "id": "M1-U14-050",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "tpr_grammar_translation",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which pair is correctly matched?",
        "options": [
          "TPR — instructions and physical actions; Grammar-Translation — rules and translation",
          "TPR — lexical chunks; Grammar-Translation — free role-play",
          "TPR — diagnostic task; Grammar-Translation — guided discovery"
        ],
        "correctAnswer": "TPR — instructions and physical actions; Grammar-Translation — rules and translation",
        "explanation": "These are the characteristic procedures of the two approaches."
      },
      {
        "id": "M1-U14-056",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "lexical_skills_based",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Learners underline useful phrases in a dialogue, discuss their meaning, then practise them. Which approach is this?",
        "options": [
          "Lexical Approach",
          "TPR",
          "Test-teach-test"
        ],
        "correctAnswer": "Lexical Approach",
        "explanation": "The sequence of noticing chunks, discussing meaning and practising them matches Cambridge's Lexical Approach example."
      },
      {
        "id": "M1-U14-057",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "lexical_skills_based",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which lesson sequence most strongly suggests a skills-based framework?",
        "options": [
          "Lead-in → gist listening → detailed listening → speaking follow-up",
          "Present rule → translate text",
          "Physical commands → actions"
        ],
        "correctAnswer": "Lead-in → gist listening → detailed listening → speaking follow-up",
        "explanation": "Skills-based lessons often stage receptive work from general to detailed comprehension and then move to productive follow-up."
      },
      {
        "id": "M1-U14-058",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "lexical_skills_based",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "What mainly distinguishes a skills-based lesson from PPP?",
        "options": [
          "It is organised primarily around development of a language skill/subskills rather than presentation of one target language item",
          "It never includes vocabulary",
          "It cannot include speaking"
        ],
        "correctAnswer": "It is organised primarily around development of a language skill/subskills rather than presentation of one target language item",
        "explanation": "A skills lesson is structured around reading, listening, speaking or writing processes and subskills."
      },
      {
        "id": "M1-U14-059",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "lexical_skills_based",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which item would the Lexical Approach be especially likely to treat as a useful unit?",
        "options": [
          "A frequent collocation such as “make a decision”",
          "Only the letter m",
          "Only a grammar label"
        ],
        "correctAnswer": "A frequent collocation such as “make a decision”",
        "explanation": "Collocations and chunks are central lexical units in the approach."
      },
      {
        "id": "M1-U14-060",
        "module": 1,
        "unit": 14,
        "section": "test",
        "skill": "lexical_skills_based",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which pair is correctly matched?",
        "options": [
          "Lexical Approach — noticing chunks; Skills-based lesson — gist/detail/follow-up sequence",
          "Lexical Approach — physical commands; Skills-based lesson — translation only",
          "Lexical Approach — diagnostic test first; Skills-based lesson — no comprehension work"
        ],
        "correctAnswer": "Lexical Approach — noticing chunks; Skills-based lesson — gist/detail/follow-up sequence",
        "explanation": "These match the frameworks identified in Cambridge's TKT materials."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U14-MATCH-T01",
        "section": "test",
        "instruction": "Match each description with the correct teaching approach or framework.",
        "optionBank": [
          "Grammar-Translation",
          "Skills-based lesson",
          "PPP",
          "TBL",
          "Guided discovery",
          "Test-teach-test"
        ],
        "items": [
          {
            "example": "Grammar rule followed by translation of a text.",
            "correctAnswer": "Grammar-Translation"
          },
          {
            "example": "Lead-in → gist → detailed comprehension → productive follow-up.",
            "correctAnswer": "Skills-based lesson"
          },
          {
            "example": "Teacher presentation followed by controlled and freer practice.",
            "correctAnswer": "PPP"
          },
          {
            "example": "Learners complete a meaningful task before language focus.",
            "correctAnswer": "TBL"
          },
          {
            "example": "Learners infer a rule from examples.",
            "correctAnswer": "Guided discovery"
          },
          {
            "example": "Learners attempt a task before targeted teaching and then try again.",
            "correctAnswer": "Test-teach-test"
          }
        ]
      }
    ]
  },
  "15": {
    "meta": {
      "product": "TKT Ready",
      "module": 1,
      "unit": 15,
      "title": "Assessment",
      "version": "1.0.0",
      "language": "English",
      "practiceItems": 30,
      "testBankItems": 30,
      "miniTestDisplayCount": 10,
      "randomizationRule": "Randomize question selection/order and answer-option order on every attempt; never reuse an exact attempt signature.",
      "alignment": "TKT Module 1 — Background to language teaching: assessment purposes, methods, tasks and activities",
      "skills": [
        "diagnostic_placement",
        "progress_achievement",
        "proficiency",
        "formative_summative",
        "assessment_methods",
        "task_design_marking"
      ],
      "coverage": [
        "Placement assessment",
        "Diagnostic assessment",
        "Progress assessment",
        "Achievement assessment",
        "Proficiency assessment",
        "Formative assessment",
        "Summative assessment",
        "Formal and informal assessment",
        "Self assessment",
        "Peer assessment",
        "Portfolio assessment",
        "Continuous assessment",
        "Objective and subjective marking",
        "Assessment task design"
      ]
    },
    "testQuestions": [
      {
        "id": "M1-U15-006",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "diagnostic_placement",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A school tests a new learner and assigns them to B1 rather than A2. Which assessment purpose is this?",
        "options": [
          "Placement",
          "Diagnostic",
          "Progress"
        ],
        "correctAnswer": "Placement",
        "explanation": "The result is being used to decide the learner's appropriate class level."
      },
      {
        "id": "M1-U15-007",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "diagnostic_placement",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher discovers from a test that most learners understand past simple but struggle with present perfect. What kind of assessment has mainly been used?",
        "options": [
          "Diagnostic",
          "Placement",
          "Proficiency"
        ],
        "correctAnswer": "Diagnostic",
        "explanation": "The assessment has identified a specific area that needs future teaching."
      },
      {
        "id": "M1-U15-008",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "diagnostic_placement",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which situation is most likely to require diagnostic assessment?",
        "options": [
          "The teacher wants to plan remedial work for a class",
          "A school wants to decide which level a new student should enter",
          "An employer wants proof of general English ability"
        ],
        "correctAnswer": "The teacher wants to plan remedial work for a class",
        "explanation": "Diagnostic assessment is used to identify learning problems and plan teaching."
      },
      {
        "id": "M1-U15-009",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "diagnostic_placement",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which question would a placement test primarily help answer?",
        "options": [
          "Which class level is most suitable for this learner?",
          "Which grammar point should I reteach tomorrow?",
          "How much of this course has the learner mastered?"
        ],
        "correctAnswer": "Which class level is most suitable for this learner?",
        "explanation": "Placement tests are used to allocate learners to suitable levels."
      },
      {
        "id": "M1-U15-010",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "diagnostic_placement",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A test can sometimes provide both placement and diagnostic information. Which statement is still true?",
        "options": [
          "Its primary purpose determines how it is classified",
          "All tests have only one possible use in every context",
          "A placement test can never show strengths or weaknesses"
        ],
        "correctAnswer": "Its primary purpose determines how it is classified",
        "explanation": "Assessment types are classified mainly by the purpose for which the results are used."
      },
      {
        "id": "M1-U15-016",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "progress_achievement",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "After Units 1–4, learners take a test based only on those units. What type of test is this most likely to be?",
        "options": [
          "Progress test",
          "Proficiency test",
          "Placement test"
        ],
        "correctAnswer": "Progress test",
        "explanation": "The test checks learning at a particular point within the course."
      },
      {
        "id": "M1-U15-017",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "progress_achievement",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A final test covers the main objectives of the whole B1 course. What type of test is this?",
        "options": [
          "Achievement test",
          "Diagnostic test",
          "Placement test"
        ],
        "correctAnswer": "Achievement test",
        "explanation": "The test measures achievement of the course content and objectives."
      },
      {
        "id": "M1-U15-018",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "progress_achievement",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement is true of both progress and achievement tests?",
        "options": [
          "Their content is related to what learners have been taught",
          "They are independent of the syllabus",
          "Their purpose is to place learners in classes"
        ],
        "correctAnswer": "Their content is related to what learners have been taught",
        "explanation": "Both types normally reflect the language, skills or objectives taught in the course."
      },
      {
        "id": "M1-U15-019",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "progress_achievement",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which assessment result would most directly help a teacher decide whether to review Unit 6 before moving on?",
        "options": [
          "A progress test after Unit 6",
          "A placement test from six months ago",
          "A general proficiency certificate"
        ],
        "correctAnswer": "A progress test after Unit 6",
        "explanation": "A progress test provides evidence about recent learning within the current course."
      },
      {
        "id": "M1-U15-020",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "progress_achievement",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A course final tests only the material actually taught during the programme. Which term best describes its purpose?",
        "options": [
          "Achievement",
          "Proficiency",
          "Placement"
        ],
        "correctAnswer": "Achievement",
        "explanation": "Achievement assessment is tied to the taught syllabus or course objectives."
      },
      {
        "id": "M1-U15-026",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "proficiency",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which test purpose is most appropriate when a university wants evidence of a student's general ability to study through English?",
        "options": [
          "Proficiency",
          "Progress",
          "Placement within one language school"
        ],
        "correctAnswer": "Proficiency",
        "explanation": "The purpose is to demonstrate language ability for an external academic requirement."
      },
      {
        "id": "M1-U15-027",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "proficiency",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement distinguishes proficiency from achievement assessment?",
        "options": [
          "Proficiency is not based on one course's taught content; achievement is",
          "Achievement is always informal",
          "Proficiency is used only with beginners"
        ],
        "correctAnswer": "Proficiency is not based on one course's taught content; achievement is",
        "explanation": "Achievement is syllabus-related, while proficiency assesses broader ability for a purpose or standard."
      },
      {
        "id": "M1-U15-028",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "proficiency",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner performs poorly on a proficiency test even though they got high marks on their course tests. What is one possible explanation?",
        "options": [
          "The course tests and proficiency test may measure different content or purposes",
          "One of the tests must be invalid",
          "Proficiency tests always test only vocabulary"
        ],
        "correctAnswer": "The course tests and proficiency test may measure different content or purposes",
        "explanation": "Strong achievement on one syllabus does not automatically equal broader proficiency."
      },
      {
        "id": "M1-U15-029",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "proficiency",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which description best fits proficiency assessment?",
        "options": [
          "How good is the learner at using the language for the required purpose?",
          "Which unit should the teacher reteach?",
          "Which class should a new learner join?"
        ],
        "correctAnswer": "How good is the learner at using the language for the required purpose?",
        "explanation": "Proficiency focuses on overall ability to use the language."
      },
      {
        "id": "M1-U15-030",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "proficiency",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which test is most likely to remain useful even if candidates prepared with different textbooks?",
        "options": [
          "Proficiency test",
          "Progress test based on Unit 5",
          "Achievement test based on one course syllabus"
        ],
        "correctAnswer": "Proficiency test",
        "explanation": "A proficiency test is not tied to the content of a particular textbook or course."
      },
      {
        "id": "M1-U15-036",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "formative_summative",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Learners receive comments on a draft and revise it before submitting the final version. What type of assessment is this mainly?",
        "options": [
          "Formative",
          "Summative",
          "Placement"
        ],
        "correctAnswer": "Formative",
        "explanation": "The feedback is being used to improve learning and performance before completion."
      },
      {
        "id": "M1-U15-037",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "formative_summative",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A final exam result is recorded as the official course grade. What type of assessment is this mainly?",
        "options": [
          "Summative",
          "Formative",
          "Diagnostic"
        ],
        "correctAnswer": "Summative",
        "explanation": "The result summarises achievement at the end of the course."
      },
      {
        "id": "M1-U15-038",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "formative_summative",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement is most accurate?",
        "options": [
          "Formative assessment supports future learning; summative assessment mainly reports achievement",
          "Formative assessment must be ungraded and summative must be multiple choice",
          "Summative assessment always identifies detailed future teaching needs"
        ],
        "correctAnswer": "Formative assessment supports future learning; summative assessment mainly reports achievement",
        "explanation": "Their core distinction concerns purpose: improvement during learning versus evaluation at the end."
      },
      {
        "id": "M1-U15-039",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "formative_summative",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A teacher observes pair work, notes common problems and plans tomorrow's lesson from those observations. This assessment is primarily:",
        "options": [
          "Formative",
          "Summative",
          "Placement"
        ],
        "correctAnswer": "Formative",
        "explanation": "The teacher uses current evidence to inform subsequent teaching."
      },
      {
        "id": "M1-U15-040",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "formative_summative",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which use of a quiz makes it formative?",
        "options": [
          "Learners receive feedback and use it to improve before the next task",
          "The mark becomes the final course grade",
          "The score is used only to place students in classes"
        ],
        "correctAnswer": "Learners receive feedback and use it to improve before the next task",
        "explanation": "A quiz functions formatively when its evidence feeds back into learning."
      },
      {
        "id": "M1-U15-046",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "assessment_methods",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A learner listens to a recording of their own speaking and evaluates strengths and weaknesses. What is this?",
        "options": [
          "Self assessment",
          "Peer assessment",
          "Summative assessment only"
        ],
        "correctAnswer": "Self assessment",
        "explanation": "The learner is evaluating their own performance."
      },
      {
        "id": "M1-U15-047",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "assessment_methods",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Students use agreed criteria to comment on each other's presentations. What method is this?",
        "options": [
          "Peer assessment",
          "Placement assessment",
          "Diagnostic testing"
        ],
        "correctAnswer": "Peer assessment",
        "explanation": "Learners are evaluating peers using criteria."
      },
      {
        "id": "M1-U15-048",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "assessment_methods",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which example is most clearly formal assessment?",
        "options": [
          "A scheduled test that produces an official grade",
          "A teacher mentally notes that a learner seems more confident",
          "A learner reflects privately on progress"
        ],
        "correctAnswer": "A scheduled test that produces an official grade",
        "explanation": "Formal assessment typically involves an organised assessment procedure and recorded result."
      },
      {
        "id": "M1-U15-049",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "assessment_methods",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which method is best represented by a folder containing drafts, final texts and reflections collected across a term?",
        "options": [
          "Portfolio assessment",
          "Placement testing",
          "Proficiency testing"
        ],
        "correctAnswer": "Portfolio assessment",
        "explanation": "A portfolio documents work and development over time."
      },
      {
        "id": "M1-U15-050",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "assessment_methods",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement is most accurate?",
        "options": [
          "Self, peer, portfolio, informal and formal assessment are methods; diagnostic and placement describe purposes",
          "All of these terms describe identical purposes",
          "Peer assessment can only be summative"
        ],
        "correctAnswer": "Self, peer, portfolio, informal and formal assessment are methods; diagnostic and placement describe purposes",
        "explanation": "TKT distinguishes how assessment is carried out from why it is carried out."
      },
      {
        "id": "M1-U15-056",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "task_design_marking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which assessment task is normally objective?",
        "options": [
          "Sentence ordering with one correct sequence",
          "Essay writing",
          "Open speaking interview"
        ],
        "correctAnswer": "Sentence ordering with one correct sequence",
        "explanation": "The answer can be checked against a predetermined correct sequence."
      },
      {
        "id": "M1-U15-057",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "task_design_marking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which assessment task is normally subjective?",
        "options": [
          "Letter writing",
          "Three-option multiple choice",
          "Matching words to definitions with one correct key"
        ],
        "correctAnswer": "Letter writing",
        "explanation": "Open writing requires judgement of the quality of the response."
      },
      {
        "id": "M1-U15-058",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "task_design_marking",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "A grammar test claims to assess spoken interaction but contains only isolated gap-fill items. What is the main design concern?",
        "options": [
          "The task may not assess the intended ability appropriately",
          "The task is too objective",
          "The task must be a placement test"
        ],
        "correctAnswer": "The task may not assess the intended ability appropriately",
        "explanation": "Assessment tasks should match the ability or construct the teacher intends to assess."
      },
      {
        "id": "M1-U15-059",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "task_design_marking",
        "difficulty": "medium",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Two teachers give very different scores to the same speaking performance. What does this suggest needs improvement?",
        "options": [
          "Consistency of marking",
          "Placement purpose",
          "Learner exposure"
        ],
        "correctAnswer": "Consistency of marking",
        "explanation": "Clearer criteria, standardisation or training may improve consistency across markers."
      },
      {
        "id": "M1-U15-060",
        "module": 1,
        "unit": 15,
        "section": "test",
        "skill": "task_design_marking",
        "difficulty": "hard",
        "taskType": "multiple_choice",
        "stem": "",
        "prompt": "Which statement about assessment task design is most accurate?",
        "options": [
          "The task should match the skill or language ability the teacher wants to assess",
          "Every skill is best assessed with multiple choice",
          "A difficult task is automatically a good assessment task"
        ],
        "correctAnswer": "The task should match the skill or language ability the teacher wants to assess",
        "explanation": "The design and purpose of the task should align with the ability being assessed."
      }
    ],
    "testMatchingSets": [
      {
        "id": "M1-U15-MATCH-T01",
        "section": "test",
        "instruction": "Match each assessment situation with the correct term.",
        "optionBank": [
          "Summative assessment",
          "Self assessment",
          "Peer assessment",
          "Portfolio assessment",
          "Objective marking",
          "Subjective marking"
        ],
        "items": [
          {
            "example": "A final result summarises achievement at the end of a course.",
            "correctAnswer": "Summative assessment"
          },
          {
            "example": "Learners judge their own progress using criteria.",
            "correctAnswer": "Self assessment"
          },
          {
            "example": "Learners give feedback on one another's work.",
            "correctAnswer": "Peer assessment"
          },
          {
            "example": "A purposeful collection of learner work built over time.",
            "correctAnswer": "Portfolio assessment"
          },
          {
            "example": "The answer is predetermined and does not depend on examiner opinion.",
            "correctAnswer": "Objective marking"
          },
          {
            "example": "The examiner judges the quality of an open-ended response.",
            "correctAnswer": "Subjective marking"
          }
        ]
      }
    ]
  }
};

function shuffleCopy(input) {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function sampleCopy(input, count) {
  if (count > input.length) throw new Error(`Cannot sample ${count} from pool of ${input.length}.`);
  return shuffleCopy(input).slice(0, count);
}

function chooseQuestions(unitId, count, recentQuestionIds = []) {
  const unit = unitPool[String(unitId)];
  const recent = new Set(recentQuestionIds);
  const fresh = unit.testQuestions.filter(q => !recent.has(q.id));
  const source = fresh.length >= count ? fresh : unit.testQuestions;
  return sampleCopy(source, count).map(q => ({ ...q, options: shuffleCopy(q.options) }));
}

function chooseMatchingTask(unitId, count, recentQuestionIds = []) {
  const unit = unitPool[String(unitId)];
  const set = sampleCopy(unit.testMatchingSets, 1)[0];
  const recent = new Set(recentQuestionIds);

  const indexed = set.items.map((item, index) => ({
    id: `${set.id}-Q${index + 1}`,
    unit: unitId,
    module: 1,
    section: "test",
    taskType: "matching",
    example: item.example,
    correctAnswer: item.correctAnswer
  }));

  const fresh = indexed.filter(item => !recent.has(item.id));
  const source = fresh.length >= count ? fresh : indexed;

  return {
    sourceSetId: set.id,
    instruction: set.instruction,
    optionBank: shuffleCopy(set.optionBank),
    items: sampleCopy(source, count)
  };
}

function makeMCTask(taskId, part, unitCounts, recentQuestionIds = []) {
  const items = [];
  for (const [unitIdRaw, count] of Object.entries(unitCounts)) {
    const unitId = Number(unitIdRaw);
    items.push(...chooseQuestions(unitId, count, recentQuestionIds));
  }
  return {
    taskId,
    part,
    taskType: "multiple_choice",
    unitIds: Object.keys(unitCounts).map(Number),
    questionCount: items.length,
    instruction: "Choose the best answer for each question.",
    items: shuffleCopy(items)
  };
}

function makeMatchingTask(taskId, part, unitId, count, recentQuestionIds = []) {
  const selected = chooseMatchingTask(unitId, count, recentQuestionIds);
  return {
    taskId,
    part,
    taskType: "matching",
    unitIds: [unitId],
    questionCount: selected.items.length,
    instruction: selected.instruction,
    optionBank: selected.optionBank,
    sourceSetId: selected.sourceSetId,
    items: shuffleCopy(selected.items)
  };
}

function collectQuestionIds(tasks) {
  return tasks.flatMap(task => task.items.map(item => item.id));
}

function makeSignature(tasks) {
  return tasks.map(task => {
    const optionSignature = task.taskType === "matching"
      ? `::${task.optionBank.join("~~")}`
      : "";
    return `${task.taskId}:${task.items.map(i => i.id).join(",")}${optionSignature}`;
  }).join("||");
}

function buildPart1(recentQuestionIds = []) {
  const allUnits = [1,2,3,4,5,6,7,8];
  const matchingUnits = sampleCopy(allUnits, 3);
  const matchingSet = new Set(matchingUnits);
  const mcUnits = shuffleCopy(allUnits.filter(u => !matchingSet.has(u)));

  return [
    makeMCTask("P1-T1", 1, { [mcUnits[0]]: 5, [mcUnits[1]]: 5 }, recentQuestionIds),
    makeMatchingTask("P1-T2", 1, matchingUnits[0], 5, recentQuestionIds),
    makeMCTask("P1-T3", 1, { [mcUnits[2]]: 5, [mcUnits[3]]: 5 }, recentQuestionIds),
    makeMCTask("P1-T4", 1, { [mcUnits[4]]: 5 }, recentQuestionIds),
    makeMatchingTask("P1-T5", 1, matchingUnits[1], 5, recentQuestionIds),
    makeMatchingTask("P1-T6", 1, matchingUnits[2], 5, recentQuestionIds)
  ];
}

function buildPart2(recentQuestionIds = []) {
  const units = shuffleCopy([9,10,11]);
  return [
    makeMatchingTask("P2-T1", 2, units[0], 5, recentQuestionIds),
    makeMCTask("P2-T2", 2, { [units[1]]: 5 }, recentQuestionIds),
    makeMatchingTask("P2-T3", 2, units[2], 5, recentQuestionIds)
  ];
}

function buildPart3(recentQuestionIds = []) {
  const units = shuffleCopy([12,13,14,15]);
  return [
    makeMatchingTask("P3-T1", 3, units[0], 6, recentQuestionIds),
    makeMatchingTask("P3-T2", 3, units[1], 6, recentQuestionIds),
    makeMatchingTask("P3-T3", 3, units[2], 6, recentQuestionIds),
    makeMCTask("P3-T4", 3, { [units[3]]: 7 }, recentQuestionIds)
  ];
}

function validateTasks(tasks, expectedQuestions, expectedTasks) {
  const questionIds = collectQuestionIds(tasks);
  if (tasks.length !== expectedTasks) throw new Error(`Expected ${expectedTasks} tasks, got ${tasks.length}.`);
  if (questionIds.length !== expectedQuestions) throw new Error(`Expected ${expectedQuestions} questions, got ${questionIds.length}.`);
  if (new Set(questionIds).size !== questionIds.length) throw new Error("Duplicate question IDs inside attempt.");
}

function buildUnique(builder, {
  usedSignatures = [],
  recentQuestionIds = [],
  expectedQuestions,
  expectedTasks,
  maxTries = 2000
} = {}) {
  const used = new Set(usedSignatures);
  for (let i = 0; i < maxTries; i++) {
    const tasks = builder(recentQuestionIds);
    validateTasks(tasks, expectedQuestions, expectedTasks);
    const signature = makeSignature(tasks);
    if (!used.has(signature)) return { tasks, signature };
  }
  throw new Error("Unable to build a new unique attempt. Clear old signatures or expand the bank.");
}

function wrapAttempt(mode, title, part, durationMinutes, built) {
  return {
    product: "TKT Ready",
    module: 1,
    mode,
    part,
    title,
    durationMinutes,
    feedbackDuringAttempt: false,
    showAnswersAfterSubmit: true,
    taskCount: built.tasks.length,
    questionCount: collectQuestionIds(built.tasks).length,
    signature: built.signature,
    tasks: built.tasks
  };
}

export function buildPartReview(part, options = {}) {
  if (![1,2,3].includes(part)) throw new Error("part must be 1, 2 or 3.");

  const config = {
    1: { builder: buildPart1, questions: 40, tasks: 6, minutes: 40, title: "Part 1 Review — Describing Language and Language Skills" },
    2: { builder: buildPart2, questions: 15, tasks: 3, minutes: 15, title: "Part 2 Review — Background to Language Learning" },
    3: { builder: buildPart3, questions: 25, tasks: 4, minutes: 25, title: "Part 3 Review — Background to Language Teaching" }
  }[part];

  const built = buildUnique(config.builder, {
    usedSignatures: options.usedSignatures || [],
    recentQuestionIds: options.recentQuestionIds || [],
    expectedQuestions: config.questions,
    expectedTasks: config.tasks
  });

  return wrapAttempt("part_review", config.title, part, config.minutes, built);
}

export function buildFullMock(options = {}) {
  const used = new Set(options.usedSignatures || []);
  const recentQuestionIds = options.recentQuestionIds || [];

  for (let tries = 0; tries < 2000; tries++) {
    const tasks = [
      ...buildPart1(recentQuestionIds),
      ...buildPart2(recentQuestionIds),
      ...buildPart3(recentQuestionIds)
    ];

    validateTasks(tasks, 80, 13);
    const signature = makeSignature(tasks);
    if (used.has(signature)) continue;

    return {
      product: "TKT Ready",
      module: 1,
      mode: "full_mock",
      part: null,
      title: "Module 1 Full Mock",
      durationMinutes: 80,
      feedbackDuringAttempt: false,
      showAnswersAfterSubmit: true,
      taskCount: 13,
      questionCount: 80,
      signature,
      tasks
    };
  }

  throw new Error("Unable to build a new unique full mock.");
}

export function scoreAttempt(attempt, responses) {
  const responseMap = new Map(
    responses.map(r => [r.questionId, r.selectedAnswer])
  );

  const unitStats = {};
  const partStats = {
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 }
  };

  let correct = 0;
  let total = 0;

  const review = [];

  for (const task of attempt.tasks) {
    for (const item of task.items) {
      const selectedAnswer = responseMap.get(item.id) ?? null;
      const isCorrect = selectedAnswer === item.correctAnswer;

      total += 1;
      if (isCorrect) correct += 1;

      partStats[task.part].total += 1;
      if (isCorrect) partStats[task.part].correct += 1;

      unitStats[item.unit] ??= { correct: 0, total: 0 };
      unitStats[item.unit].total += 1;
      if (isCorrect) unitStats[item.unit].correct += 1;

      review.push({
        questionId: item.id,
        part: task.part,
        unit: item.unit,
        selectedAnswer,
        correctAnswer: item.correctAnswer,
        isCorrect,
        explanation: item.explanation || null
      });
    }
  }

  const withPercent = stats => Object.fromEntries(
    Object.entries(stats).map(([key, value]) => [
      key,
      {
        ...value,
        percentage: value.total ? Math.round((value.correct / value.total) * 100) : 0
      }
    ])
  );

  return {
    correct,
    total,
    percentage: total ? Math.round((correct / total) * 100) : 0,
    partStats: withPercent(partStats),
    unitStats: withPercent(unitStats),
    review
  };
}

export function getAttemptQuestionIds(attempt) {
  return collectQuestionIds(attempt.tasks);
}
