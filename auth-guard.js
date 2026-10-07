import { auth, isFirebaseConfigured, onAuthStateChanged } from "./firebase-client.js";

if (isFirebaseConfigured && auth) {
  document.documentElement.classList.add("auth-checking");

  onAuthStateChanged(auth, user => {
    document.documentElement.classList.remove("auth-checking");

    if (!user) {
      const current = location.pathname.split("/").pop() + location.search + location.hash;
      const returnTo = encodeURIComponent(current || "index.html");
      location.replace(`./login.html?returnTo=${returnTo}`);
    }
  });
}
