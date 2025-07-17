import React from "react";
import { createContext, useState, useContext } from "react";

export const themeAppContext = createContext();

//export function useTheme(){
//    return useContext(themeAppContext);
//}

export default function themeContext (props) {
    const [theme, setTheme]=useState('light');

    return(
        <themeAppContext.Provider value={{setTheme, theme}}>
            {props.children}
        </themeAppContext.Provider>
    )
}