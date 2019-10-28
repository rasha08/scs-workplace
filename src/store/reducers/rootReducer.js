import { combineReducers } from 'redux';

import board from './boardReducer';
import openTask from './taskReducer';
import database from './databaseReducer';
import user from './userReducer';
import projects from './projectsReducer';
import currentState from './currentStateReducer';

export default combineReducers({
  board,
  openTask,
  database,
  user,
  projects,
  currentState
});
