// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1MIdnWt1UKTn6tBgqk7OaktVjMP529UE",
  authDomain: "aqua-sentinel-a0a66.firebaseapp.com",
  databaseURL: "https://aqua-sentinel-a0a66-default-rtdb.firebaseio.com",
  projectId: "aqua-sentinel-a0a66",
  storageBucket: "aqua-sentinel-a0a66.appspot.com",
  messagingSenderId: "352878965210",
  appId: "1:352878965210:web:0e120ed9ac123d511650e3",
  measurementId: "G-QM6XN00HRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
