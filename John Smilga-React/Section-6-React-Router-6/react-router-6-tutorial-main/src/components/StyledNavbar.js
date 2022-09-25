import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' 
      className={({isActive})=>
        (isActive? 'link active':'link')
      }
    
      >Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/products'>Products</NavLink>
    </nav>
  )
}

export default Navbar

//function is part of the react router library