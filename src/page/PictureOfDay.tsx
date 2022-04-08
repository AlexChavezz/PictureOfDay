import { useContext, useEffect, useRef, useState } from 'react';
import { getPictureFromDate } from '../helpers/getPictureFromDate';
import { Header, Container, Button, Menu } from '../components';
import { ThemeContext } from '../context/ThemeContext';
import { useMenu } from '../hooks';
import { Data } from '../interfaces';
import { MainContent } from './MainContent';
import styles from '../styles/lightStyles.module.css';
import { useDate } from '../hooks/useDate';

export const PictureOfDay = () => {

  const { theme } = useContext(ThemeContext);
  const [menu, openMenu, closeMenu] = useMenu();
  const [currentData, setCurrentData] = useState<Data | null>(null);
  const { currentDate, getAfter, getBefore, setCurrentDate } = useDate();

  const dateRef = useRef(currentDate);

  useEffect(() => {
    getPictureFromDate(currentDate).then(response => setCurrentData(response));
  }, [currentDate, setCurrentDate])

  if (!currentData) {
    return <>Loading</>
  }
  return (
    <div
      className={theme === "dark" ? styles.dark : ""}
    >
      <Header
        currentDate={currentDate}
        closeMenu={closeMenu}
        openMenu={openMenu}
      />
      <Container>
        <MainContent currentData={currentData} />
        <div className={styles.btnContainer}>
          <Button
            value="<-- Previous"
            onClick={getBefore}
            className={styles.btn}
          />
          <Button
            value="Next -->"
            onClick={getAfter}
            className={styles.btn}
            disabled={currentDate === dateRef.current ? true : false}
          />
        </div>
      </Container>

      {
        menu &&
        <Menu
          closeMenu={closeMenu}
          setCurrentDate={setCurrentDate}
        />
      }
    </div>
  );
}

