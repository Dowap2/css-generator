import React from "react";
import moment from "moment";
import ChangeLanguageContainer from "containers/ChangeLanguageContainer";

export function ClockComponent(props) {
  const date = moment().format("MM-DD-YYYY");
  return (
    <div>
      {date}
      <ChangeLanguageContainer />
    </div>
  );
}
