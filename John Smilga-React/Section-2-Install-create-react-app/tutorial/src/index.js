import React from 'react';
import ReactDOM from 'react-dom';

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



function Greeting(){
  return (
    <div>
    <h3>Hello</h3>
    <ul>
      <li>
        <a href="#">first tab</a>
      </li>
    </ul>
  </div>  
  )
}

ReactDOM.render(<Greeting></Greeting>, document.getElementById('root'));
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
