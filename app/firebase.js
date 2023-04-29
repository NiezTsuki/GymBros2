import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyD7WXSovGxDgYyScig3kSbUV5le1blaO-E",
    authDomain: "gym-bros-cf1e4.firebaseapp.com",
    projectId: "gym-bros-cf1e4",
    storageBucket: "gym-bros-cf1e4.appspot.com",
    messagingSenderId: "817133230214",
    appId: "1:817133230214:web:6406684a3ca79bb90fd907"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)