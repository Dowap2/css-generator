import { combineReducers } from "redux";
import boxState from "store/modules/boxState";
import modalState from "store/modules/modalState";
import userState from "store/modules/userState";
import modeState from "store/modules/modeState";
import frameState from "store/modules/frameState";

export default combineReducers({
  boxState,
  modalState,
  userState,
  modeState,
  frameState
});
