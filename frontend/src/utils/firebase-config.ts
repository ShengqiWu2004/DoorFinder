import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

import './App.css'

const firebaseConfig = {
    apiKey: "AIzaSyByUuAm-DvE2oayoeCMYFRMc3ZVuYlnQm4",
    authDomain: "doorfinder-dg.firebaseapp.com",
    projectId: "doorfinder-dg",
    storageBucket: "doorfinder-dg.firebasestorage.app",
    messagingSenderId: "714658471366",
    appId: "1:714658471366:web:652a55a2aa7c8c6100e6c7",
    measurementId: "G-XHSJVK2E82"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
