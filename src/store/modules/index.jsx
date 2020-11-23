import { combineReducers } from "redux";
import boxWidth from "store/modules/boxWidth";
import boxHeight from "store/modules/boxHeight";
import frameIndex from "store/modules/frameIndex";
import createIndex from "store/modules/createIndex";

export default combineReducers({
  boxWidth,
  boxHeight,
  frameIndex,
  createIndex
});
