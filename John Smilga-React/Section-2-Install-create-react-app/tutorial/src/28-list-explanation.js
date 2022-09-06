import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css'
//setup vars
const books=[
{
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg',
  title: 'Reminders of Him: A Novel',
  author: 'Colleen Hoover'
},
 {
  img: 'https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41d1gVUK1yL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  title: 'Verity',
  author: 'Colleen Hoover'
},
];

const names =['asd','nfn','ksks']
const newNames= names.map((name)=>{
  // console.log(name);
  return <h1>{name}</h1>;
});
console.log(newNames);

function BookList() {
  return (
    <section className='booklist'>
      {newNames}
    </section>
  )
}

const Book = (props) => {
const {img,title, author} = props;
console.log(props);
  return <article className='book'>
    <img
      src={img}
      alt=""
    />
    <h1>{title}</h1>
    <h4>{author}</h4>
    
  </article>
}

ReactDOM.render(<BookList></BookList>, document.getElementById('root'));
