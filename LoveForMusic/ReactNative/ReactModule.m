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
            [viewController.navigationController popToViewController:[viewController.navigationController.viewControllers objectAtIndex:0] animated:YES];

            // It's now ok to do something with the viewController
            // which is in charge of the component.
        }];
    });
}


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
