import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

//https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22277200#questions/16545804

// we can use short-circuit evaluation or ternary operator, because if do not return value!!!!!
const ShortCircuit = () => {
 // eslint-disable-next-line


 const [text, setText] = useState('');


  const firstValue = text || 'hello world'; //returns first value if true or second value if first is false
  const secondValue = text && 'hello world'; //returns second value if first is true, and do not return anything when first value is false

  return (<>

    {/* <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1> */}

     <h1>{text || 'mrun1'}</h1> 
    {/* <h1>{text && 'mrun'}</h1> */}

    {text && <h1>mrun2</h1>}
    {!text && <h1>mrun3f</h1>}
    

  </>);
};

export default ShortCircuit;
