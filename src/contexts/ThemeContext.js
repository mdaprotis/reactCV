import React, { createContext, useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { AppTheme } from "./types";
import { AppThemeOptions } from "./theme";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(AppTheme.DARK);
  const test = 3;
  const muiTheme = createMuiTheme(AppThemeOptions[theme]);
  const toggleTheme = () => {
    setTheme(theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT);
  };
  return (
    <ThemeContext.Provider value={{ test, theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

/*import React, { createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const test = "probando";
  return (
    <ThemeContext.Provider value={{ test }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;*/
