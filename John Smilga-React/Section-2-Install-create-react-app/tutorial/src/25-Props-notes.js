import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css'
//setup vars
const author = "Colleen Hoover";
const title = "Reminders of Him: A Novel";
const img = 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg'

function BookList() {
  return (
    <section className='booklist'>
      <Book job='dev' />
      <Book title='random' number={22} />
    </section>
  )
}

const Book = (props) => {
  // console.log(props); we can check values in Book in BookLIst
  return <article className='book'>
    <img
      src={img}
      alt=""
    />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <p>{props.job}</p>
    <p>{props.title}</p>
    <p>{props.number}</p>
    {/* {console.log(props)} */}
    {/* <p>{let x=6}</p> */}
    {/* things in {} always have to return value/ should be expressions. Statements, like <p>{let x=6}</p> will throw error, but <p>{6+6}</p> returns value */}
  </article>
}
ReactDOM.render(<BookList></BookList>, document.getElementById('root'));
