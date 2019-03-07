import { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  err: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_CHARACTERS:
    console.log(action.type);
      return {
        ...state,
        fetching: true
      }
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        fetching: false,
        err: action.payload
      }
    case FETCH_CHARACTERS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        fetching: false,
        characters: [...state.characters, ...action.payload]
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
