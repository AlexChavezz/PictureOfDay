import styles from '../styles/lightStyles.module.css';
import closeDarkButton from '../assets/close_black_24dp.svg';
import closeLightButton from '../assets/close_white_24dp.svg';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';


interface MenuProps {
    closeMenu: () => void
}

export const Menu = ({ closeMenu }: MenuProps) => {
    const { theme } = useContext(ThemeContext);
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
                <header>

                </header>
                <footer
                    className={styles.menuFooter}
                >
                    <button
                        className={theme === "light"? styles.menuThemeButton: styles.menuThemeButton + " " + styles.menuDarkButton}
                    >
                        Dark Mode
                    </button>
                    <button
                        className={theme === "light"? styles.menuThemeButton: styles.menuThemeButton + " " + styles.menuDarkButton}
                        >
                        Light Mode
                    </button>
                </footer>
            </article>
        </section>
    );
}