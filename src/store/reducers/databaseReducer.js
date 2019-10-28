import { actionTypes } from '../constants/databaseActionTypes';

const initialState = {
  connectedToDatabase: false,
  sendingDataToDatabase: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FEEDBACK_CONFIRMED:
      return {
        ...state,
        isFeedbackConfirmed: action.payload
      };
    case actionTypes.FEEDBACK_VOTE_TYPE:
      return {
        ...state,
        feedbackType: action.payload
      };
    default:
      return state;
  }
};
