import { createAction } from "redux-actions";

const CHANGEMODE = "page/mode";

export const ChangeMode = createAction(CHANGEMODE);

const initialState = {
  mode: "style"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGEMODE:
      return { mode: action.payload };
    default:
      return state;
  }
}
