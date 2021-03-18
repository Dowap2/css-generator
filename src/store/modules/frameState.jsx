import { createAction } from "redux-actions";

const CHANGEFRAME = "box/frame";
const CHANGEFRAMESTATE = "box/frameState";

export const ChangeFrame = createAction(CHANGEFRAME);
export const ChangeFrameState = createAction(CHANGEFRAMESTATE);

const initialState = {
  state: {
    frame: 1,
    frame1: {},
    frame2: {},
    frame3: {},
    frame4: {},
    frame5: {}
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGEFRAME:
      return { state: Object.assign(state.state, { frame: action.payload }) };
    case CHANGEFRAMESTATE:
      console.log(action.payload);
      switch (action.payload.currentIndex) {
        case 1:
          return {
            state: Object.assign(state.state, { frame1: action.payload.state })
          };
        case 2:
          return {
            state: Object.assign(state.state, { frame2: action.payload.state })
          };
        case 3:
          return {
            state: Object.assign(state.state, { frame3: action.payload.state })
          };
        case 4:
          return {
            state: Object.assign(state.state, { frame4: action.payload.state })
          };
        case 5:
          return {
            state: Object.assign(state.state, { frame5: action.payload.state })
          };
        default:
          return state;
      }

    default:
      return state;
  }
}
