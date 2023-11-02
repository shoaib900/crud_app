import { db } from "../firebase/config";

import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectRef = collection(db,"book")
class BookDataService{
    addBooks = (newBook)=>{
        return addDoc(bookCollectRef,newBook);
    }

    updateBook = (id,updateBook)=>{
        const bookDoc = doc(db,"book",id);
        return updateDoc(bookDoc,updateBook);
    }

    deleteBook = (id)=>{
        const bookDoc = doc(db,"book",id);
        return deleteDoc(bookDoc);
    }

    getAllBooks = ()=>{
        return getDocs(bookCollectRef);
    }

    getBook =(id)=>{
        const bookDoc = doc(db,"book",id);
        return getDoc(bookDoc);
    }

}

export default new BookDataService();
