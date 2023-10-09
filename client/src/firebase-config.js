import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhHBFhItt-3Cn4FLS2fjiVUOV_Ic3t0rU",
    authDomain: "client-management-system-cd07c.firebaseapp.com",
    projectId: "client-management-system-cd07c",
    storageBucket: "client-management-system-cd07c.appspot.com",
    messagingSenderId: "381014980623",
    appId: "1:381014980623:web:e762f2968bb290fab00b7a",
    measurementId: "G-CETBM1KHTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)