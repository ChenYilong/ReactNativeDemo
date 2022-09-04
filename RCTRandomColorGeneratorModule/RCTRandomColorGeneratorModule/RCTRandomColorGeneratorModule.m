//
//  RCTRandomColorGeneratorModule.m
//  RCTRandomColorGeneratorModule
//
//  Created by chenyilong on 2022/8/29.
//

#import "RCTRandomColorGeneratorModule.h"

@implementation RCTRandomColorGeneratorModule
RCT_EXPORT_MODULE();

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(generate:(nonnull NSNumber *)option)
{
    NSString *result;
    if (option.integerValue == RNColorGeneratorOptionHEX) {
        NSInteger *baseInt = arc4random() % 16777216;
        NSString *hex = [NSString stringWithFormat:@"#%06X", baseInt];
        result = hex;
    } else if (option.integerValue == RNColorGeneratorOptionRGB) {
        
    }
    
    return result;
}

@end
