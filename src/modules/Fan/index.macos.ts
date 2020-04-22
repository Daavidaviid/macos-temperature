import { NativeModules } from 'react-native';
import {
  IFanManager,
  Fan as FanType,
  GetFansConfig,
  InitializeResult,
  SetFanSpeedConfig,
} from './IFanManager';

class FanManager implements IFanManager {
  nativeModule: any;

  constructor() {
    this.nativeModule = NativeModules.FanManager;
  }

  initialize(): Promise<InitializeResult> {
    return this.nativeModule.initialize();
  }

  /**
   * @description Blabla Blabla
   * @param config is used to configure
   */
  getFans(config: GetFansConfig): Promise<FanType[]> {
    return this.nativeModule.getFans(config);
  }

  /**
   * @description Blabla Blabla
   * @param config is used to configure
   */
  setFanSpeed(config: SetFanSpeedConfig): Promise<FanType> {
    return this.nativeModule.setFanSpeed(config);
  }
}

export const FanModule = new FanManager();
