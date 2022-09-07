import React, { useState } from 'react';

const UseStateObject = () => {
  const[person, setPerson] = useState({
    name: 'petter',
    age: 24,
    message: 'random message',
  });

  // console.log(person);

const changeMessage = () =>{
  setPerson({...person, message: 'hello world'});

  // If we do not use ... (spread operator) - we will change the whole object !!!!!!!!!!!!!!!!!!
  // we can make hooks from every key value pair too: https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22239696#questions/16545804
};

  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
