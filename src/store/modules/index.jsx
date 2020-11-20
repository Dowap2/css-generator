import { combineReducers } from "redux";
import boxWidth from "store/modules/boxWidth";
import boxHeight from "store/modules/boxHeight";

export default combineReducers({
  boxWidth,
  boxHeight
});
