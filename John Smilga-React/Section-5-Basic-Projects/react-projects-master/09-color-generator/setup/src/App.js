import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, SetColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#EE81EE').all(1));

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('hello');

    try {
      let colors = new Values(color).all(1);
      //console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      //console.log(error);
    }

  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => SetColor(e.target.value)}
            placeholder="#EE81EE"
            className={`${error ? 'error' : null}`} />
          <button className='btn' type='submit'>submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color,index)=>{
          //console.log(color);
         // const hex = color.hex; if we want to use color property
          return<SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
      </section>
    </>
  );
}

export default App

//JSX return only one thing ! Use fragment to return more
