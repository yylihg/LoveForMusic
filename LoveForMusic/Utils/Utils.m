//
//  GsUtils.m
//  GsApp
//
//  Created by  ihg on 15/10/10.
//  Copyright © 2015年 hhu. All rights reserved.
//

#import "Utils.h"

@implementation Utils



//获取当前系统时间
+(NSString *)getCurrentTime{
    NSDateFormatter *former = [[NSDateFormatter alloc]init];
    [former setDateFormat:@"yyyyMMddHHmmss"];
    return [former stringFromDate:[[NSDate alloc] init]];
}

//获取当前系统日期
+(NSString *)getCurrentDate{
    NSDateFormatter *former = [[NSDateFormatter alloc]init];
    [former setDateFormat:@"yyyy-MM-dd"];
    return [former stringFromDate:[[NSDate alloc] init]];
}
@end
