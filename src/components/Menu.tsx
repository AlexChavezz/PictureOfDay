import styles from '../styles/lightStyles.module.css';

interface MenuProps {
    handleCloseMenu: () => void 
}

export const Menu = ({handleCloseMenu}:MenuProps) => {
    return (
        <section
            className={ styles.menuContainer }
            onClick={handleCloseMenu}
        >
            <article
                className={ styles.menu }
            >
                <header>

                </header>
                <footer>
                    
                </footer>
            </article>
        </section>
    );
}