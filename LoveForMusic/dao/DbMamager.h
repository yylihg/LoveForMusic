//
//  DbMamager.h
//  dbSample
//
//  Created by  ihg on 15-10-4.
//  Copyright (c) 2015年  ihg. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <sqlite3.h>

@interface DbMamager : NSObject

@property(nonatomic) sqlite3 *database;
////获取平台列表
//- (NSMutableArray *)getPlatforms;
////更新平台
//- (void)updatePlatform:(PlatformModel *) platform;
////添加平台
//- (void)addPlatform:(PlatformModel *) platform;
////删出平台
//- (void)deletePlatformId:(int)platformId;
@end
