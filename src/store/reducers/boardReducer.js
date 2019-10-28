import { actionTypes } from '../constants/boardAtionTypes';

const initialState = {
  activeSprint: 0,
  boardColumns: [],
  description: '',
  labels: [],
  logo: '',
  members: [],
  name: '',
  projectMaster: '',
  ProjectNameSlug: '',
  specification: '',
  startDate: '',
  tasks: {}
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
