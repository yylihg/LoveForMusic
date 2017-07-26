//
//  MainViewController.h
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/4/3.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import <UIKit/UIKit.h>

#import <AMapFoundationKit/AMapFoundationKit.h>
#import <AMapLocationKit/AMapLocationKit.h>

@interface MainViewController : UITabBarController<AMapLocationManagerDelegate>

@property (nonatomic, strong) AMapLocationManager *locationManager;
@property (nonatomic, strong) UISegmentedControl *showSegment;

@end
