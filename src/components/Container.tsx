import { ReactElement } from "react";
import lightStyles from '../styles/lightStyles.module.css';

interface ContainerProps {
    children: ReactElement | ReactElement[]
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <section
            className={lightStyles.container}
        >
            {
                children
            }
        </section>
    );
}