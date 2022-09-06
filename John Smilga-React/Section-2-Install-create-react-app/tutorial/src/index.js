import React from 'react';
import ReactDOM from 'react-dom';
import { books } from './books';
//CSS
import './index.css'

import {data} from './books'; // we import named export with {; the name of import should match with the name of the function

//import Book from './Book';  when the export is default the name of import is whatever we want, for example:
import Opit from './Book';

// relative import example:
import {greeting} from './testing/testing';


function BookList() {
  console.log(greeting);
  return (
  <section className='booklist'>
    {data.map((book) => {
    return (
      // <Book key={book.id} {...book}></Book>
      <Opit key={book.id} {...book}></Opit>
    );
  })}
  </section>
  );
}

ReactDOM.render(<BookList></BookList>, document.getElementById('root'));
