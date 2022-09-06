import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css'
//setup vars
const books = [
  {id:1,
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg',
    title: 'Reminders of Him',
    author: 'Colleen Hoover',
  },
  {id:2,
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41d1gVUK1yL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'Verity',
    author: 'Colleen Hoover',
  },
  {id:3,
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg',
    title: 'It Starts with Us ',
    author: 'Colleen Hoover',
  },
  {id:4,
    img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/51qX2RGyhhL._SX320_BO1,204,203,200_.jpg',
    title: 'It Ends with Us',
    author: 'Colleen Hoover',
  },
];

function BookList() {
  return (
  <section className='booklist'>
    {books.map((book,index) => {
    return (
      <Book key={index} book={book}></Book>
    );
  })}
  </section>
  );
}

// We can use index in static lists ( lists without CRUD changes), because index is change if items is changing, in other keys- use other solutions (id stays the same)

const Book = (props) => {
  // console.log(props);
  const { img, title, author } = props.book;
  
  return <article className='book'>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
}

ReactDOM.render(<BookList></BookList>, document.getElementById('root'));
