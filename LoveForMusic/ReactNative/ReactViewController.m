//
//  ReactViewController.m
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/3/12.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import "ReactViewController.h"
#import <React/RCTRootView.h>

@interface ReactViewController ()

@end

@implementation ReactViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSString * strUrl = @"http://192.168.1.8:8081/index.ios.bundle?platform=ios&dev=true";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"ReactIosProject"
                                                  initialProperties:nil
                                                      launchOptions:nil];
    self.view = rootView;
    //  也可addSubview，自定义大小位置
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
