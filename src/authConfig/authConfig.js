import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCeNcjaBnDVcWhFf6dmXKqu_DDH24GZAXg",
    authDomain: "aircraftengineersstore.firebaseapp.com",
    projectId: "aircraftengineersstore",
    storageBucket: "aircraftengineersstore.appspot.com",
    messagingSenderId: "10677234470",
    appId: "1:10677234470:web:4db97131484408bc162fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth



