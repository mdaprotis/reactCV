import React, { createContext, useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { AppTheme } from "../theme_source/types";
import { AppThemeOptions } from "../theme_source/theme";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(AppTheme.DARK);
  const muiTheme = createMuiTheme(AppThemeOptions[theme]);
  const toggleTheme = () => {
    setTheme(theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
