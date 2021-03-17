import { createAction } from "redux-actions";

const CHANGEFRAME1 = "box/frame1";
const CHANGEFRAME2 = "box/frame2";
const CHANGEFRAME3 = "box/frame3";
const CHANGEFRAME4 = "box/frame4";
const CHANGEFRAME5 = "box/frame5";

export const ChangeFrame1 = createAction(CHANGEFRAME1);
const state = {
  boxWidth: 500,
  boxHeight: 500,
  borderWidth: 5,
  borderRadiusTopLeft: 0,
  borderRadiusTopRight: 0,
  borderRadiusBottomLeft: 0,
  borderRadiusBottomRight: 0,
  borderStyle: "solid",
  borderColor: "#000000",
  colorType: "color",
  boxColor: "#ffffff",
  color1: "#000000",
  color2: "#ffffff",
  gradientStyle: "to top",
  deg: null,
  transformX: 1,
  transformY: 1,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  text: "basic text",
  textColor: "#000000",
  textStyle: "left",
  fontSize: 12,
  shadowX: 0,
  shadowY: 0,
  shadowColor: "#fff"
};

const initialState = {
  frame1: { state },
  frame2: { state },
  frame3: { state },
  frame4: { state },
  frame5: { state }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGEFRAME1:
      return {
        state: Object.assign(state.state, { frame1: action.payload })
      };
    case CHANGEFRAME2:
      return {
        state: Object.assign(state.state, { frame2: action.payload })
      };
    case CHANGEFRAME3:
      return {
        state: Object.assign(state.state, { frame3: action.payload })
      };
    case CHANGEFRAME4:
      return {
        state: Object.assign(state.state, { frame4: action.payload })
      };
    case CHANGEFRAME5:
      return {
        state: Object.assign(state.state, { frame5: action.payload })
      };
    default:
      return state;
  }
}
