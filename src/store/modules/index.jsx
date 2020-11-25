import { combineReducers } from "redux";
import boxState from "store/modules/boxState";
import frameIndex from "store/modules/frameIndex";
import createIndex from "store/modules/createIndex";
import modalState from "store/modules/modalState";

export default combineReducers({
  boxState,
  frameIndex,
  createIndex,
  modalState
});
