import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";
import LanguageContextProvider from "./contexts/LanguageContext";

const Root = () => {
  return (
    <ThemeContextProvider>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </ThemeContextProvider>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
