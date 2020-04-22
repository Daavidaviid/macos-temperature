import { NativeModules } from 'react-native';
import { IFanManager, Fan as FanType, GetFansConfig } from './IFanManager';

class FanManager implements IFanManager {
  nativeModule: any;

  constructor() {
    this.nativeModule = NativeModules.FanManager;
  }

  initialize(): void {
    this.nativeModule.initialize();
  }

  /**
   * @description Blabla Blabla
   * @param config is used to configure
   */
  getFans(config: GetFansConfig): Promise<FanType[]> {
    return this.nativeModule.getFans(config);
  }
}

export const Fan = new FanManager();
