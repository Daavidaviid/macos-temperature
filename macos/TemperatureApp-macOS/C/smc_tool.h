//
//  smc.h
//  TemperatureApp-macOS
//
//  Created by David Guerin on 21/04/2020.
//

#ifndef smc_tool_h
#define smc_tool_h

#include <stdio.h>
#include <string.h>

#include <CoreFoundation/CoreFoundation.h>
#include <IOKit/IOKitLib.h>
#include <IOKit/ps/IOPSKeys.h>
#include <IOKit/ps/IOPowerSources.h>


// key values
#define SMC_KEY_CPU_TEMP      "TC0P"
#define SMC_KEY_FAN_SPEED     "F%dAc"
#define SMC_KEY_FAN_NUM       "FNum"
#define SMC_KEY_BATTERY_TEMP  "TB0T"


float SMCGetFanSpeed(int fanNum);
int SMCGetFanNumber(char *key);
double SMCGetTemperature(char *key);
const char* getBatteryHealth(void);
int getDesignCycleCount(void);
int getBatteryCharge(void);
CFTypeRef IOPSCopyPowerSourcesInfo(void);
CFArrayRef IOPSCopyPowerSourcesList(CFTypeRef blob);
CFDictionaryRef IOPSGetPowerSourceDescription(CFTypeRef blob, CFTypeRef ps);

#endif /* smc_tool_h */
