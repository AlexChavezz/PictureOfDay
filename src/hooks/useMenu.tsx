import { useState } from 'react';

type useMenu = [menu: boolean, openMenu: () => void, closeMenu: () => void ]

export const useMenu = ():useMenu => {
    const [menu, setMenu] = useState(false);
    //  -> Function to open menu
    function openMenu() {
        setMenu(true);
    }
    //  -> function to close menu
    const closeMenu = () => {
        setMenu(false);
    }
    return [ menu, openMenu, closeMenu ];
}