import { createAction } from "redux-actions";

const BOXWIDTH = "box/BOXWIDTH";
const BOXHEIGHT = "box/BOXHEIGHT";
const BORDERWIDTH = "box/BORDERWIDTH";
const BORDERSTYLE = "box/BORDERSTYLE";
const BORDERCOLOR = "box/BORDERCOLOR";
const BOXCOLOR = "box/BOXCOLOR";
const BOXCOLORTYPE = "box/BOXCOLORTYPE";

export const ChangeBoxWidth = createAction(BOXWIDTH);
export const ChangeBoxHeight = createAction(BOXHEIGHT);
export const ChangeBorderWidth = createAction(BORDERWIDTH);
export const ChangeBorderStyle = createAction(BORDERSTYLE);
export const ChangeBorderColor = createAction(BORDERCOLOR);
export const ChangeColorType = createAction(BOXCOLORTYPE);
export const ChangeBoxColor = createAction(BOXCOLOR);

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
      color2: "#ffffff"
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
    default:
      return state;
  }
}
