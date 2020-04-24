import * as types from '../types';
import { createReducer } from './helpers';
import { NavigationState, NavigationRoute } from '../states';
import { Fan } from '@modules';

const initialState: NavigationState = {
  route: 'Main',
};

const setRoute = (
  state: NavigationState,
  { route }: { route: NavigationRoute }
): NavigationState => {
  return {
    route,
  };
};

// reducer
const reducer = createReducer(initialState, {
  [types.SET_ROUTE]: setRoute,
});

export default reducer;
