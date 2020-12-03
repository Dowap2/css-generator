import { createAction } from "redux-actions";

const ADDFRAME = "box/ADDFRAME";

export const AddFrame = createAction(ADDFRAME);

const initialState = {
  state: []
};

const AddAnimation = (state, payload) => {
  const animation = [payload];
  state.state = state.state.concat(animation);
  return state;
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDFRAME:
      return AddAnimation(state, action.payload);
    default:
      return state;
  }
}
