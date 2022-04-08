import React, { ReactElement } from 'react';
import { PhraseOfTheDay } from './PhraseOfTheDay';
import closeDarkButton from '../assets/close_black_24dp.svg';
import closeLightButton from '../assets/close_white_24dp.svg';
import styles from '../styles/lightStyles.module.css';
import { useTheme } from '../hooks/useTheme';
import moment from 'moment';
import { Form } from './Form';

interface MenuProps {
    closeMenu: () => void
    setCurrentDate:  React.Dispatch<React.SetStateAction<string>>
}

export const Menu = ({ closeMenu, setCurrentDate }: MenuProps) => {
    const [theme, activeDarkMode, activeLightMode] = useTheme();
    function onSubmit(e:React.FormEvent){
            e.preventDefault();
            console.log('onsubmit')
    }
    return (
        <section
            className={styles.menuContainer}
        >
            <article
                className={styles.menuIconContainer}
                onClick={closeMenu}
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
                        Wants you search a specific date?
                        {/* <Form
                            className={styles.menuMainContentForm}
                        >
                            <input
                                type="number"
                                className={styles.textField}
                                placeholder="YYYY"
                            />
                            <input
                                type="number"
                                className={styles.textField}
                                placeholder="MM"
                            />
                            <input
                                type="number"
                                className={styles.textField}
                                placeholder="DD"
                                minLength={2}
                                maxLength={2}
                                max={2}
                                min={2}
                            />
                            <input type="submit" className={styles.btn} value="Find up" onClick={(e)=> { e.preventDefault(); setCurrentDate( moment().date(6).month(3).year(2001).format())}}/>
                        </Form> */}
                        <Form 
                            onSubmit={ onSubmit }
                            inputClassName={ styles.textField }
                        />
                    </article>
                    <article>
                    </article>
                </section>
                <footer
                    className={styles.menuFooter}
                >
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
                </footer>
            </article>
        </section>
    );
}