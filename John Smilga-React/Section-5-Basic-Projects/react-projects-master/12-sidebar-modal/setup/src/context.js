import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => { // It is very important to add children here!!!!!
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }


    return (
        <AppContext.Provider value={{
            isModalOpen,
            isSidebarOpen,
            openModal,
            openSidebar,
            closeModal,
            closeSidebar
        }}> 
        {children}</AppContext.Provider>
    )
}

//custom hook always start with "use"
export const useGlobalContext = () => {
    return useContext(AppContext);
}

// we also can use this instead custom hook:
export { AppContext, AppProvider }