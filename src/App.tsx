import moment from 'moment';
import { useEffect, useState } from 'react';
import { getPictureFromDate } from './helpers/getPictureFromDate';

type Themes = "dark" | "light";

const App = () => {

  const [currentDate, setCurrentDate] = useState<string>(moment().format());
  const [ theme, setTheme ] = useState<Themes>("light");
  useEffect(() => {
    getPictureFromDate(currentDate).then(console.log)
    console.log(currentDate)
  }, [currentDate, setCurrentDate])

  function getBefore() {
    setCurrentDate(moment(currentDate).subtract(1, 'day').format());
  }

  function getAfter() {
    setCurrentDate(moment(currentDate).add(1, 'day').format());
  }

  return (
    <>
      <h1>Picture of day</h1>
      <button
        onClick={() => {
          setCurrentDate(moment(currentDate).subtract(1, 'day').format());
        }
        }
      >
        - 1
      </button>
      <button
        onClick={getAfter}
      >
        + 1
      </button>

    </>
  );
}

export default App;