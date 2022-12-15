import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD9rvVf_zgb9sVxBc5JVyOUAukj2H-uBMQ",
  authDomain: "sulo-b2fc1.firebaseapp.com",
  projectId: "sulo-b2fc1",
  storageBucket: "sulo-b2fc1.appspot.com",
  messagingSenderId: "610011991931",
  appId: "1:610011991931:web:0491333eaba94766fcf7de",
  measurementId: "G-2CRNP26B2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//export default app;
export {auth}
export const db = getFirestore(app);
