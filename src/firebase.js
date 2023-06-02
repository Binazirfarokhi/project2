// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm5UhSm6cW7rFdrEf7LXOrWTufBAuEKj4",
  authDomain: "react-auth-test-2c80c.firebaseapp.com",
  projectId: "react-auth-test-2c80c",
  storageBucket: "react-auth-test-2c80c.appspot.com",
  messagingSenderId: "525248816773",
  appId: "1:525248816773:web:cb01a59fd4a6e17a146bec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default app
