import React, { useState, useEffect } from 'react';
// useState = preserve the value between the renders and trigger re-render
// useEffect === work outside the component
// by default runs after every re-render
// cleanup function
// second parameter

//every time we use useState- we trigger useEffect
// WE CAN NOT USE HOOKS IN CONDITIONAL!!!!

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);


  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `New messages(${value})`;
    }

  },[value]); 
  // if ve do not put second parameter- useEffect will run each and every time, including initial.
  // if the second parameter ( in this case []) is empty- it only runs in the initial render and only ones!!!!
  // else- we trigger useEffect on second parameter change
  //we can have many useEffect

  console.log('render component');
  return (<>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>Click me</button>
  </>);
};

export default UseEffectBasics;
