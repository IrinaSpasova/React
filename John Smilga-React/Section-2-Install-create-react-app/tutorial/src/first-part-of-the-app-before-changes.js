import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

//stateless function component
//always return JSX

// function Greeting() {
//   return <h4> this is John and this is my first component</h4>
// }


// Another way:
// const Greeting =() =>{
//   return React.createElement('h1',{}, 'hello')
// };

// Read more for React.Fragment. It can be used instead of div in div. React.Fragment === <></>
// onClick is used instead onclick!!! className === class . Have to use camelCase for HTML attributes
// use () after return. 
// code without () and in the next line will cause error

// function Greeting(){
//   return (
//     <div>
//     <h3>Hello</h3>
//     <ul>
//       <li>
//         <a href="#">first tab</a>
//       </li>
//     </ul>
// <Person />
// <Message />

//   </div>  
//   )
// }

// const Person = () => <h2> john doe</h2>;
// const Message =()=>{
//   return  <p>this is my first message</p>;
// }


function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}


const Book = () => {
  return <article className='book'>
     <Image></Image>
     <Title></Title>
     <Author />
  </article>
}

const Image = () => 
  <img 
  src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg" 
  alt=""
   />
;

const Title = ()=> <h1>Reminders of Him: A Novel</h1>
const Author = ()=> <h4 style={{color:'#617d98', fontSize:'0.90rem', margin:'0.25rem'}}>Colleen Hoover</h4>

// first {} - are declaration for JS syntax {{}} is a place to put objects
ReactDOM.render(<BookList></BookList>, document.getElementById('root'));
//ReactDOM.render(<Greeting></Greeting> (what we render), document.getElementById('root')(where we render it));

// or only <Greeting />


//           NOTES            
// we can return only one element ( only one <div> </div>, not for example <div>something</div><div>something </div>)












/*import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
