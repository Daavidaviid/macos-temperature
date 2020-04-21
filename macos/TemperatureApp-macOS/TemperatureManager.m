//
//  TemperatureManager.m
//  TemperatureApp-macOS
//
//  Created by David Guerin on 21/04/2020.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import "TemperatureManager.h"

@implementation TemperatureManager

// To export a module named TemperatureManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getTemperatures:(NSDictionary *)config
                  findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString * message = [config objectForKey:@"message"];
  RCTLog(@"Received message : %@", message);
  
  // https://github.com/hholtmann/smcFanControl/tree/master/Classes
  
  //  if (events) {
  //    resolve(events);
  //  } else {
  //    reject(@"no_events", @"There were no events", error);
  //  }
}

@end
