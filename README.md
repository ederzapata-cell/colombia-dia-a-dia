# TKT Ready

Independent preparation for the Cambridge Teaching Knowledge Test (TKT).

## Current status

Module 1 foundation is in place:

- 15 units
- 900-question content bank
- Unit Mini Test logic
- Part Reviews
- Full Module 1 Mock engine: 80 questions / 80 minutes / 13 tasks
- Readiness and progress engine
- Firestore data model
- Dashboard visual prototype
- Module 1 overview screen
- Connected Dashboard → Module 1 → Unit navigation

## Repository structure

- `/data/module1` — Unit 1–15 question banks
- `/engine` — Exam and readiness logic
- `/firebase` — Firestore schema, helpers and rules
- `/docs` — UI architecture and screen flow
- `/index.html` — Current dashboard prototype
- `/styles.css` — Current visual system
- `/app.js` — Prototype interactions
- `/netlify.toml` — Netlify deployment configuration

## Positioning

TKT Ready is an independent preparation product. It is not an official Cambridge product and does not claim to predict an official Cambridge band.

## Deployment

This repository is configured as a static Netlify site with the repository root as the publish directory.

- Functional Part Reviews and Full Mock
- Exam results and mistake review


## Firebase Authentication setup

The repository includes a Firebase Authentication layer in safe demo mode.

1. Create or open the Firebase project for TKT Ready.
2. Register a Web app.
3. Enable Authentication > Sign-in method > Email/Password.
4. Copy the Firebase web configuration into `firebase-config.js`.
5. Commit the file. Once configured, protected app pages require authentication automatically.

The Firebase web configuration identifies the project; access control still depends on Firebase Authentication and security rules.
