"use client"
import {createContext, useContext} from 'react'

function ThemeProvider({ children }) {
  const ThemeContext = createContext();

  return (
    <div className="bg-light-background text-light-foreground dark:bg-dark-background dark:text-dark-foreground bg-bgSize bg-gridBg">
      <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
    </div>
  );
}

export default ThemeProvider

export function useTheme() {
    useContext(ThemeContext);
}
