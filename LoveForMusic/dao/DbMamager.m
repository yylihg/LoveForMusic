//
//  DbMamager.m
//  dbSample
//
//  Created by  ihg on 15-10-4.
//  Copyright (c) 2015年  ihg. All rights reserved.
//

#import "DbMamager.h"
@implementation DbMamager

@synthesize database = _database;

/**
 * 创建实例 打开数据库
 */
-(id)init{
    if (self = [super init]) {
        //初始化
        NSString *dataFilePath = [self getDatabasePath:@"db_gx.db"];
        if (sqlite3_open([dataFilePath UTF8String], &_database)!= SQLITE_OK) {
            sqlite3_close(_database);
            NSLog(@"failed to open datebase");
        }
    }
    return self;
}

/**
 * 实例消毁  关闭数据库
 */
-(void)dealloc{
    sqlite3_close(_database);
}

/**
 *  获取数据库
 */
-(NSString *)getDatabasePath:(NSString *)dbName{
    
    BOOL success;
    NSFileManager *fileManager = [NSFileManager defaultManager];
    //    NSError *error;
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    NSString *documenrsDirectory = [paths objectAtIndex:0];
    NSString *writableDBPath = [documenrsDirectory stringByAppendingPathComponent:dbName];
    //判断指定目录的文件是否存在
    success = [fileManager fileExistsAtPath:writableDBPath];
    if (!success) {
        NSString *defaultDBPath = [[NSBundle mainBundle] pathForResource:@"db_gx" ofType:@"db"];
        if ([fileManager fileExistsAtPath:defaultDBPath]) {
            NSLog(@"ihg you ");
        }
        //将数据库文件从工程目录转到文件，不然从工程目录中读取文件不能写，是只读的
        success = [fileManager copyItemAtPath:defaultDBPath toPath:writableDBPath error:nil];
        if (success) {
            NSLog(@"从工程目录转到文件目录成功！");
        }else{
            NSLog(@"从工程目录转到文件目录失败！");
        }
    }
    NSLog(@"%d",[fileManager fileExistsAtPath:writableDBPath]);
    return writableDBPath;
}
//
///**
// *  获取平台列表
// */
//-(NSMutableArray *)getPlatforms{
//    NSMutableArray *platformList =  [[NSMutableArray alloc] init];
//    NSString *query = @"select * from db_platform";
//    sqlite3_stmt *sqlStatement;
//    int result = (sqlite3_prepare_v2(_database, [query UTF8String], -1, &sqlStatement, nil));
//    if (result != SQLITE_OK) {
//        NSLog(@"Error: failed to prepare statement with message:get testValue.");
//    }else{
//        while (sqlite3_step(sqlStatement) == SQLITE_ROW) {
//            PlatformModel *platformModel = [[PlatformModel alloc] init];
//            
//            platformModel.platformName = [[NSString alloc] initWithUTF8String:(char *)sqlite3_column_text(sqlStatement, 0)];
//            platformModel.platformIp = [[NSString alloc] initWithUTF8String:(char *)sqlite3_column_text(sqlStatement, 1)];
//            platformModel.platformPort = [[NSString alloc] initWithUTF8String:(char *)sqlite3_column_text(sqlStatement, 2)];
//            platformModel.Id = sqlite3_column_int(sqlStatement, 3);
//            NSLog(@"id1:%d",  platformModel.Id);
//            platformModel.username = [[NSString alloc] initWithUTF8String:(char *)sqlite3_column_text(sqlStatement, 4)];
//            platformModel.password = [[NSString alloc] initWithUTF8String:(char *)sqlite3_column_text(sqlStatement, 5)];
//                        [platformList addObject:platformModel];
//        }
//    }
//    
//    sqlite3_finalize(sqlStatement);
//    //    sqlite3_close(database);
//    return platformList;
//}
///**
// *  添加平台
// *  平台model
// */
//-(void)addPlatform:(PlatformModel *) platform{
//    NSString *sql = [NSString stringWithFormat:@"insert into db_platform(platformName, platformIp,platformPort,username,password) values(\"%@\" ,\"%@\", \"%@\",  \"%@\", \"%@\")",platform.platformName,platform.platformIp, platform.platformPort,platform.username, platform.password];
//    NSLog(@"%@",sql);
//    
//    sqlite3_stmt *sqlStatement;
//    int result = (sqlite3_prepare_v2(_database, [sql UTF8String], -1, &sqlStatement, nil));
//    if (result != SQLITE_OK) {
//        NSLog(@"dbmanager 准备查询状态失败");
//    }else{
//        //执行插入语句
//        result = sqlite3_step(sqlStatement);
//        if (result == SQLITE_ERROR) {
//            NSLog(@"dbmanager 添加失败");
//        }else{
//             NSLog(@"dbmanager 添加成功");
//        }
//    }
//    sqlite3_finalize(sqlStatement);
//}
//
///**
// * 根据平台id删除平台
// */
//-(void)deletePlatformId:(int)platformId{
//       NSString *sql = [NSString stringWithFormat:@"delete from db_platform where platformId = %d",platformId];
//    sqlite3_stmt *sqlStatement;
//    int result = (sqlite3_prepare_v2(_database, [sql UTF8String], -1, &sqlStatement, nil));
//    if (result != SQLITE_OK) {
//        NSLog(@"dbmanager 准备查询状态失败");
//    }else{
//        //执行插入语句
//        result = sqlite3_step(sqlStatement);
//        if (result == SQLITE_ERROR) {
//            NSLog(@"dbmanager 删除失败");
//        }else{
//            NSLog(@"dbmanager 删除成功");
//        }
//    }
//    sqlite3_finalize(sqlStatement);
//}
//
///**
// * 根据平台id更新平台
// */
//-(void)updatePlatform:(PlatformModel *) platform{
//    NSLog(@"id2%d",  platform.Id);
//    NSString *sql = [NSString stringWithFormat:@"update db_platform set username = '%@' ,password = '%@' WHERE platformId='%d' ",platform.username, platform.password,platform.Id];
////    NSLog(sql);
//    sqlite3_stmt *sqlStatement;
//    int result = (sqlite3_prepare_v2(_database, [sql UTF8String], -1, &sqlStatement, nil));
//    if (result != SQLITE_OK) {
//        NSLog(@"dbmanager 准备查询状态失败");
//    }else{
//        //执行sql语句
//        result = sqlite3_step(sqlStatement);
//        if (result == SQLITE_ERROR) {
//            NSLog(@"dbmanager 更新失败");
//        }else{
//            NSLog(@"dbmanager 更新成功");
//        }
//    }
//    sqlite3_finalize(sqlStatement);
//}
//


@end
