import { createAction } from "redux-actions";

const ACTIVATION = "box/ACTIVATION";
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
  state: [
    {
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
        gradientStyle: "to top",
        deg: null
      },
      transformX: 1,
      transformY: 1,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      text: {
        text: "basic text",
        textColor: "#000000",
        textStyle: "left",
        fontSize: "12px"
      }
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BOXWIDTH:
      return { boxWidth: action.payload, ...state };
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
    case BOXGRADIENTDEG:
      return { ...state, deg: action.payload };
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
    case BOXTEXT:
      return { ...state, text: action.payload };
    case BOXTEXTSTYLE:
      return { ...state, textStyle: action.payload };
    case BOXTEXTCOLOR:
      return { ...state, textColor: action.payload };
    case BOXFONTSIZE:
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
}
