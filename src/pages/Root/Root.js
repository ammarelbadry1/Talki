import styles from './styles.module.css';
import { useState } from 'react';

export function Layout() {
  const {
    app,
    lightTheme,
    darkTheme,
  } = styles;
  const [ theme, setTheme ] = useState(lightTheme);

  const handleTheme = () => {
    theme === lightTheme
      ? setTheme(darkTheme)
      : setTheme(lightTheme);
  }
  return (
    <div className={`${app} ${theme}`}>

    </div>
  );
}
