import { createAction } from "redux-actions";

const MODALSTATE = "box/MODALSTATE";

export const ChangeModalState = createAction(MODALSTATE);

const initialState = {
  modalState: "none"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MODALSTATE:
      return { modalState: action.payload };
    default:
      return state;
  }
}
