//
//  BaseViewController.h
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/4/3.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface BaseViewController : UIViewController<ConnectUtilsDelegate,MBProgressHUDDelegate>
@property (nonatomic, retain) MBProgressHUD *ToastView;//提示信息窗口

//联网工具包
@property (nonatomic,retain) ConnectUtils *mConnector;
-(void) toast:(NSString *)urlString;
-(void)back;
@end
