//
//  AppDelegate.m
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/3/12.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import "AppDelegate.h"
#import "ViewController.h"
#import <AMapFoundationKit/AMapFoundationKit.h>
#define ScreenHeight [[UIScreen mainScreen] bounds].size.height//获取屏幕高度，兼容性测试
#define ScreenWidth [[UIScreen mainScreen] bounds].size.width//获取屏幕宽度，兼容性测试
@interface AppDelegate ()

@end

@implementation AppDelegate


- (void)configureMapAPIKey
{
    [AMapServices sharedServices].apiKey =@"7221cde41db5cf0ab495d6c31e37b18f";
}


//storyBoard view自动适配
+(void)storyBoradAutoLay:(UIView *)allView
{
    for (UIView *temp in allView.subviews) {
        temp.frame = CGRectMake1(temp.frame.origin.x, temp.frame.origin.y, temp.frame.size.width, temp.frame.size.height);
        for (UIView *temp1 in temp.subviews) {
            temp1.frame = CGRectMake1(temp1.frame.origin.x, temp1.frame.origin.y, temp1.frame.size.width, temp1.frame.size.height);
            for (UIView *temp2 in temp1.subviews) {
                temp2.frame = CGRectMake1(temp2.frame.origin.x, temp2.frame.origin.y, temp2.frame.size.width, temp2.frame.size.height);
                for (UIView *temp3 in temp2.subviews) {
                    temp3.frame = CGRectMake1(temp3.frame.origin.x, temp3.frame.origin.y, temp3.frame.size.width, temp3.frame.size.height);
                }
            }
        }
    }
}

//修改CGRectMake
CG_INLINE CGRect
CGRectMake1(CGFloat x, CGFloat y, CGFloat width, CGFloat height)
{
    AppDelegate *myDelegate = [[UIApplication sharedApplication] delegate];
    CGRect rect;
    rect.origin.x = x * myDelegate.autoSizeScaleX; rect.origin.y = y * myDelegate.autoSizeScaleY;
    rect.size.width = width * myDelegate.autoSizeScaleX; rect.size.height = height * myDelegate.autoSizeScaleY;
    return rect;
}


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    AppDelegate *myDelegate = [[UIApplication sharedApplication] delegate];
    
    [self configureMapAPIKey];
    NSLog(@"ScreenHeight :%f",ScreenHeight);
    if(ScreenHeight >= 480){
        myDelegate.autoSizeScaleX = ScreenWidth/320;
        myDelegate.autoSizeScaleY = ScreenHeight/568;
    }else{
        myDelegate.autoSizeScaleX = 1.0;
        myDelegate.autoSizeScaleY = 1.0;
    }

    // 初始化Nav
//    _nav = [[UINavigationController alloc]initWithRootViewController:application.delegate.window.rootViewController];
    
//   application.delegate.window.rootViewController = _nav;
    return YES;
}





- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
