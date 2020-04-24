// Types
import { Dispatch } from 'redux';
import { SET_ROUTE } from '../types';
import { NavigationRoute } from '../states';

export const setRoute = (route: NavigationRoute) => (dispatch: Dispatch) => {
  dispatch({ type: SET_ROUTE, route });
};
