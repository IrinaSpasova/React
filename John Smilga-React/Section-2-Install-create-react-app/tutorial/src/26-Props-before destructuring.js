import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css'
//setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg',
  title: 'Reminders of Him: A Novel',
  author: 'Colleen Hoover'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41d1gVUK1yL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'Verity',
  author: 'Colleen Hoover'
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
       img={firstBook.img} 
       title={firstBook.title} 
       author={firstBook.author} />
      <Book 
      img={secondBook.img} 
      title={secondBook.title} 
      author={secondBook.author} />
    </section>
  )
}

const Book = (props) => {
  // console.log(props); we can check values in Book in BookLIst
  return <article className='book'>
    <img
      src={props.img}
      alt=""
    />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
    {/* <p>{props.job}</p> */}
    {/* <p>{props.title}</p> */}
    {/* <p>{props.number}</p> */}
    {/* {console.log(props)} */}
    {/* <p>{let x=6}</p> */}
    {/* things in {} always have to return value/ should be expressions. Statements, like <p>{let x=6}</p> will throw error, but <p>{6+6}</p> returns value */}
  </article>
}
ReactDOM.render(<BookList></BookList>, document.getElementById('root'));
