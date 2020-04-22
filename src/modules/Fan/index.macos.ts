import { NativeModules } from 'react-native';
import {
  IFanManager,
  Fan as FanType,
  InitializeResult,
  SetFanSpeedConfig,
  CloseResult,
} from './IFanManager';

class FanManager implements IFanManager {
  nativeModule: any;

  constructor() {
    this.nativeModule = NativeModules.FanManager;
  }

  initialize(): Promise<InitializeResult> {
    return this.nativeModule.initialize();
  }

  close(): Promise<CloseResult> {
    return this.nativeModule.close();
  }

  /**
   * @description Blabla Blabla
   * @param config is used to configure
   */
  getFans(): Promise<FanType[]> {
    return this.nativeModule.getFans();
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
