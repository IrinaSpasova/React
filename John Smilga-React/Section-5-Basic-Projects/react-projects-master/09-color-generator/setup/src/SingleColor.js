import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert,setAlert] =useState(false);
  const bcg = rgb.join(',');
  //console.log(bcg);
//weight comes from color property!
//const hex = rgbToHex(...rgb); we use color property not function in utils
const hexValue = `#${hexColor}`;
useEffect(()=>{
  const timeout = setTimeout(()=>{
setAlert(false);
  },5000)
  return ()=>clearTimeout(timeout)
},[alert]);

  return <article className={`color ${index >100 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={()=>{
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }}>
    <p className='percent-value'> {weight}%</p>
    <p className='color-value'>{hexColor}</p>
    {alert && <p className='alert'>copied to clipboard</p>}
    </article>
}

export default SingleColor

//2 ways to access color 12:15  https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22675925#questions/16545804
