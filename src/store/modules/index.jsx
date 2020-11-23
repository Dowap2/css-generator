import { combineReducers } from "redux";
import boxWidth from "store/modules/boxWidth";
import boxHeight from "store/modules/boxHeight";
import indexValue from "store/modules/indexValue";

export default combineReducers({
  boxWidth,
  boxHeight,
  indexValue
});
