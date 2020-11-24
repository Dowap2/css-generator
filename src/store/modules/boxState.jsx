import { createAction } from "redux-actions";

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
const BOXTARNSFORMX = "box/BOXTARNSFORMX";
const BOXTARNSFORMY = "box/BOXTARNSFORMY";
const BOXROTATEX = "box/BOXROTATEX";
const BOXROTATEY = "box/BOXROTATEY";
const BOXROTATEZ = "box/BOXROTATEZ";

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
export const ChangeBoxTransformX = createAction(BOXTARNSFORMX);
export const ChangeBoxTransformY = createAction(BOXTARNSFORMY);
export const ChangeBoxRotateX = createAction(BOXROTATEX);
export const ChangeBoxRotateY = createAction(BOXROTATEY);
export const ChangeBoxRotateZ = createAction(BOXROTATEZ);

const initialState = {
  state: {
    boxWidth: 500,
    boxHeight: 500,
    borderWidth: 5,
    borderStyle: "soild",
    borderColor: "#000000",
    colorType: "color",
    boxColor: "#ffffff",
    boxGradient: {
      color1: "#000000",
      color2: "#ffffff",
      gradientStyle: "to top"
    },
    transformX: 1,
    transformY: 1,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BOXWIDTH:
      return { ...state, boxWidth: action.payload };
    case BOXHEIGHT:
      return { ...state, boxHeight: action.payload };
    case BORDERWIDTH:
      return { ...state, borderWidth: action.payload };
    case BORDERSTYLE:
      return { ...state, borderStyle: action.payload };
    case BORDERCOLOR:
      return { ...state, borderColor: action.payload };
    case BOXCOLORTYPE:
      return { ...state, colorType: action.payload };
    case BOXCOLOR:
      return { ...state, boxColor: action.payload };
    case BOXGRADIENTCOLOR1:
      return { ...state, color1: action.payload };
    case BOXGRADIENTCOLOR2:
      return { ...state, color2: action.payload };
    case BOXGRADIENTSTYLE:
      return { ...state, gradientStyle: action.payload };
    case BOXTARNSFORMX:
      return { ...state, transformX: action.payload };
    case BOXTARNSFORMY:
      return { ...state, transformY: action.payload };
    case BOXROTATEX:
      return { ...state, rotateX: action.payload };
    case BOXROTATEY:
      return { ...state, rotateY: action.payload };
    case BOXROTATEZ:
      return { ...state, rotateZ: action.payload };
    default:
      return state;
  }
}
