import { createAction } from "redux-actions";

const SIGNUPMODAL = "user/SIGNUPMODAL";
const SIGNINMODAL = "user/SIGNINMODAL";
const USERINFO = "user/USERINFO";

export const ChangeSignUpModal = createAction(SIGNUPMODAL);
export const ChangeSignInModal = createAction(SIGNINMODAL);
export const ChangeUserInfo = createAction(USERINFO);

const initialState = {
  signInModal: true,
  signUpModal: false,
  userInfo: "",
  userName: "default name"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNINMODAL:
      return { signInModal: action.payload, signUpModal: false };
    case SIGNUPMODAL:
      return { signUpModal: action.payload, signInModal: false };
    case USERINFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
}
