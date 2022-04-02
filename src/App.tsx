import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Themes } from './interfaces';
import { PictureOfDay } from './page/PictureOfDay';


const App = () => {

  useEffect(() => {
    let theme = window.localStorage.getItem("theme");
    if (theme == "light" || theme === "dark") {
      setTheme(theme);
    } else {
      window.localStorage.setItem("theme", "light");
    }
  }, [])

  const [theme, setTheme] = useState<Themes>("light");
  console.log(theme);
  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      <PictureOfDay />
    </ThemeContext.Provider>
  );
}

export default App;
