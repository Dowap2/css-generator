import { createAction } from "redux-actions";

const CHANGEINDEX = "box/CHANGEINDEX";

export const ChangeIndex = createAction(CHANGEINDEX);

const initialState = {
  createIndex: 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGEINDEX:
      return { createIndex: action.payload };
    default:
      return state;
  }
}
