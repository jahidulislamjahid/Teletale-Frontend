import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqphvUxe6wA_T4cTDDFQo3KARoAvqwwWI",
    authDomain: "teletale-7c144.firebaseapp.com",
    projectId: "teletale-7c144",
    storageBucket: "teletale-7c144.appspot.com",
    messagingSenderId: "995064692942",
    appId: "1:995064692942:web:bf3b44baff439dd7d6909f"
  };

// Initialize Firebase
const initAuthentication = () => {
    return initializeApp(firebaseConfig);
}
export default initAuthentication;