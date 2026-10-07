export const firebaseConfig = {
  apiKey: "AIzaSyBmKuRw-_ufNFCDQ6XajujQN6ycvo79UCA",
  authDomain: "tkt-ready.firebaseapp.com",
  projectId: "tkt-ready",
  storageBucket: "tkt-ready.firebasestorage.app",
  messagingSenderId: "1081460599220",
  appId: "1:1081460599220:web:d9aa1898f3c3c2dc8d2ae1"
};

export const isFirebaseConfigured = Object.values(firebaseConfig).every(
  value => typeof value === "string" && value && value !== "REPLACE_ME"
);
