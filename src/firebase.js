import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFhEyhs1VwXX7TvfwLtO1N8XDPYxyLPio",
  authDomain: "netflix-clone-2847f.firebaseapp.com",
  projectId: "netflix-clone-2847f",
  storageBucket: "netflix-clone-2847f.appspot.com",
  messagingSenderId: "150685000185",
  appId: "1:150685000185:web:13ca0b3ae6c7fd057bdd28",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
