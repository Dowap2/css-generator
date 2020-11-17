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
      return { boxWidth: state.boxWidth + 1 };
    case BOXHEIGHT:
      return { boxWidth: state.boxHeight };
    default:
      return state;
  }
}
