import { createAction } from "redux-actions";

const TEXTMODALSTATE = "box/TEXTMODALSTATE";
const ANIMATIONMODALSTATE = "box/ANIMATIONMODALSTATE";

export const ChangeTextModalState = createAction(TEXTMODALSTATE);
export const ChangeAnimationModalState = createAction(ANIMATIONMODALSTATE);

const initialState = {
  textModalState: "none",
  animationModalState: "none"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TEXTMODALSTATE:
      return { ...state, textModalState: action.payload };
    case ANIMATIONMODALSTATE:
      return { ...state, animationModalState: action.payload };
    default:
      return state;
  }
}
