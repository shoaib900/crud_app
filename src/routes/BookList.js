import React, { useEffect, useState } from "react";
import BookDataServices from "../Services/Books";
import style from "./booklist.module.css";

const BookList = ({getBookId}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, [books]);

  const getBooks = async () => {
    const data = await BookDataServices.getAllBooks();
    // console.log(data.docs);
    // console.log("data===",data );
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // const getBookId= ()=> {}

  const deleteHandler= async (id) => {
    await BookDataServices.deleteBook(id);
    getBooks();
  }
  return (
    <div>
      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}

      <table className={style.container}>
        <tr className={style.tabtitle}>
          <td>1</td>
          <td>book title</td>
          <td>author name</td>
          <td>
            <button>edit</button>
          </td>
          <td>
            <button>delete</button>
          </td>
        </tr>
        {books.map((doc, index) => {
          return (
            <tr key={doc.id}>
              <td>{index + 1}</td>
              <td>{doc.title}</td>
              <td>{doc.author}</td>
              <td>
                <button onClick={() => getBookId(doc.id)}>edit</button>
              </td>
              <td>
                <button onClick={() => deleteHandler(doc.id)}>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default BookList;
