import { createAction } from "redux-actions";

const LOADDATABUTTON = "box/LOADDATABUTTON";
const MODALNAME = "box/MODALNAME";
const LOADDATA = "box/LOADDATA";
const LOADTYPE = "box/LOADTYPE";
const MODALSTATE = "box/MODALSTATE";

export const ChangeLoadDataButton = createAction(LOADDATABUTTON);
export const ChangeModalName = createAction(MODALNAME);
export const ChangeLoadData = createAction(LOADDATA);
export const ChangeLoadType = createAction(LOADTYPE);
export const ChangeModalState = createAction(MODALSTATE);

const initialState = {
  loadData: [],
  loadDataButton: [],
  modalName: "textModal",
  loadType: "load",
  modalState: "none"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADDATABUTTON:
      return { ...state, loadDataButton: action.payload };
    case MODALNAME:
      return { ...state, modalName: action.payload };
    case LOADDATA:
      return { ...state, loadData: action.payload };
    case LOADTYPE:
      return { ...state, loadType: action.payload };
    case MODALSTATE:
      return { ...state, modalState: action.payload };
    default:
      return state;
  }
}
