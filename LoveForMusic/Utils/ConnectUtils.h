//
//  ConnectUtils.h
//  GsApp
//
//  Created by  ihg on 15/10/16.
//  Copyright © 2015年 hhu. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "NSString+SBJSON.h"
#import "SBJsonParser.h"
//定义网络连接工具委托事件
@protocol ConnectUtilsDelegate <NSObject>
-(void)connectFinishAction:(NSURLConnection *)connection resultJson:(NSString *)json;
@end
@interface ConnectUtils : NSObject
{
    NSString *outString;
    NSMutableData *jsonData;
    NSString *timeStamp;
}
//回调委托器
@property (weak)id<ConnectUtilsDelegate> delegate;
@property (nonatomic,retain) NSURLConnection *mConnection;//网络连接对象
//时间戳
@property (nonatomic,retain) NSString *timeStamp;
//联网
-(void)connectTogetData:(NSString *)urlString timeStamp:(NSString *)time;
@end
