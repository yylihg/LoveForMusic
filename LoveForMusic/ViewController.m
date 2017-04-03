//
//  ViewController.m
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/3/12.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
//- (IBAction)goRN:(id)sender;
@property (weak, nonatomic) IBOutlet UITextField *usernameET;
@property (weak, nonatomic) IBOutlet UITextField *passwordET;
- (IBAction)rememberBtn:(id)sender;
- (IBAction)register:(id)sender;
@property (weak, nonatomic) IBOutlet UIActivityIndicatorView *progressBar;
- (IBAction)userDone:(id)sender;
- (IBAction)passwordDone:(id)sender;
- (IBAction)LoginBtn:(id)sender;
@property (weak, nonatomic) IBOutlet UIButton *rememberBtn;

@end

@implementation ViewController
@synthesize ToastView;
@synthesize mConnector;



- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    [AppDelegate storyBoradAutoLay:self.view];
    //初始化toastView
    [self initToastView];

    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


//- (IBAction)goRN:(id)sender {
//    ReactViewController *mReactViewController = [[ReactViewController alloc] init];
//    [self presentViewController:mReactViewController animated: true completion:^{
//        
//    }];
//}
- (IBAction)rememberBtn:(id)sender {
}

- (IBAction)register:(id)sender {
}
- (IBAction)userDone:(id)sender {
}

- (IBAction)passwordDone:(id)sender {
}

- (IBAction)LoginBtn:(id)sender {
    //判断是否正在登陆，是的话不做响应
    if (isLogining) {
        [self showDialog:@"正在登陆"];
        return;
    }
    //判断用户名是否为空，为空提示用户
    if ([self.usernameET.text isEqualToString:@""]) {
        self.usernameET.placeholder = @"用户名不能为空";
        [self showDialog:@"用户名不能为空"];
        return;
    }
    //判断密码是否为空，为空提示用户
    if ([self.passwordET.text isEqualToString:@""]) {
        self.passwordET.placeholder = @"密码不能为空";
        [self showDialog:@"密码不能为空"];
        return;
    }

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
-(void)showDialog:(NSString *)msg{
    
    ToastView.labelText = msg;
    [ToastView show:true];
    [ToastView hide:true afterDelay:1];
}


//连接网络成功后
-(void)connectFinishAction:(NSURLConnection *)connection resultJson:(NSString *)json{
    
}


@end
