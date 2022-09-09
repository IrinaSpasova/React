import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

//https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22277200#questions/16545804


const ShortCircuit = () => {
 
  const [text, setText] = useState('');
  
  
const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world'; //returns first value if true or second value if first is false
  // const secondValue = text && 'hello world'; //returns second value if first is true, and do not return anything when first value is false

  return (<>

    {/* <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1> */}

     <h1>{text || 'mrun1'}</h1> 
   
    {/* <h1>{text && 'mrun'}</h1> */}
    <button className='btn' onClick={()=>setIsError(!isError)}> ternary toggle error</button>
    {isError && <h1>error...</h1>}
    {isError ? (<p>there is an error...</p>
     ): (
     <div><h2>there is no error</h2></div>
     
     )}
   
  </>);
};

export default ShortCircuit;


