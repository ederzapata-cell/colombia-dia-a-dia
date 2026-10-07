import {
  auth,
  isFirebaseConfigured,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "./firebase-client.js";

const params = new URLSearchParams(location.search);
const rawReturnTo = params.get("returnTo");
const safeReturnTo = rawReturnTo && !rawReturnTo.startsWith("http") && !rawReturnTo.startsWith("//")
  ? rawReturnTo
  : "index.html";

let mode = "signin";

const form = document.querySelector("#authForm");
const emailInput = document.querySelector("#authEmail");
const passwordInput = document.querySelector("#authPassword");
const confirmInput = document.querySelector("#authConfirmPassword");
const confirmLabel = document.querySelector("#confirmPasswordLabel");
const submitButton = document.querySelector("#authSubmit");
const message = document.querySelector("#authMessage");
const forms = document.querySelector("#authForms");
const currentPanel = document.querySelector("#currentUserPanel");
const currentEmail = document.querySelector("#currentUserEmail");
const setupNotice = document.querySelector("#authSetupNotice");

function setMessage(text, kind = "") {
  message.textContent = text;
  message.className = `auth-message ${kind}`.trim();
}

function friendlyError(error) {
  const messages = {
    "auth/email-already-in-use": "An account already exists with this email.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/invalid-credential": "The email or password is incorrect.",
    "auth/missing-password": "Enter your password.",
    "auth/weak-password": "Use a stronger password with at least 6 characters.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/user-disabled": "This account has been disabled."
  };
  return messages[error?.code] || "Something went wrong. Please try again.";
}

function setMode(nextMode) {
  mode = nextMode;
  const signup = mode === "signup";

  document.querySelectorAll("[data-auth-mode]").forEach(button => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });

  document.querySelector("#authHeading").textContent = signup ? "Create your account" : "Sign in";
  document.querySelector("#authIntro").textContent = signup
    ? "Create one account to keep your TKT Ready progress with you."
    : "Continue your preparation and keep your progress connected to your account.";

  confirmLabel.hidden = !signup;
  confirmInput.required = signup;
  passwordInput.autocomplete = signup ? "new-password" : "current-password";
  submitButton.textContent = signup ? "Create account" : "Sign in";
  document.querySelector("#resetPasswordButton").hidden = signup;
  setMessage("");
}

document.querySelectorAll("[data-auth-mode]").forEach(button => {
  button.addEventListener("click", () => setMode(button.dataset.authMode));
});

if (!isFirebaseConfigured || !auth) {
  setupNotice.hidden = false;
  submitButton.disabled = true;
  document.querySelector("#resetPasswordButton").disabled = true;
  setMessage("Add your Firebase web configuration to activate sign in.", "info");
} else {
  onAuthStateChanged(auth, user => {
    if (user) {
      forms.hidden = true;
      currentPanel.hidden = false;
      currentEmail.textContent = user.email || "Authenticated user";
    } else {
      forms.hidden = false;
      currentPanel.hidden = true;
    }
  });
}

form.addEventListener("submit", async event => {
  event.preventDefault();
  if (!isFirebaseConfigured || !auth) return;

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (mode === "signup" && password !== confirmInput.value) {
    setMessage("The passwords do not match.", "error");
    return;
  }

  submitButton.disabled = true;
  setMessage(mode === "signup" ? "Creating account…" : "Signing in…", "info");

  try {
    if (mode === "signup") {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
    location.replace(`./${safeReturnTo}`);
  } catch (error) {
    setMessage(friendlyError(error), "error");
    submitButton.disabled = false;
  }
});

document.querySelector("#resetPasswordButton").addEventListener("click", async () => {
  if (!isFirebaseConfigured || !auth) return;
  const email = emailInput.value.trim();

  if (!email) {
    setMessage("Enter your email first, then choose Forgot your password?", "info");
    emailInput.focus();
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    setMessage("Password reset email sent.", "success");
  } catch (error) {
    setMessage(friendlyError(error), "error");
  }
});

document.querySelector("#signOutButton").addEventListener("click", async () => {
  if (!auth) return;
  await signOut(auth);
  setMode("signin");
  setMessage("You have signed out.", "success");
});
