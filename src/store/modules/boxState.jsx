import { createAction } from "redux-actions";

const BOXWIDTH = "box/BOXWIDTH";
const BOXHEIGHT = "box/BOXHEIGHT";
const BORDERWIDTH = "box/BORDERWIDTH";
const BORDERSTYLE = "box/BORDERSTYLE";

export const ChangeBoxWidth = createAction(BOXWIDTH);
export const ChangeBoxHeight = createAction(BOXHEIGHT);
export const ChangeBorderWidth = createAction(BORDERWIDTH);
export const ChangeBorderStyle = createAction(BORDERSTYLE);

const initialState = {
  state: {
    boxWidth: 500,
    boxHeight: 500,
    borderWidth: 5,
    borderStyle: "soild"
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
    default:
      return state;
  }
}
