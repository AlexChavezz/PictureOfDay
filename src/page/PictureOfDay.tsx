import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { Themes, Data } from '../interfaces';
import { getPictureFromDate } from '../helpers/getPictureFromDate';
import { Header } from '../components/Header';
import { Container } from '../components/Container';
import lightStyles from '../styles/lightStyles.module.css';
import { Button } from '../components/Button';
import { Menu } from '../components/Menu';
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/lightStyles.module.css';

export const PictureOfDay = () => {
  const [currentDate, setCurrentDate] = useState<string>(moment().format());
  const [currentData, setCurrentData] = useState<Data | null>(null);
  const [menu, setMenu] = useState(false);
  const dateRef = useRef(currentDate);
  useEffect(() => {
    getPictureFromDate(currentDate).then(response => setCurrentData(response))
  }, [currentDate, setCurrentDate])
  // -> Get current theme
  const { theme } = useContext(ThemeContext);
  function getBefore() {
    setCurrentDate(moment(currentDate).subtract(1, 'day').format());
  }

  function getAfter() {
    setCurrentDate(moment(currentDate).add(1, 'day').format());
  }
  //  -> Function to open menu
  function openMenu(){
    setMenu( true );
  }
  //  -> function to close menu
  const handleCloseMenu = () => {
    setMenu( false);
  }
  console.log(theme)
  if (!currentData) {
    return <>Loading</>
  }
  return (
    <div
      className={theme === "dark" ? styles.dark : ""}
    >
      <Header
        currentDate={currentDate}
        handleCloseMenu={handleCloseMenu}
        openMenu={openMenu}
      />
      <Container>
        <article
          className={lightStyles.mainInfo}
        >
          <img src={currentData.url} alt={currentData.title} title={currentData.title} />
          <div
            className={lightStyles.description}
          >
            <h3 className={lightStyles.title}>{currentData.title}</h3>
            <p className={lightStyles.explanation}>{currentData.explanation}</p>
            <p className={lightStyles.copyright}>{currentData.copyright}</p>
          </div>
        </article>
        <div className={lightStyles.btnContainer}>
          <Button
            value="<-- Previous"
            onClick={getBefore}
            className={lightStyles.btn}
          />
          <Button
            value="Next -->"
            onClick={getAfter}
            className={lightStyles.btn}
            disabled={currentDate === dateRef.current ? true : false}
          />
        </div>
      </Container>

      {
        menu &&
        <Menu 
        handleCloseMenu={handleCloseMenu}
        />
      }
    </div>
  );
}
