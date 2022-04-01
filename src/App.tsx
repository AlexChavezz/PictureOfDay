import moment from 'moment';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { getPictureFromDate } from './helpers/getPictureFromDate';
import styles from './styles/lightStyles.module.css';
type Themes = "dark" | "light";


interface Data {
  title: string, 
  url: string, 
  explanation: string, 
  copyright: string,
}


const App = () => {

  const [currentDate, setCurrentDate] = useState<string>(moment().format());
  const [theme, setTheme] = useState<Themes>("light");
  const [currentData, setCurrentData] = useState<Data | null>(null);
  const dateRef = useRef(currentDate);
  useEffect(() => {
    getPictureFromDate(currentDate).then(response => setCurrentData(response))
  }, [currentDate, setCurrentDate])

  function getBefore() {
    setCurrentDate(moment(currentDate).subtract(1, 'day').format());
  }

  function getAfter() {
    setCurrentDate(moment(currentDate).add(1, 'day').format());
  }
  console.log(currentData)
  if (!currentData) {
    return <>Loading</>
  }
  return (
    <>

      <Header
        currentDate={currentDate}
      />
      <Container>
        <article
          className={ styles.mainInfo }
        >
          <img src={currentData.url} alt={currentData.title} title={currentData.title} />
          <div
            className={ styles.description }
          >
            <h3 className={ styles.title }>{currentData.title}</h3>
            <p className={ styles.explanation }>{ currentData.explanation }</p>
            <p className={ styles.copyright }>{ currentData.copyright }</p>
          </div>
        </article>
        <div className={ styles.btnContainer }>
          <Button
            value="<-- Previous"
            onClick={getBefore}
            className={styles.btn}
          />
          <Button
            value="Next -->"
            onClick={getAfter}
            className={styles.btn}
            disabled={ currentDate === dateRef.current? true : false }
          />
        </div>
      </Container>
    </>
  );
}

export default App;

interface ContainerProps {
  children: ReactElement | ReactElement[]
}

const Container = ({ children }: ContainerProps) => {
  return (
    <section
      className={styles.container}
    >
      {
        children
      }
    </section>
  );
}