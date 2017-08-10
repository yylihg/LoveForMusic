//
//  UserModel.h
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/4/2.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface UserModel : NSObject
@property(nonatomic,retain) NSString *accessToken;//用户名
@property(nonatomic,retain) NSString *userToken;//密码
@property(nonatomic,retain) NSString *roleId;//密码
@end
