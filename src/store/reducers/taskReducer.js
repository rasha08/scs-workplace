import { actionTypes } from '../constants/taskActionTypes';

const initialState = {
  assigner: '',
  columnIndex: 0,
  createdBy: '',
  creationDate: '',
  description: '',
  externalLink: '',
  highPriorityTask: false,
  image: '',
  labels: '',
  name: '',
  reviewer: '',
  sprint: 0,
  taskNameSlug: '',
  type: 'story'
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
