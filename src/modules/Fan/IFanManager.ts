export interface Fan {
  rpm: number;
  minSpeed: number;
  maxSpeed: number;
  description: string;
  index: number;
}

export interface GetFansConfig {}
export interface SetFanSpeedConfig {
  rpm: number;
  fanIndex: number;
}
export interface InitializeResult {}

export interface IFanManager {
  initialize(): Promise<InitializeResult>;
  getFans(config: GetFansConfig): Promise<Fan[]>;
  setFanSpeed(config: SetFanSpeedConfig): Promise<Fan>;
}
