import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import ChangeLanguageContainer from "containers/ChangeLanguageContainer";

export function ClockComponent(props) {
  const language = useSelector(state => state.languageState.state.language);
  const [format, setFormat] = useState(moment().locale("en"));
  const [date, setDate] = useState("");

  useEffect(() => {
    language === "en"
      ? setFormat(moment().locale("en"))
      : setFormat(moment().locale("ko"));
  }, [language]);

  setInterval(() => {
    setDate(format.format("LTS"));
  }, 1000);

  return (
    <div>
      {date}
      <ChangeLanguageContainer />
    </div>
  );
}
