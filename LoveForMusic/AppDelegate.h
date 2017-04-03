//
//  AppDelegate.h
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/3/12.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;
@property float autoSizeScaleX;
@property float autoSizeScaleY;
//storyBoard view自动适配
+(void)storyBoradAutoLay:(UIView *)allView;

@end

