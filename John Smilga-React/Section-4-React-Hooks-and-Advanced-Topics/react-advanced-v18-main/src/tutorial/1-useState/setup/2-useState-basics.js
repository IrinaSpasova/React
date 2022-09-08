import React, { useState } from 'react';

////////////////////                 HOOKS                   //////////////////

//they start with use
//component name must be uppercase (UseStateBasics, not useStateBasics, StateMrun, not stateMrun)
//mast be in function/component body
//can not call conditionally, but set... can!



//useState is a Hook that lets you add React state to function components.
//The only argument to the useState() Hook is the initial state. 

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value,handler);

  const [text,setText] = useState('random title')

  //text,setText===value,function (set... is convention)
const handleClick = () =>{
  // setText('mrun'); //this will be the new value

  //additional logic:
  if(text === 'random title'){
    setText('mrun'); //this will be the new value
  }else{
    setText('random title');
  }
  
}

  return <React.Fragment>
    <h1>{text}</h1>
    <button className='btn'onClick={handleClick}>change title</button>
  </React.Fragment>
};

export default UseStateBasics;



const handleClick = () =>{
  if(text === 'random title'){
    setText('mrun'); 
  }else{
    setText('random title');
  }
}