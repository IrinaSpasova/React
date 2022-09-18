import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

// Import AppProvider in INDEX.JS !!!!
export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isSubmenuOpen, setSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:'', links: []});

    const openSidebar = () => {
        setSidebarOpen(true);
    }
    const closeSidebar = () => {
        setSidebarOpen(false);
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link)=> link.page === text);
        setLocation(coordinates);
        setSubmenuOpen(true);
    }
    const closeSubmenu = () => {
        setSubmenuOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isSubmenuOpen,
            isSidebarOpen,
            openSubmenu,
            closeSubmenu,
            openSidebar,
            closeSidebar,
            location,
            }}>
            {children}
        </AppContext.Provider>)

}

//custom hook + export AppProvider ( look the BEGINNING of the function)
export const useGlobalContext= () => {
    return useContext(AppContext);
}

