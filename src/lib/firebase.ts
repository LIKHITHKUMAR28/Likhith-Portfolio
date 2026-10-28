import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration for Likhith Portfolio
export const firebaseConfig = {
  apiKey: "AIzaSyD6ouAHj6DDpy1ImeVvnWWcaG9P_1lMNrA",
  authDomain: "likhith-portfolio-3362e.firebaseapp.com",
  projectId: "likhith-portfolio-3362e",
  storageBucket: "likhith-portfolio-3362e.firebasestorage.app",
  messagingSenderId: "683090086055",
  appId: "1:683090086055:web:63db6d0884cef8b607b382",
  measurementId: "G-D3QY9YCSC8",
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics with environment compatibility check
export let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}
