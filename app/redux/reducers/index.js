import { combineReducers } from 'redux';
import threads from './threads';
import dialog from './dialog';


export default combineReducers({
  threads,
  dialog
});
