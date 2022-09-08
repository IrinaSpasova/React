import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);

  const checkSize = ()=>{
    setSize(window.innerWidth);
    // memory leak, because re-rendering 5:10 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22271774#questions/16545804
  // we use cleanup function to prevent this
  }

  useEffect(() => {
    //console.log('mrun');
    console.log('useEffect');
    window.addEventListener('resize', checkSize);

    //clean up function (good practice! always have to write one):
    return()=>{
      // console.log('resize');
      console.log('clean');
      window.removeEventListener('resize', checkSize);
    }
  },[]);
console.log('render');

  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>);
};

export default UseEffectCleanup;
