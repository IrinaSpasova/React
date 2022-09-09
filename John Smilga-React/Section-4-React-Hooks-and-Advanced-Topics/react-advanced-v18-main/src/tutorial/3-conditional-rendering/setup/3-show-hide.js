import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (<>
    <button className='btn' onClick={() => setShow(!show)}>show/hide</button>
    {show && <Item />}
  </>
  );
};
// Importance of cleanup function 7:15 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22311714#questions
const Item = () => {

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return ()=>{
      window.removeEventListener('resize', checkSize);
    }
  }, []);

  return (<div style={{ marginTop: '2rem' }}>
    <h1>window</h1>
    <h2>size : {size} px</h2>
  </div>)
}

export default ShowHide;
