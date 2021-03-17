import { createAction } from "redux-actions";

const CHANGEFRAME = "box/frame";

export const ChangeFrame = createAction(CHANGEFRAME);

const initialState = {
  frame: 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGEFRAME:
      return { frame: action.payload };
    default:
      return state;
  }
}
