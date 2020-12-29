import { createAction } from "redux-actions";

const MODALNAME = "box/MODALNAME";
const LOADDATA = "box/LOADDATA";
const LOADTYPE = "box/LOADTYPE";
const TEXTMODALSTATE = "box/TEXTMODALSTATE";
const ANIMATIONMODALSTATE = "box/ANIMATIONMODALSTATE";

export const ChangeModalName = createAction(MODALNAME);
export const ChangeLoadData = createAction(LOADDATA);
export const ChangeLoadType = createAction(LOADTYPE);
export const ChangeTextModalState = createAction(TEXTMODALSTATE);
export const ChangeAnimationModalState = createAction(ANIMATIONMODALSTATE);

const initialState = {
  loadData: [],
  modalName: "textModal",
  loadType: "load",
  textModalState: "none",
  animationModalState: "none"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MODALNAME:
      return { ...state, modalName: action.payload };
    case LOADDATA:
      return { ...state, loadData: action.payload };
    case LOADTYPE:
      return { ...state, loadType: action.payload };
    case TEXTMODALSTATE:
      return { ...state, textModalState: action.payload };
    case ANIMATIONMODALSTATE:
      return { ...state, animationModalState: action.payload };
    default:
      return state;
  }
}
