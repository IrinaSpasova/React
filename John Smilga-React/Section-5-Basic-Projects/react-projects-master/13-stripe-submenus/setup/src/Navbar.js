import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    // origin: const bottom = tempBtn.bottom - 3;
    const bottom = tempBtn.bottom + 5;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;


// import React from 'react'
// import logo from './images/logo.svg'
// import { FaBars } from 'react-icons/fa'
// import { useGlobalContext } from './context'

// const Navbar = () => {
//   const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
//   const displaySubmenu = (e) =>{
//     //console.log(e.target);
//     const page = e.target.textContent;
//     const tempBtn = e.target.getBoundingClientRect(); 
//     //where to put the menu 04:50 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22707231#questions/16545804
//     const center = (tempBtn.left +tempBtn.right)/2;
//     const bottom = tempBtn.bottom +5;
//     openSubmenu(page, {center,bottom});
//   }
//   return (
//     <nav className="nav">
//       <div className="nav-center">
//         <div className="nav-header">
//           <img src={logo} className='nav-logo' alt="stripe" />
//           <button className='btn toggle-btn' onClick={openSidebar}>
//             <FaBars /> </button>
//         </div>
//         <ul className="nav-links">
//           <li>
//             <button className='link-btn'onMouseOver={displaySubmenu}>products </button>
//             {/* the names of the buttons have to match names of object properties. if in data file  page value is products- button must have name of "products" */}
//           </li>
//           <li>
//             <button className='link-btn'onMouseOver={displaySubmenu}>developers </button>
//           </li>
//           <li>
//             <button className='link-btn'onMouseOver={displaySubmenu}>company </button>
//           </li>
//         </ul>
//         <button className='btn signin-btn'>Sign in</button>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
