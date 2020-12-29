import { createAction } from "redux-actions";

const MODALNAME = "box/MODALNAME";
const TEXTMODALSTATE = "box/TEXTMODALSTATE";
const ANIMATIONMODALSTATE = "box/ANIMATIONMODALSTATE";

export const ChangeModalName = createAction(MODALNAME);
export const ChangeTextModalState = createAction(TEXTMODALSTATE);
export const ChangeAnimationModalState = createAction(ANIMATIONMODALSTATE);

const initialState = {
  modalName: "textModal",
  textModalState: "none",
  animationModalState: "none"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MODALNAME:
      return { ...state, modalName: action.payload };
    case TEXTMODALSTATE:
      return { ...state, textModalState: action.payload };
    case ANIMATIONMODALSTATE:
      return { ...state, animationModalState: action.payload };
    default:
      return state;
  }
}
