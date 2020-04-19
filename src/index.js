import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";

const Root = () => {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
