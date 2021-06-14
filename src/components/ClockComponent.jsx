import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import ChangeLanguageContainer from "containers/ChangeLanguageContainer";

export function ClockComponent(props) {
  const language = useSelector(state => state.languageState.state.language);
  const [date, setDate] = useState("");

  useEffect(() => {
    language === "en" ? moment.locale("en") : moment.locale("ko");
  }, [language]);

  setInterval(() => {
    setDate(moment().format("LTS"));
  }, 1000);

  return (
    <div>
      {date}
      <ChangeLanguageContainer />
    </div>
  );
}
