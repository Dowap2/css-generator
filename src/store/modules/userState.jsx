import { createAction } from "redux-actions";

const SIGNUPMODAL = "user/SIGNUPMODAL";
const SIGNINMODAL = "user/SIGNINMODAL";

export const ChangeSignUpModal = createAction(SIGNUPMODAL);
export const ChangeSignInModal = createAction(SIGNINMODAL);

const initialState = {
  signInModal: true,
  signUpModal: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNINMODAL:
      return { signInModal: action.payload, signUpModal: false };
    case SIGNUPMODAL:
      return { signUpModal: action.payload, signInModal: false };
    default:
      return state;
  }
}
