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

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(generate)
{
    // 16777215 is FFFFFF
    NSInteger *baseInt = arc4random() % 16777216;
    NSString *hex = [NSString stringWithFormat:@"#%06X", baseInt];
    return hex;
}

@end
