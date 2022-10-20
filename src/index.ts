import {run} from "./app/app";
import './styles.scss';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5JTOR1ZVmQegr0xz7cglKcuthy13kcL0",
  authDomain: "timestamp-calculator.firebaseapp.com",
  projectId: "timestamp-calculator",
  storageBucket: "timestamp-calculator.appspot.com",
  messagingSenderId: "168737895493",
  appId: "1:168737895493:web:f75ad7e313051ef2771f2c",
  measurementId: "G-WV9DL3S5X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

run();