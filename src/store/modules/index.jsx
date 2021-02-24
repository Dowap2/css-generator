import { combineReducers } from "redux";
import boxState from "store/modules/boxState";
import indexState from "store/modules/indexState";
import modalState from "store/modules/modalState";
import userState from "store/modules/userState";
import modeState from "store/modules/modeState";

export default combineReducers({
  boxState,
  indexState,
  modalState,
  userState,
  modeState
});
