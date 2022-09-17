//if we use only export: import React, { useContext } from 'react'
import React from 'react'
import { FaBars } from 'react-icons/fa'
//import {AppContext, useGlobalContext} from './context'
import { useGlobalContext} from './context'

const Home = () => {
  // if we use only export: const data = useContext(AppContext);
  //const data = useGlobalContext();
  // console.log(data);
  const {openSidebar, openModal} =useGlobalContext();
 
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>show modal</button>
    </main>);
}

export default Home
