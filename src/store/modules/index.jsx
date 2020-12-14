import { combineReducers } from "redux";
import boxState from "store/modules/boxState";
import indexState from "store/modules/indexState";
import modalState from "store/modules/modalState";
import userState from "store/modules/userState";

export default combineReducers({
  boxState,
  indexState,
  modalState,
  userState
});
