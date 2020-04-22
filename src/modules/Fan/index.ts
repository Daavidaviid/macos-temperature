import {
  Fan as FanType,
  IFanManager,
  InitializeResult,
  SetFanSpeedConfig,
  CloseResult,
} from './IFanManager';
class FanManager implements IFanManager {
  nativeModule: any;

  constructor() {}

  initialize(): Promise<InitializeResult> {
    throw new Error('FanManager using default.');
  }

  close(): Promise<CloseResult> {
    throw new Error('FanManager using default.');
  }

  /**
   * @description Blabla Blabla
   * @param config is used to configure
   */
  getFans(): Promise<FanType[]> {
    throw new Error('FanManager using default.');
  }
  /**
   * @description Blabla Blabla
   * @param config is used to configure
   */
  setFanSpeed({}: SetFanSpeedConfig): Promise<FanType> {
    throw new Error('FanManager using default.');
  }
}

export const FanModule = new FanManager();
export * from './IFanManager';
