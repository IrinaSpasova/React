import React from 'react';
import { data } from '../../../data';

////////////////////////// other way to call useState:
// instead import React, { useState } from 'react'; - use React.useState()

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) =>{
    let newPeople = people.filter((person)=> person.id !== id);
    //this will put in newPeople every person except deleted one 
    setPeople(newPeople);
  }
  return (<>
  {people.map((person) =>{
   // console.log(person);

   const {id, name} = person;

    return(
      <div key={id} className='item'>
        <h4>{name}</h4>
        <button className='btn' onClick={()=> removeItem(id)}>remove</button>
      </div>
    );
  })}
  <button className='btn' onClick={()=>setPeople([])}>clear items</button>
  {/* setPeople([]) we can use handler too but it is easer to clear all only with this [] */}
  </>
  );
};

export default UseStateArray;
