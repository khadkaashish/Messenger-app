// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYQoL7LpFN51UsSNqhvurfqa0eyWlAZGo",
  authDomain: "marshmallow02.firebaseapp.com",
  projectId: "marshmallow02",
  storageBucket: "marshmallow02.appspot.com",
  messagingSenderId: "730855413200",
  appId: "1:730855413200:web:a5406622c49496dd4dd5d5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;
