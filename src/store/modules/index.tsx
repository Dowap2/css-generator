import { combineReducers } from "redux";
import boxState from "store/modules/boxState";
import modalState from "store/modules/modalState";
import modeState from "store/modules/modeState";
import userState from "store/modules/userState";
import frameState from "store/modules/frameState";
import languageState from "store/modules/languageState";

export default combineReducers({
  boxState,
  modalState,
  modeState,
  userState,
  frameState,
  languageState
});
