import React, {useState} from 'react'
import Addbooks from './Addbooks'
import BookList from './BookList'

const Home = () => {
  const [bookId,setBookId] = useState("");

  const getBookHandler = (id)=> {
    console.log("The ID of document to be adited",id);
    setBookId(id);
  }
  return (
    <div>
       <Addbooks id={bookId} setBookId={setBookId} />
       <hr />
       <BookList getBookId={getBookHandler} />
      
    </div>
  )
}

export default Home
