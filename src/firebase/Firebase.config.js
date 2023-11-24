// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiARprmnXKOE9t6fDOEoN_C35kR2-B_aI",
  authDomain: "dev-forum-370f9.firebaseapp.com",
  projectId: "dev-forum-370f9",
  storageBucket: "dev-forum-370f9.appspot.com",
  messagingSenderId: "501809301665",
  appId: "1:501809301665:web:c767a33b6380ee3a5608e0",
  measurementId: "G-8LBSMGQCME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
