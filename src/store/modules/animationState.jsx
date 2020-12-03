import { createAction } from "redux-actions";

const ADDFRAME = "box/ADDFRAME";

export const AddFrame = createAction(ADDFRAME);

const initialState = {
  state: []
};

const AddAnimation = (state, payload) => {
  const animation = [payload];
  const animationState = state.state.concat(animation);
  return { state: animationState };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDFRAME:
      console.log(state);
      console.log(AddAnimation(state, action.payload));
      return AddAnimation(state, action.payload);
    default:
      return state;
  }
}
