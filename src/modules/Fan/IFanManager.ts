export interface Fan {
  rpm: number;
  minSpeed: number;
  maxSpeed: number;
  description: string;
}

export interface GetFansConfig {}

export interface IFanManager {
  initialize(): void;
  getFans(config: GetFansConfig): Promise<Fan[]>;
}
