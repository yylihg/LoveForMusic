//
//  BaseViewController.m
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/4/3.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import "BaseViewController.h"

@interface BaseViewController ()

@end

@implementation BaseViewController
@synthesize ToastView;
@synthesize mConnector;


- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    [AppDelegate storyBoradAutoLay:self.view];
    //初始化toastView
    [self initToastView];
}

//初始化ToastView
-(void)initToastView{
    ToastView = [[MBProgressHUD alloc] initWithView:self.view];
    ToastView.delegate = self;
    
    [self.view addSubview:ToastView];
    
    ToastView.yOffset = 200.0f;
    ToastView.mode = MBProgressHUDModeText;
}

//展示ToastView
-(void)toast:(NSString *)msg{
    
    ToastView.labelText = msg;
    [ToastView show:true];
    [ToastView hide:true afterDelay:1];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(void)back{
    [self.navigationController popToViewController:[self.navigationController.viewControllers objectAtIndex:0] animated:YES];
}

//连接网络成功后
-(void)connectFinishAction:(NSURLConnection *)connection resultJson:(NSString *)json{
    
}
@end
