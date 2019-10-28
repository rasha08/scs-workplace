import { actionTypes } from '../constants/userActionTypes';

export default (state = { filteredBy: '' }, action) => {
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
