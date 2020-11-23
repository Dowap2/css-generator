import { createAction } from "redux-actions";

const FRAMEINDEX = "box/FRAMEINDEX";

export const ChangeFrameIndex = createAction(FRAMEINDEX);

const initialState = {
  frameIndex: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FRAMEINDEX:
      return { frameIndex: action.payload };
    default:
      return state;
  }
}
