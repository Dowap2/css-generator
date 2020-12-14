import { createAction } from "redux-actions";

const USERSTATE = "user/USERSTATE";

export const ChangeUserState = createAction(USERSTATE);

const initialState = {
  userState: "deActivation"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USERSTATE:
      return { userState: action.payload };
    default:
      return state;
  }
}
