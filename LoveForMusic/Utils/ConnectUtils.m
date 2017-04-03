//
//  ConnectUtils.m
//  GsApp
//
//  Created by  ihg on 15/10/16.
//  Copyright © 2015年 hhu. All rights reserved.
//

#import "ConnectUtils.h"

@implementation ConnectUtils
@synthesize timeStamp;
@synthesize mConnection;


//接收到服务器传输数据的时候调用，此方法根据数据大小执行若干次

- (void)connection:(NSURLConnection *)connection didReceiveData:(NSData *)data {
    //对多次获取到的数据进行拼接
    [jsonData appendData:data];
}
//获取数据出现错误
-(void) connection:(NSURLConnection *)connection
  didFailWithError: (NSError *)error {
    
    if (self.delegate != nil) {
        [self.delegate connectFinishAction:connection resultJson:@"fail"];
    }else{
        NSLog(@"ihg ConnectUtil delegate null!");
    }
}
// 获取数据成功
- (void) connectionDidFinishLoading: (NSURLConnection*) connection {
    //将获取的数据转化为NSString数据类
    outString = [[NSString alloc] initWithData:jsonData encoding: NSUTF8StringEncoding];
    NSDictionary *jsonObj = [outString JSONValue];
    NSString *time = [jsonObj objectForKey:@"timestamp"];
    if ([time isEqualToString:timeStamp]) {
        if (self.delegate != nil) {
            [self.delegate connectFinishAction:connection resultJson:outString];
        }else{
            NSLog(@"ihg ConnectUtil delegate null!");
        }
    }
}

-(void)connectTogetData:(NSString *)urlString timeStamp:(NSString *)time{
    jsonData = [[NSMutableData alloc] init];
    timeStamp = time;
    NSLog(@"%@",urlString);
    //初始化NSURL对象
    NSURL *url = [NSURL URLWithString:urlString];
    //初始化一个请求
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:url];
    //设置请求方法为get方法
    [request setHTTPMethod:@"GET"];
    //设置请求超时为60秒
    [request setTimeoutInterval:60];
    
    self.mConnection = [[NSURLConnection alloc]
                        initWithRequest:request
                        delegate:self];
}
@end
