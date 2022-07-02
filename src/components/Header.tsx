import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import moment from 'moment';
import styles from '../styles/lightStyles.module.css';
import handleBlackImage from '../assets/drag_handle_black_24dp.svg';
import handleWhiteImage from '../assets/drag_handle_white_24dp.svg';

interface HeaderProps {
    currentDate?: string,
    showMenu: (e:any) => void 
}

export const Header = ({ currentDate, showMenu }: HeaderProps) => {
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
                        onClick={ showMenu }
                        src={ handleWhiteImage }
                        alt="menu"
                    />
                }
                {
                    theme === "light" &&
                    < img
                        className={styles.menuIcon}
                        onClick={ showMenu }
                        src={handleBlackImage}
                        alt="menu"
                    />
                }
            </section>
        </header>
    );
}