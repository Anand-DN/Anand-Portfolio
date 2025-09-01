import { createContext, useContext } from "react";
import { useTheme as useThemeHook } from './hooks/useTheme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { theme, setTheme, resolvedTheme } = useThemeHook();

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
