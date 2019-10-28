import { actionTypes } from '../constants/userActionTypes';

export default (state = { projects: [] }, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_PROJECTS:
      console.log(
        {
          ...state,
          ...action.payload
        },
        action.payload
      );
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
