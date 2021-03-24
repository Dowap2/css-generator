import React from "react";
import { useSelector } from "react-redux";

import { ToggleButton } from "ui/Button";

export function ViewModeSwitchButtonComponent(props) {
  const viewMode = useSelector(state => state.modeState.viewMode);
  const value = viewMode === "light" ? "dark" : "light";
  return <ToggleButton onChange={props.onChange} value={value} />;
}
