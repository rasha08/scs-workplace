import { actionTypes } from '../constants/boardAtionTypes';

export const confirmFeedback = res => dispatch => {
  dispatch({
    type: actionTypes.FEEDBACK_CONFIRMED,
    payload: res
  });
};

const feedbackVote = res => dispatch => {
  dispatch({
    type: actionTypes.FEEDBACK_VOTE_TYPE,
    payload: res
  });
};

export const sendFeedback = (isSatisfied, conversationId) => (dispatch, getState) => {
  if (!conversationId) {
    return;
  }

  const feedbackVoteType = isSatisfied ? 'upvote' : 'downvote'
  dispatch(confirmFeedback(false))
  dispatch(feedbackVote(feedbackVoteType))
  const message = {
    command: 'set_satisfaction_state',
    satisfied: isSatisfied,
    conversation_id: conversationId,
    domain_extension: getState().domain
  };

  // dispatch(sendMessageToServer(message));
};
