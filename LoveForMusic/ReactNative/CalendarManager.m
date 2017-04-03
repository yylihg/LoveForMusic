//
//  CalendarManager.m
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/3/12.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager
RCT_EXPORT_MODULE();
//  对外提供调用方法（testNormalEvent为方法名，后面为参数，按顺序和对应数据类型在js进行传递）
RCT_EXPORT_METHOD(testNormalEvent:(NSString *)name forSomething:(NSString *)thing){
    NSString *info = [NSString stringWithFormat:@"ihg Test: %@\nFor: %@", name, thing];
    NSLog(@"%@", info);
}
@end
