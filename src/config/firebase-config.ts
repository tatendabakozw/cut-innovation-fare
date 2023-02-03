import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBQ-7-qLSRisFvrpHbJx1oruirLP7odLSc",
    authDomain: "discord-clone-44033.firebaseapp.com",
    projectId: "discord-clone-44033",
    storageBucket: "discord-clone-44033.appspot.com",
    messagingSenderId: "500057291506",
    appId: "1:500057291506:web:0be10eba33ba157af6ee6b",
    measurementId: "G-VWNH3EVV8P"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
