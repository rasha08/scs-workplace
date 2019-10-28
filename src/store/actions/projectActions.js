import { actionTypes } from '../constants/projectsActionTypes';
import { filter, includes } from 'lodash';

export const setUserProjects = res => (dispatch, getState) => {
  const { user } = getState();
  dispatch({
    type: actionTypes.SET_USER_PROJECTS,
    payload: filter(res, project => includes(project.members, user.email))
  });
};
