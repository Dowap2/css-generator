import { combineReducers } from "redux";
import boxState from "store/modules/boxState";
import indexState from "store/modules/indexState";
import modalState from "store/modules/modalState";

export default combineReducers({
  boxState,
  indexState,
  modalState
});
