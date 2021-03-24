import { createAction } from "redux-actions";

const CHANGEMODE = "page/mode";
const CHANGEVIEWMODE = "page/viewMode";

export const ChangeMode = createAction(CHANGEMODE);
export const ChangeViewMode = createAction(CHANGEVIEWMODE);

const initialState = {
  mode: "style",
  viewMode: "light"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGEMODE:
      return { ...state, mode: action.payload };
    case CHANGEVIEWMODE:
      return { ...state, viewMode: action.payload };
    default:
      return state;
  }
}
