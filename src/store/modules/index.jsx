import { combineReducers } from "redux";
import boxState from "store/modules/boxState";
import frameIndex from "store/modules/frameIndex";
import createIndex from "store/modules/createIndex";

export default combineReducers({
  boxState,
  frameIndex,
  createIndex
});
