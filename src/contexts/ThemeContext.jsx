import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState('light')
    console.log(`Theme mode: ${theme}`)

    const toggleTheme = () => {
        setTheme(prev=> (prev === 'light' ? 'dark' : 'light'))
        console.log(`Theme mode: ${theme}`)
    }

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        console.log(root.getAttribute('data-theme'))
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}