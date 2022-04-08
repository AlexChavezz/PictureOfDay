import { Data } from '../interfaces';
import styles from '../styles/lightStyles.module.css';


interface MainContent {
    currentData: Data
}

export const MainContent = ({ currentData }: MainContent) => {
    return (
        <main
            className={styles.mainInfo}
        >
            <img src={currentData.url} alt={currentData.title} title={currentData.title} />
            <div
                className={styles.description}
            >
                <h3 className={styles.title}>{currentData.title}</h3>
                <p className={styles.explanation}>{currentData.explanation}</p>
                <p className={styles.copyright}>{currentData.copyright}</p>
            </div>
        </main>
    );
}
