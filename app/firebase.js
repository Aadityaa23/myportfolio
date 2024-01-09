// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyABgsv6PxNX0QNlVvtvGz037u0E2ey4R44",
	authDomain: "aadityaa-gupta.firebaseapp.com",
	projectId: "aadityaa-gupta",
	storageBucket: "aadityaa-gupta.appspot.com",
	messagingSenderId: "973085369694",
	appId: "1:973085369694:web:3961d7aaf14f79b08e5bcf",
	measurementId: "G-K3HKMWN0E8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
