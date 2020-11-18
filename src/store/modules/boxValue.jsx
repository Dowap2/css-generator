import { createAction } from "redux-actions";

const BOXWIDTH = "box/BOXWIDTH";
const BOXHEIGHT = "box/BOXHEIGHT";

export const ChangeBoxWidth = createAction(BOXWIDTH);
export const ChangeBoxHeight = createAction(BOXHEIGHT);

const initialState = {
  boxWidth: 500,
  boxHeight: 500
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BOXWIDTH:
      return { boxWidth: action.payload };
    case BOXHEIGHT:
      return { boxHeight: action.payload };
    default:
      return state;
  }
}
