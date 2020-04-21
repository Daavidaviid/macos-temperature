import { NativeModules } from 'react-native';

interface GetTemperatureConfig {
  message?: string;
}
class TemperatureManager {
  nativeModule: any;

  constructor() {
    this.nativeModule = NativeModules.TemperatureManager;
  }

  /**
   * @description Blabla Blabla
   * @param config is used to configure
   */
  getTemperatures(config: GetTemperatureConfig): any {
    return this.nativeModule.getTemperatures(config);
  }
}

export const Temperature = new TemperatureManager();
