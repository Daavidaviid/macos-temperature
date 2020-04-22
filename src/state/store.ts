// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

const devTools = () => {
  return (
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
    compose
  );
};

const configureStore = () => {
  // Set to true to enable devTools
  const debugging = __DEV__;
  const f = applyMiddleware(thunk)(createStore);
  return debugging ? f(rootReducer, devTools()) : f(rootReducer);
};

export const store = configureStore();
