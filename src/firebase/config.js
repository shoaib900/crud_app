import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDbk2F5eHo6jc5yQXFGJMUjhoZRq-DBVqo",
  authDomain: "books-090.firebaseapp.com",
  projectId: "books-090",
  storageBucket: "books-090.appspot.com",
  messagingSenderId: "805820352370",
  appId: "1:805820352370:web:d5975024ecd1448961bfeb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);