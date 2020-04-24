import { Fan } from '@modules';

interface FanMap {
  [key: string]: Fan;
}
export interface FansState {
  Map: FanMap;
}

export type NavigationRoute = 'Main' | 'Settings';
export interface NavigationState {
  route: NavigationRoute;
}

export interface GlobalState {
  fans: FansState;
}
