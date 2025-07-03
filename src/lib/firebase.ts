import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzViHQpMY4g3hJUT0XQrWIvWC0dGBND9E",
  authDomain: "wedding-rsvp-17b90.firebaseapp.com",
  projectId: "wedding-rsvp-17b90",
  storageBucket: "wedding-rsvp-17b90.firebasestorage.app",
  messagingSenderId: "1083175244106",
  appId: "1:1083175244106:web:81bdc65e4ad2bad073f1b3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 