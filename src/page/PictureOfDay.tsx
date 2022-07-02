import { useContext, useEffect, useRef, useState } from 'react';
import { getPictureFromDate } from '../helpers/getPictureFromDate';
import { Header, Container, Button, Menu } from '../components';
import { ThemeContext } from '../context/ThemeContext';
import { Data } from '../interfaces';
import { MainContent } from './MainContent';
import styles from '../styles/lightStyles.module.css';
import { useDate } from '../hooks/useDate';

export const PictureOfDay = () => {

  const { theme } = useContext(ThemeContext);
  const [menu, setMenu] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<Data | null>(null);
  const {currentDate, getAfter, getBefore, setCurrentDate } = useDate();
  function hiddeMenu(){
      setMenu(false);
  }
  function showMenu(){
    setMenu(true);
  }
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
        showMenu={showMenu}
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
        hiddeMenu={hiddeMenu}
        setCurrentDate={setCurrentDate}
        />
      }
    </div>
  );
}

