import { createStore,applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { persistStore, autoRehydrate } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import reducer from './../redux/reducers';

export default function configureStore() {
  const routingMiddleware = routerMiddleware(browserHistory);
  const enhancer =  compose(
    composeWithDevTools(autoRehydrate()),
     applyMiddleware(routingMiddleware));
  return  createStore(reducer,enhancer);
}
