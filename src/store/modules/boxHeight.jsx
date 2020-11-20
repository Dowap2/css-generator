import { createAction } from "redux-actions";

const BOXHEIGHT = "box/BOXHEIGHT";

export const ChangeBoxHeight = createAction(BOXHEIGHT);

const initialState = {
  boxHeight: 500
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BOXHEIGHT:
      return { boxHeight: action.payload };
    default:
      return state;
  }
}
