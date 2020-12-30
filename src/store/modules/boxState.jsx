import { createAction } from "redux-actions";

const STATE = "box/STATE";
const BOXWIDTH = "box/BOXWIDTH";
const BOXHEIGHT = "box/BOXHEIGHT";
const BORDERWIDTH = "box/BORDERWIDTH";
const BORDERSTYLE = "box/BORDERSTYLE";
const BORDERCOLOR = "box/BORDERCOLOR";
const BOXCOLOR = "box/BOXCOLOR";
const BOXCOLORTYPE = "box/BOXCOLORTYPE";
const BOXGRADIENTCOLOR1 = "box/BOXGRADIENTCOLOR1";
const BOXGRADIENTCOLOR2 = "box/BOXGRADIENTCOLOR2";
const BOXGRADIENTSTYLE = "box/BOXGRADIENTSTYLE";
const BOXGRADIENTDEG = "box/BOXGRADIENTDEG";
const BOXTARNSFORMX = "box/BOXTARNSFORMX";
const BOXTARNSFORMY = "box/BOXTARNSFORMY";
const BOXROTATEX = "box/BOXROTATEX";
const BOXROTATEY = "box/BOXROTATEY";
const BOXROTATEZ = "box/BOXROTATEZ";
const BOXTEXT = "box/BOXTEXT";
const BOXTEXTSTYLE = "box/BOXTEXTSTYLE";
const BOXTEXTCOLOR = "box/BOXTEXTCOLOR";
const BOXFONTSIZE = "box/BOXFONTSIZE";

export const ChangeState = createAction(STATE);
export const ChangeBoxWidth = createAction(BOXWIDTH);
export const ChangeBoxHeight = createAction(BOXHEIGHT);
export const ChangeBorderWidth = createAction(BORDERWIDTH);
export const ChangeBorderStyle = createAction(BORDERSTYLE);
export const ChangeBorderColor = createAction(BORDERCOLOR);
export const ChangeColorType = createAction(BOXCOLORTYPE);
export const ChangeBoxColor = createAction(BOXCOLOR);
export const ChangeBoxGradientColor1 = createAction(BOXGRADIENTCOLOR1);
export const ChangeBoxGradientColor2 = createAction(BOXGRADIENTCOLOR2);
export const ChangeBoxGradientStyle = createAction(BOXGRADIENTSTYLE);
export const ChangeBoxGradientDeg = createAction(BOXGRADIENTDEG);
export const ChangeBoxTransformX = createAction(BOXTARNSFORMX);
export const ChangeBoxTransformY = createAction(BOXTARNSFORMY);
export const ChangeBoxRotateX = createAction(BOXROTATEX);
export const ChangeBoxRotateY = createAction(BOXROTATEY);
export const ChangeBoxRotateZ = createAction(BOXROTATEZ);
export const ChangeBoxText = createAction(BOXTEXT);
export const ChangeBoxTextStyle = createAction(BOXTEXTSTYLE);
export const ChangeBoxTextColor = createAction(BOXTEXTCOLOR);
export const ChangeBoxFontSize = createAction(BOXFONTSIZE);

const initialState = {
  state: {
    boxWidth: 500,
    boxHeight: 500,
    borderWidth: 5,
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
    fontSize: 12
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STATE:
      return { state: action.payload };
    case BOXWIDTH:
      return {
        state: Object.assign(state.state, { boxWidth: action.payload })
      };
    case BOXHEIGHT:
      return {
        state: Object.assign(state.state, { boxHeight: action.payload })
      };
    case BORDERWIDTH:
      return {
        state: Object.assign(state.state, { borderWidth: action.payload })
      };
    case BORDERSTYLE:
      return {
        state: Object.assign(state.state, { borderStyle: action.payload })
      };
    case BORDERCOLOR:
      return {
        state: Object.assign(state.state, { borderColor: action.payload })
      };
    case BOXCOLORTYPE:
      return {
        state: Object.assign(state.state, { colorType: action.payload })
      };
    case BOXCOLOR:
      return {
        state: Object.assign(state.state, { boxColor: action.payload })
      };
    case BOXGRADIENTCOLOR1:
      return {
        state: Object.assign(state.state, { color1: action.payload })
      };
    case BOXGRADIENTCOLOR2:
      return {
        state: Object.assign(state.state, { color2: action.payload })
      };
    case BOXGRADIENTSTYLE:
      return {
        state: Object.assign(state.state, { gradientStyle: action.payload })
      };
    case BOXGRADIENTDEG:
      return {
        state: Object.assign(state.state, { deg: action.payload })
      };
    case BOXTARNSFORMX:
      return {
        state: Object.assign(state.state, { transformX: action.payload })
      };
    case BOXTARNSFORMY:
      return {
        state: Object.assign(state.state, { transformY: action.payload })
      };
    case BOXROTATEX:
      return {
        state: Object.assign(state.state, { rotateX: action.payload })
      };
    case BOXROTATEY:
      return {
        state: Object.assign(state.state, { rotateY: action.payload })
      };
    case BOXROTATEZ:
      return {
        state: Object.assign(state.state, { rotateZ: action.payload })
      };
    case BOXTEXT:
      return {
        state: Object.assign(state.state, { text: action.payload })
      };
    case BOXTEXTSTYLE:
      return {
        state: Object.assign(state.state, { textStyle: action.payload })
      };
    case BOXTEXTCOLOR:
      return {
        state: Object.assign(state.state, { textColor: action.payload })
      };
    case BOXFONTSIZE:
      return {
        state: Object.assign(state.state, { fontSize: action.payload })
      };
    default:
      return state;
  }
}
