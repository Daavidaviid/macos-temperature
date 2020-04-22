import * as types from '../types';
import { createReducer } from './helpers';
import { FansState } from '../states';
import { Fan } from '@modules';

const initialState: FansState = {
  Map: {},
};

const setFans = (state: FansState, { fans }: { fans: Fan[] }): FansState => {
  let Map = { ...state.Map };
  fans.forEach((fan) => {
    Map[fan.index] = fan;
  });

  return {
    ...state,
    Map,
  };
};

const setFanRPM = (
  state: FansState,
  { rpm, fanIndex }: { rpm: number; fanIndex: number }
): FansState => {
  let Map = { ...state.Map };

  Map[fanIndex].rpm = rpm;

  return {
    ...state,
    Map,
  };
};

// reducer
const reducer = createReducer(initialState, {
  [types.SET_FANS]: setFans,
  [types.SET_FAN_RPM]: setFanRPM,
});

export default reducer;
