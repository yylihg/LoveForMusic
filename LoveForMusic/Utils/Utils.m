//
//  GsUtils.m
//  GsApp
//
//  Created by  ihg on 15/10/10.
//  Copyright © 2015年 hhu. All rights reserved.
//

#import "Utils.h"

@implementation Utils


//设置用户信息
+(void)setUserInfo: (UserModel *)userInfo{
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    [defaults setObject:userInfo.accessToken forKey:@"accessToken"];
    [defaults setObject:userInfo.userToken forKey:@"userToken"];
     [defaults setObject:userInfo.roleId forKey:@"roleId"];
}

//获取用户信息
+(UserModel *)getUserInfo{
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    UserModel *mUserModel = [[UserModel alloc] init];
    mUserModel.accessToken = [defaults objectForKey:@"accessToken"];
    mUserModel.userToken = [defaults objectForKey:@"userToken"];
    mUserModel.roleId =[defaults objectForKey:@"roleId"];
    return mUserModel;
}


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

/**
    获取info.plist中的值
 */
+(NSString *)getStringFromPlist:(NSString *) key{
    NSString *bundlePath = [[NSBundle mainBundle] pathForResource:@"Info" ofType:@"plist"];
    NSMutableDictionary *dict = [NSMutableDictionary dictionaryWithContentsOfFile:bundlePath];
    return  [dict objectForKey:key];
}

@end
