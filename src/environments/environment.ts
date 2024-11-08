import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: true,
  apiKey: "AIzaSyD8A-75xbdgrGxC9F0b16IwzHC9Mb-CZ1M",
  authDomain: "navigo-ebe15.firebaseapp.com",
  projectId: "navigo-ebe15",
  storageBucket: "navigo-ebe15.firebasestorage.app",
  messagingSenderId: "645822151841",
  appId: "1:645822151841:web:0be6d3f029850ae9cc04e0",
  measurementId: "G-RN3TSGQXLM"
};

const app = initializeApp(environment);
const analytics = getAnalytics(app);