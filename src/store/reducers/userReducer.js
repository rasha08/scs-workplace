import { actionTypes } from '../constants/userActionTypes';

const initialState = {
  displayName: '',
  email: '',
  photoURL: '',
  uid: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
