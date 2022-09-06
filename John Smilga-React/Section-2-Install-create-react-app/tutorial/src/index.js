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
        author={firstBook.author}>
        {/* children  ( children is the content between opening and closing tag)*/}
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, atque.</p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author} />
    </section>
  )
}

const Book = (props) => {
const {img,title, author, children} = props;
console.log(props);
  return <article className='book'>
    <img
      src={img}
      alt=""
    />
    {/* {props.children} */}
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>
}

// Second variant
// const Book = (props) => {
//   const {img,title, author} = props;
//   console.log(props);
//     return <article className='book'>
//       <img
//         src={img}
//         alt=""
//       />
//       {/* {props.children} */}
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {props.children}
//     </article>
//   }

// First variant:
// const Book = ({ img, title, author,children }) => {

//   return <article className='book'>
//     <img
//       src={img}
//       alt=""
//     />
//     {children}
//     <h1>{title}</h1>
//     <h4>{author}</h4>
//     {children}
//   </article>
// }


// First variant:
// const Book = (props) => {
//   const{img, title,author}=props;
//     return <article className='book'>
//       <img
//         src={img}
//         alt=""
//       />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//    </article>
//   }
ReactDOM.render(<BookList></BookList>, document.getElementById('root'));
