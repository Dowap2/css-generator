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
    }
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
    default:
      return state;
  }
}
