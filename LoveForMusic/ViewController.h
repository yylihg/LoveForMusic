//
//  ViewController.h
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/3/12.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "ConnectUtils.h"
@interface ViewController : UIViewController <ConnectUtilsDelegate,MBProgressHUDDelegate>
{
    NSString *outString;
    Boolean isLogining;
    NSMutableData *jsonData;
    NSString *timeStamp;
}
@property (nonatomic, retain) MBProgressHUD *ToastView;//提示信息窗口
@property (nonatomic, retain) UserModel *userInfo;//用户信息
//联网工具包
@property (nonatomic,retain) ConnectUtils *mConnector;
@end

