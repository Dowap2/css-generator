import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import en from "locale/en";
import ko from "locale/ko";
import moment from "moment";
import "moment/locale/ko";

export default function SelectedIntlProvider({ children }) {
  const language = useSelector(state => state.languageState.state.language);

  const message = language === "en" ? en : ko;

  useEffect(() => {
    if (language === "ko") {
      moment.updateLocale("ko", {
        format: {
          LLLL: "dddd, MM Do YYYY"
        }
      });
      moment.locale("ko");
      return;
    }
    moment.updateLocale("en", {
      format: {
        LLLL: "dddd, MM Do YYYY"
      }
    });
    moment.locale("en");
  }, [language]);

  return (
    <IntlProvider locale={language} messages={message} children={children} />
  );
}
