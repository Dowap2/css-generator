import { createAction } from "redux-actions";

const CHANGELANGUAGE = "language";

export const ChangeLanguage = createAction(CHANGELANGUAGE);

const initialState = {
  state: {
    language: "en"
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGELANGUAGE:
      return { state: { language: action.payload } };
    default:
      return state;
  }
}
