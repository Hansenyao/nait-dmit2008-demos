import React from 'react'
import { createContext,useState,useContext } from 'react';

export const themeAppContext=createContext({});

export function useTheme() {
  const context = useContext(themeAppContext)
  if (!context) {
    throw new Error(`problem on theme context`)
  }
  return context
}

export function ThemeSwitcherContext(props) {
    const [appTheme,setAppTheme]=useState("light");
  return (
    <themeAppContext.Provider value={{setAppTheme,appTheme}}>
        {props.children}
    </themeAppContext.Provider>
  )
}
