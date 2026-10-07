export const firebaseConfig = {
  apiKey: "REPLACE_ME",
  authDomain: "REPLACE_ME",
  projectId: "REPLACE_ME",
  storageBucket: "REPLACE_ME",
  messagingSenderId: "REPLACE_ME",
  appId: "REPLACE_ME"
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(
  value => typeof value === "string" && value && value !== "REPLACE_ME"
);
