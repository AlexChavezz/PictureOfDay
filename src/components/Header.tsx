import moment from 'moment';
import styles from '../styles/lightStyles.module.css';
interface HeaderProps {
    currentDate: string, 
}

export const Header = ({ currentDate }:HeaderProps) => {
    return (
        <header
            className={ styles.head }
        >
            {moment(currentDate).format('LLLL')}
        </header>
    );
}