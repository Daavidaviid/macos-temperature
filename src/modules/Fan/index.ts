import { Fan as FanType, IFanManager } from './IFanManager';
class FanManager implements IFanManager {
  nativeModule: any;

  constructor() {}
  initialize(): void {
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

export const Fan = new FanManager();
