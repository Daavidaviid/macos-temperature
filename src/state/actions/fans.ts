// Types
import { Dispatch } from 'redux';
import { SET_FANS, SET_FAN_RPM } from '../types';
import { Fan } from '@modules';

export const setFans = (fans: Fan[]) => (dispatch: Dispatch) => {
  dispatch({ type: SET_FANS, fans });
};

export const setFanRPM = (rpm: number, fanIndex: number) => (
  dispatch: Dispatch
) => {
  dispatch({ type: SET_FAN_RPM, rpm, fanIndex });
};
