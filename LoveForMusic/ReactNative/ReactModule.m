//
//  ReactModule.m
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/5/1.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import "ReactModule.h"
#import "ResetPasswordViewController.h"

#import "UIView+React.h"
#import "RCTUIManager.h"
#import "RCTUtils.h"
#import "ReactViewController.h"
@implementation ReactModule
@synthesize bridge = _bridge;

RCT_EXPORT_METHOD(
                  podViewController:(nonnull NSNumber *)reactTag // Component 对象的 reactTag
                  resolver:(RCTPromiseResolveBlock)resolve // 这行
                  rejecter:(RCTPromiseRejectBlock)reject   // 和这行是可选的，如果需要在执行完毕后给 JavaScript 通知的话，就带上
)
{
    RCTUIManager *uiManager = self.bridge.uiManager;
    dispatch_async(uiManager.methodQueue, ^{
        [uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
            UIView *view = viewRegistry[reactTag];
            UIViewController *viewController = (UIViewController *)view.reactViewController;
//               [viewController dismissViewControllerAnimated:YES completion:nil];
            [viewController.navigationController popViewControllerAnimated:YES];
//            [viewController.navigationController popToViewController:[viewController.navigationController.viewControllers objectAtIndex:0] animated:YES];

            // It's now ok to do something with the viewController
            // which is in charge of the component.
        }];
    });
}


RCT_EXPORT_METHOD(pushReactViewController:(nonnull NSNumber *)reactTag component:(nonnull NSString *)componentName params:(NSDictionary *)params){
    RCTUIManager *uiManager = self.bridge.uiManager;
    dispatch_async(uiManager.methodQueue, ^{
        [uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
            UIView *view = viewRegistry[reactTag];
            UIViewController *viewController = (UIViewController *)view.reactViewController;
            ReactViewController *mReactViewController = [[ReactViewController alloc] init];
            mReactViewController.component = componentName;
            mReactViewController.params = params;
            [viewController.navigationController pushViewController:mReactViewController animated:YES];
        }];
    });
}

//RCT_EXPORT_METHOD(pushReactViewController:(nonnull NSNumber *)reactTag component:(nonnull NSString *)componentName){
//    [self pushReactViewController:reactTag component:componentName params:nil];
//}

RCT_EXPORT_METHOD(
                  pushViewController:(nonnull NSNumber *)reactTag // Component 对象的 reactTag
                  resolver:(RCTPromiseResolveBlock)resolve // 这行
                  rejecter:(RCTPromiseRejectBlock)reject   // 和这行是可选的，如果需要在执行完毕后给 JavaScript 通知的话，就带上
)
{
    RCTUIManager *uiManager = self.bridge.uiManager;
    dispatch_async(uiManager.methodQueue, ^{
        [uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
            UIView *view = viewRegistry[reactTag];
            UIViewController *viewController = (UIViewController *)view.reactViewController;
            
            UIStoryboard *stroyboard = [UIStoryboard storyboardWithName:@"Main" bundle:nil];
            
                ResetPasswordViewController *mMainViewController = [stroyboard instantiateViewControllerWithIdentifier:@"resetPasswordView"];
              [viewController.navigationController pushViewController:mMainViewController animated:YES];
//            [viewController.navigationController popToViewController:[viewController.navigationController.viewControllers objectAtIndex:0] animated:YES];
            
            // It's now ok to do something with the viewController
            // which is in charge of the component.
        }];
    });
}


RCT_EXPORT_METHOD(fetch:(NSString *)method params:(NSDictionary *)params callback:(RCTResponseSenderBlock)callback){
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    [manager.requestSerializer setValue:[Utils getUserInfo].accessToken forHTTPHeaderField:@"access-token"];
    [manager.requestSerializer setValue:[Utils getUserInfo].userToken forHTTPHeaderField:@"user-token"];
    if ([method isEqualToString:@"get"]) {
        [manager GET: [NSString stringWithFormat:@"%@%@" , [Utils getStringFromPlist:@"connectIp"],[params objectForKey:@"api"]] parameters:nil
            progress:^(NSProgress * _Nonnull downloadProgress) {
                
            }
             success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
//                 NSLog(@"ihg success: %@",responseObject);
//                 NSLog(@"ihg%@",[[responseObject objectForKey:@"errorMsg"] stringByReplacingPercentEscapesUsingEncoding:NSUTF8StringEncoding]);
                 callback(@[[NSNull null], responseObject]);
                 
             }
             failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull   error) {
//                  NSLog(@"ihg error: %@",error);
                 callback(@[error,]);
             }
         ];
    }else if ([method isEqualToString:@"post"]) {
        [manager POST: [NSString stringWithFormat:@"%@%@" , [Utils getStringFromPlist:@"connectIp"],[params objectForKey:@"api"] ]  parameters:[params objectForKey:@"params"]
             progress:^(NSProgress * _Nonnull uploadProgress) {
                 
             } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
//                     NSLog(@"ihg success: %@",responseObject);
//                     NSLog(@"ihg%@",[[responseObject objectForKey:@"errorMsg"] stringByReplacingPercentEscapesUsingEncoding:NSUTF8StringEncoding]);
                     callback(@[[NSNull null], responseObject]);
             } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
//                   NSLog(@"ihg error: %@",error);
                 callback(@[error,]);
             }
         ];

    }
   
}


RCT_EXPORT_MODULE();
//  对外提供调用方法（testNormalEvent为方法名，后面为参数，按顺序和对应数据类型在js进行传递）
RCT_EXPORT_METHOD(back){
    NSLog(@"ihg hbms,ahfba ");
//        UIViewController * rootVC = [UIApplication sharedApplication].keyWindow.rootViewController;
//    MainViewController *mMainViewController = [self.storyboard instantiateViewControllerWithIdentifier:@"mainView"];
//    [rootVC.navigationController pushViewController:mMainViewController animated:YES];
    UIViewController * rootVC = [UIApplication sharedApplication].keyWindow.rootViewController;

   
    dispatch_async(dispatch_get_main_queue(), ^{
        [rootVC.navigationController popToViewController:[rootVC.navigationController.viewControllers objectAtIndex:0] animated:YES];
    });
    
}
@end
