import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import en from "locale/en";
import ko from "locale/ko";
import "moment/locale/ko";

export default function SelectedIntlProvider({ children }) {
  const language = useSelector(state => state.languageState.state.language);
  const message = language === "en" ? en : ko;

  return (
    <IntlProvider locale={language} messages={message} children={children} />
  );
}
