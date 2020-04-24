export interface Fan {
  rpm: number;
  minSpeed: number;
  maxSpeed: number;
  description: string;
  index: number;
}
export interface SetFanSpeedConfig {
  rpm: number;
  fanIndex: number;
}
export interface InitializeResult {}
export interface CloseResult {}

export interface IFanManager {
  initialize(): Promise<InitializeResult>;
  close(): Promise<CloseResult>;
  getFans(): Promise<Fan[]>;
  setFanSpeed(config: SetFanSpeedConfig): Promise<Fan>;
  getTemperature(): Promise<number>;
  setRights(): void;
}
