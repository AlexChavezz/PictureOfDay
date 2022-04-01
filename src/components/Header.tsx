import moment from 'moment';
import styles from '../styles/lightStyles.module.css';
import handleBlackImage from '../assets/drag_handle_black_24dp.svg';
import handleWhiteImage from '../assets/drag_handle_white_24dp.svg';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

interface HeaderProps {
    currentDate: string,
    handleCloseMenu: () => void,
    openMenu: () => void 
}

export const Header = ({ currentDate, openMenu }: HeaderProps) => {

    const { theme } = useContext(ThemeContext);

    return (
        <header
            className={theme === "light" ? styles.head : styles.head + " " + styles.dark}
        >
            {moment(currentDate).format("LL")}
            <section
                className={styles.menuIconContainer}
            >
                {
                    theme === "dark" &&
                    < img
                        className={styles.menuIcon}
                        onClick={ openMenu }
                        src={handleWhiteImage}
                        alt="menu"
                    />
                }
                {
                    theme === "light" &&
                    < img
                        className={styles.menuIcon}
                        onClick={ openMenu }
                        src={handleBlackImage}
                        alt="menu"
                    />
                }
            </section>
        </header>
    );
}