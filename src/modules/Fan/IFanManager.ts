export interface Fan {
  rpm: number;
  minSpeed: number;
  maxSpeed: number;
  description: string;
}

export interface GetFansConfig {}
export interface InitializeResult {}

export interface IFanManager {
  initialize(): Promise<InitializeResult>;
  getFans(config: GetFansConfig): Promise<Fan[]>;
}
