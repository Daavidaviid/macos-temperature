import { Fan as FanType, IFanManager, InitializeResult } from './IFanManager';
class FanManager implements IFanManager {
  nativeModule: any;

  constructor() {}
  initialize(): Promise<InitializeResult> {
    throw new Error('FanManager using default.');
  }

  /**
   * @description Blabla Blabla
   * @param config is used to configure
   */
  getFans(): Promise<FanType[]> {
    throw new Error('FanManager using default.');
  }
}

export const FanModule = new FanManager();
export * from './IFanManager';
