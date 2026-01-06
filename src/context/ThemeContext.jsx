import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [Theme, setTheme] = useState('LightMode');
    const handleTheme = () => {
        setTheme((state) => (state === 'LightMode' ? 'DarkMode' : 'LightMode'))
    }
       
    const data = {Theme, handleTheme}

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}
