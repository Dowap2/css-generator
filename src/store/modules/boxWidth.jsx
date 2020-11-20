import { createAction } from "redux-actions";

const BOXWIDTH = "box/BOXWIDTH";

export const ChangeBoxWidth = createAction(BOXWIDTH);

const initialState = {
  boxWidth: 500
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BOXWIDTH:
      console.log(initialState, action);
      return { boxWidth: action.payload };
    default:
      return state;
  }
}
