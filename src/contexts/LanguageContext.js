import React, { createContext, useState } from "react";
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage,
} from "react-switch-lang";
import EN from "../lang_source/EN.json";
import SP from "../lang_source/SP.json";

setTranslations({ EN, SP });
setDefaultLanguage("SP");

setLanguageCookie();

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {
  const [lang, setLanguageType] = useState("EN");
  const handleClickLang = (e) => {
    console.log("click lang", lang);
    setLanguageType(lang === "SP" ? "EN" : "SP");
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ handleClickLang }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
