import React from 'react';
import { PhraseOfTheDay } from './PhraseOfTheDay';
import closeDarkButton from '../assets/close_black_24dp.svg';
import closeLightButton from '../assets/close_white_24dp.svg';
import styles from '../styles/lightStyles.module.css';
import { useTheme } from '../hooks/useTheme';
import { Form } from './Form';

interface MenuProps {
    hiddeMenu: () => void,
    setCurrentDate: React.Dispatch<React.SetStateAction<string>>
}

export const Menu = ({ hiddeMenu, setCurrentDate }: MenuProps) => {
    const [theme, activeDarkMode, activeLightMode] = useTheme();
    // function onSubmit(e: React.FormEvent) {
    //     e.preventDefault();
    //     console.log('onsubmit')
    // }
    return (
        <section
            className={styles.menuContainer}
        >
            <article
                className={styles.menuIconContainer}
                onClick={() => hiddeMenu()}
            >
                <img
                    className={styles.menuIcon}
                    src={theme === "dark" ? closeLightButton : closeDarkButton}
                    alt="image-menu"
                />
            </article>
            <article
                className={theme === "light" ? styles.menu : styles.menu + " " + styles.dark}
            >
                <header
                    className={styles.menuHeader}
                >
                    <PhraseOfTheDay />
                </header>
                <section>
                    <article
                        className={styles.menuMainContent}
                    >
                        Do you want search for specific date?
                        <Form
                            inputClassName={styles.textField}
                            setCurrentDate={setCurrentDate}
                        />
                    </article>
                </section>
                <footer
                    className={styles.menuFooter}
                >
                    <article>
                    <button
                        onClick={activeDarkMode}
                        className={theme === "light" ? styles.menuThemeButton : styles.menuThemeButton + " " + styles.menuDarkButton}
                    >
                        Dark Mode
                    </button>
                    <button
                        onClick={activeLightMode}
                        className={theme === "light" ? styles.menuThemeButton : styles.menuThemeButton + " " + styles.menuDarkButton}
                    >
                        Light Mode
                    </button>
                    </article>
                    <span className={styles.textAuthor}>Developed by alexis chavez</span>
                </footer>
            </article>
        </section>
    );
}