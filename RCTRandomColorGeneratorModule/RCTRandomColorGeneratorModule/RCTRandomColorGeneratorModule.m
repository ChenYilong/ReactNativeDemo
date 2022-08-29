//
//  RCTRandomColorGeneratorModule.m
//  RCTRandomColorGeneratorModule
//
//  Created by chenyilong on 2022/8/29.
//

#import "RCTRandomColorGeneratorModule.h"
#import <UIKit/UIKit.h>

@implementation RCTRandomColorGeneratorModule
RCT_EXPORT_MODULE();

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getName)
{
return [[UIDevice currentDevice] name];
}

@end
