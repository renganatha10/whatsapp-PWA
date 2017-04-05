import { combineReducers } from 'redux';
import threads from './threads';
import dialog from './dialog';
import routes from './routes';


export default combineReducers({
  threads,
  dialog,
  routes
});
