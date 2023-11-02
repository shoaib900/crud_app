import React, { useEffect, useState } from "react";
// import "./addbooks.css"
import style from "./addbooks.module.css";
import Books from "../Services/Books";

const Addbooks = ({id,setBookId}) => {
 const [title,setTitle] = useState("");
 const [author,setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook =  {
      title,
      author,
    }
    console.log(newBook);
    try {
      if(id !== undefined && id !== ""){
      await Books.updateBook(id, newBook);
      setBookId("");
      console.log("your data has been updated successfully")

      }else{
        
      await Books.addBooks(newBook);
      console.log("your data has been added successfully")

      }
      
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setAuthor("");
  }

  const editHandler= async()=>{
    try {
      const docSnap = await Books.getBook(id);
      console.log("the record is ", docSnap.data());
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      
    } catch (error) {
      console.log(error.message);
      
    }

  }

  useEffect(()=>{
    console.log("The id is here ",id)
    if(id !== undefined && id !==""){
      editHandler();
    }
  },[id])
  return (
    <div className={style.container}>
      <h1 className={style.h1}>hello addbooks</h1>
      <form action="" onSubmit={handleSubmit} className={style.form}>
        <label htmlFor="title">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the book title"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="author">
          <input
            type="text"
            id="author"
            name="author"
            placeholder="enter the Author name"
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}
          />
        </label>
        <br />

        <input type="submit" value={"Add/Update"} style={{margin:"10px 0"}} />
      </form>
    </div>
  );
};

export default Addbooks;
