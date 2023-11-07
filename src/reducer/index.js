import { LANGUAGE, GET_USERS, DELETE_USERS, CREATE_USER, UPDATE_USER } from "../constant/index";
import update from 'immutability-helper';
import { combineReducers } from 'redux';
const initState = {
  language: "vi",
  users: []
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case LANGUAGE:
      return { ...state, language: action.payload };

    case GET_USERS:
      return { ...state, users: action.payload.data };

    case DELETE_USERS:
      const users = state.users.filter((f) => f.id !== action.payload);
      return { ...state, users: users  };

    case CREATE_USER:
      return { ...state, users: [action.payload].concat(state.users)};

    case UPDATE_USER:
      const index = state.users.findIndex((f) => f.id == action.payload.id);
      state = update(state, { users: {[index]: { $set: action.payload }} });
      return state;

    default:
      return state;
  }
};

export default combineReducers({
  reducer: reducer
});



