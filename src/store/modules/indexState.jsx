import { createAction } from "redux-actions";

const FRAMEINDEX = "box/FRAMEINDEX";
const CREATEINDEX = "box/CREATEINDEX";
const MENULIST = "box/MENULIST";

export const ChangeFrameIndex = createAction(FRAMEINDEX);
export const ChangeCreateIndex = createAction(CREATEINDEX);
export const ChangeMenuList = createAction(MENULIST);

const initialState = {
  frameIndex: 0,
  createIndex: 0,
  menuList: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FRAMEINDEX:
      return { ...state, frameIndex: action.payload };
    case CREATEINDEX:
      return { ...state, createIndex: action.payload };
    case MENULIST:
      return { ...state, menuList: action.payload };

    default:
      return state;
  }
}
