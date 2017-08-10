//
//  GsUtils.h
//  GsApp
//
//  Created by  ihg on 15/10/10.
//  Copyright © 2015年 hhu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "UserModel.h"

@interface Utils : NSObject
//设置用户信息
+(void)setUserInfo: (UserModel *)userInfo;

//获取用户信息
+(UserModel *)getUserInfo;
//根据key获取plist里的值
+(NSString *)getStringFromPlist:(NSString *) key;
//获取当前系统时间
+(NSString *)getCurrentTime;
//获取当前系统日期
+(NSString *)getCurrentDate;
@end
