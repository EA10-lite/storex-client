import React, { createContext, useState, useEffect } from 'react';

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
    const open_sidebar = () => {
        document.querySelector("#sidebar").style.minWidth = "265px"
    };

    const close_sidebar = () => {
        document.querySelector("#sidebar").style.minWidth = "0px"
    }

    const [ width, set_width ] = useState(undefined);
    const handle_width_change = () => set_width(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize', handle_width_change);
        return () => window.removeEventListener('resize', handle_width_change);
    },[])

    
    useEffect(()=> {
        if (width >= 1440){
            document.querySelector("#sidebar").style.width = "18.4vw"
        }
        else if(width >= 756){
            document.querySelector("#sidebar").style.width = "265px"
        }
        else if(width < 756) {
            document.querySelector('#sidebar').style.width = "0px"
        }
    },[width])

    return (
        <SidebarContext.Provider value={{open_sidebar, close_sidebar}}>
            { children }
        </SidebarContext.Provider>
    )
}