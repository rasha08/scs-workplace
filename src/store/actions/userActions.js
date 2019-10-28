import { actionTypes } from '../constants/userActionTypes';

export const loginUser = ({
  displayName,
  email,
  photoURL,
  uid
}) => dispatch => {
  dispatch({
    type: actionTypes.LOGIN_USER,
    payload: {
      displayName,
      email,
      photoURL,
      uid
    }
  });
};

export const logout = res => dispatch => {
  dispatch({
    type: actionTypes.LOGOUT_USER,
    payload: null
  });
};
