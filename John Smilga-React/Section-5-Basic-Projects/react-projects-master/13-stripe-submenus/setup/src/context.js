import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

// Import AppProvider in INDEX.JS !!!!
export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isSubmenuOpen, setSubmenuOpen] = useState(true);

    const openSidebar = () => {
        setSidebarOpen(true);
    }
    const closeSidebar = () => {
        setSidebarOpen(false);
    }
    const openSubmenu = () => {
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
            closeSidebar}}>
            {children}
        </AppContext.Provider>)

}

//custom hook + export AppProvider ( look the BEGINNING of the function)
export const useGlobalContext= () => {
    return useContext(AppContext);
}

