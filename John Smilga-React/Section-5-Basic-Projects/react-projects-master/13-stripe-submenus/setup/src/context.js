import React, { useState, useContext } from 'react';
import sublinks from './data';
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text.toLowerCase());
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

//export { AppContext, AppProvider };
export { AppContext };



// import React, { useState, useContext } from 'react'
// import sublinks from './data'

// const AppContext = React.createContext();

// // Import AppProvider in INDEX.JS !!!!
// export const AppProvider = ({ children }) => {
//     const [isSidebarOpen, setSidebarOpen] = useState(false);
//     const [isSubmenuOpen, setSubmenuOpen] = useState(false);
//     const [location, setLocation] = useState({});
//     const [page, setPage] = useState({page:'', links: []});

//     const openSidebar = () => {
//         setSidebarOpen(true);
//     }
//     const closeSidebar = () => {
//         setSidebarOpen(false);
//     }
//     const openSubmenu = (text, coordinates) => {
//         const page = sublinks.find((link)=> link.page === text.toLowerCase());
//         setPage(page);
//         setLocation(coordinates);
//         setSubmenuOpen(true);
//     }
//     const closeSubmenu = () => {
//         setSubmenuOpen(false);
//     }

//     return (
//         <AppContext.Provider value={{
//             isSubmenuOpen,
//             isSidebarOpen,
//             openSubmenu,
//             closeSubmenu,
//             openSidebar,
//             closeSidebar,
//             location,
//             page,
//             }}>
//             {children}
//         </AppContext.Provider>)

// }

// //custom hook + export AppProvider ( look the BEGINNING of the function)
// export const useGlobalContext= () => {
//     return useContext(AppContext);
// }

