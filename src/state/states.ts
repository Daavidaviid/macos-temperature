import { Fan } from '@modules';

interface FanMap {
  [key: string]: Fan;
}
export interface FansState {
  Map: FanMap;
}

export interface GlobalState {
  fans: FansState;
}
