//
//  FanManager.m
//  TemperatureApp-macOS
//
//  Created by David Guerin on 21/04/2020.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import "FanManager.h"
#import "smcWrapper.h"

@implementation FanManager

// To export a module named FanManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(initialize:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  [smcWrapper init];
  NSDictionary * result = @{
    @"result": @YES,
  };
  resolve(result);
}

RCT_EXPORT_METHOD(getFans:(NSDictionary *)config
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  //  NSString * message = [config objectForKey:@"message"];
  //  RCTLog(@"Received message : %@", message);
  
  // https://github.com/hholtmann/smcFanControl/tree/master/Classesa
  NSNumber *fans = [NSNumber numberWithInt: [smcWrapper get_fan_num]];
  
  NSMutableArray *result = [[NSMutableArray alloc] init];
  for(int i = 0; i <= [fans intValue]; i++) {
    NSNumber *rpm = [NSNumber numberWithInt: [smcWrapper get_fan_rpm:i]];
    NSNumber *minSpeed = [NSNumber numberWithInt: [smcWrapper get_min_speed:i]];
    NSNumber *maxSpeed = [NSNumber numberWithInt: [smcWrapper get_max_speed:i]];
    NSString *description = [smcWrapper get_fan_descr:i];
    
    NSMutableDictionary *fan =  [[NSMutableDictionary alloc] init];
    [fan setValue:description forKey:@"description"];
    [fan setValue:[NSNumber numberWithInt:i] forKey:@"index"];
    
    if ([rpm intValue] != -1) {
      [fan setValue:rpm forKey:@"rpm"];
    }
    if ([minSpeed intValue] != -1) {
      [fan setValue:minSpeed forKey:@"minSpeed"];
    }
    if ([maxSpeed intValue] != -1) {
      [fan setValue:maxSpeed forKey:@"maxSpeed"];
    }
    
    [result addObject:fan];
  }
  
  resolve(result);
}

RCT_EXPORT_METHOD(setFanSpeed:(NSDictionary *)config
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  
  NSNumber * rpm = [config objectForKey:@"rpm"];
  NSNumber * fanIndex = [config objectForKey:@"fanIndex"];
  
  int minSpeed = [smcWrapper get_min_speed:[fanIndex intValue]];
  int maxSpeed = [smcWrapper get_max_speed:[fanIndex intValue]];
  
  if ([rpm intValue] < minSpeed || [rpm intValue] > maxSpeed) {
    NSError *error = [NSError errorWithDomain:@"com.fanapp" code:200 userInfo:@{@"Error reason": @"rpm value is not included between minSpeed and maxSpeed"}];
    reject(@"no_events", @"There were no events", error);
  }
  
  RCTLog(@"Setting speed to %@ for %@", rpm, fanIndex);
}

@end
