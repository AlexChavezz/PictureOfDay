import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

type useTheme = [ theme: string , activeDarkMode: ()=> void, activeLightMode: ()=> void,  ];

export const useTheme = ():useTheme => {
    const { theme, setTheme } = useContext(ThemeContext);
    function activeLightMode() {
        setTheme("light");
        window.localStorage.setItem("theme", "light");
    }
    function activeDarkMode() {
        setTheme("dark");
        window.localStorage.setItem("theme", "dark");
    }
    return [ theme, activeDarkMode, activeLightMode ];
}
