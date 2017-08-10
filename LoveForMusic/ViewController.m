//
//  ViewController.m
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/3/12.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import "ViewController.h"
#import "RegistViewController.h"
#import "ResetPasswordViewController.h"
#import "MainViewController.h"


@interface ViewController ()
//- (IBAction)goRN:(id)sender;
@property (weak, nonatomic) IBOutlet UITextField *usernameET;
@property (weak, nonatomic) IBOutlet UITextField *passwordET;

@property (weak, nonatomic) IBOutlet UIActivityIndicatorView *progressBar;
- (IBAction)userDone:(id)sender;
- (IBAction)passwordDone:(id)sender;
- (IBAction)LoginBtn:(id)sender;//登陆按钮
- (IBAction)resetPasswordBtn:(id)sender;//忘记密码按钮
- (IBAction)registBtn:(id)sender;//注册按钮

@end

@implementation ViewController
@synthesize ToastView;
@synthesize mConnector;
@synthesize userInfo = _userInfo;

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
    [self.navigationController setNavigationBarHidden:YES animated:animated];
}


- (void)viewWillDisappear:(BOOL)animated {
    [super viewWillDisappear:animated];
    
    [self.navigationController setNavigationBarHidden:NO animated:animated];
}


- (void)viewDidLoad {
    [super viewDidLoad];
    
    // Do any additional setup after loading the view, typically from a nib.
    [AppDelegate storyBoradAutoLay:self.view];
    //初始化toastView
    [self initToastView];

    self.progressBar.hidden = YES;//设置登陆进度条不可见

        //设置正在登陆中为未在登陆
    isLogining = false;
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

- (IBAction)userDone:(id)sender {
     [sender resignFirstResponder];
}

- (IBAction)passwordDone:(id)sender {
     [sender resignFirstResponder];
}

- (IBAction)LoginBtn:(id)sender {
    //判断是否正在登陆，是的话不做响应
    if (isLogining) {
        [self showDialog:@"正在登陆"];
        return;
    }
//    //判断用户名是否为空，为空提示用户
//    if ([self.usernameET.text isEqualToString:@""]) {
//        self.usernameET.placeholder = @"用户名不能为空";
//        [self showDialog:@"用户名不能为空"];
//        return;
//    }
//    //判断密码是否为空，为空提示用户
//    if ([self.passwordET.text isEqualToString:@""]) {
//        self.passwordET.placeholder = @"密码不能为空";
//        [self showDialog:@"密码不能为空"];
//        return;
//    }
    self.progressBar.hidden = NO;
    
    [self getAccessToken];

}

-(void)getAccessToken{
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    [manager GET: [NSString stringWithFormat:@"%@%@" , [Utils getStringFromPlist:@"connectIp"],@"/api/accessToken/find.do?appId=ep20170712235111&secret=34463963d038419e859e4f62f47c85de" ] parameters:nil
        progress:^(NSProgress * _Nonnull downloadProgress) {
        
        }
         success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
             NSLog(@"%@",responseObject);
            _userInfo= [[UserModel alloc] init];
             _userInfo.accessToken =[[responseObject objectForKey:@"data"] objectForKey:@"ACCESS_TOKEN"];
             _userInfo.userToken = @"";
             _userInfo.roleId = @"";
             [Utils setUserInfo:_userInfo];
             [self doLogin];
         }
         failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull   error) {
             [self showDialog:@"获取ACCESS_TOKEN失败"];
         }
     ];
}

-(void)doLogin{
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    [manager.requestSerializer setValue:_userInfo.accessToken forHTTPHeaderField:@"access-token"];
    NSMutableDictionary *parameters = [[NSMutableDictionary alloc] init];
//    [parameters setObject:self.usernameET.text forKey:@"username"];
//    [parameters setObject:self.passwordET.text forKey:@"password"];
    [parameters setObject:@"15959445322"forKey:@"username"];
    [parameters setObject:@"wbk123" forKey:@"password"];
    
    [manager POST: [NSString stringWithFormat:@"%@%@" , [Utils getStringFromPlist:@"connectIp"],@"/api/login/login.do" ]  parameters:parameters
         progress:^(NSProgress * _Nonnull uploadProgress) {
        
         } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
             _userInfo.userToken = [[responseObject objectForKey:@"data"] objectForKey:@"USER_TOKEN"];
             _userInfo.roleId = [[responseObject objectForKey:@"data"] objectForKey:@"ROLE_ID"];
             [Utils setUserInfo:_userInfo];
            [self goMainView];
             
             NSLog(@"ihg%@", responseObject);
//                NSLog(@"ihg%@",[[responseObject objectForKey:@"errorMsg"] stringByReplacingPercentEscapesUsingEncoding:NSUTF8StringEncoding]);
            
         } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
             
         }
     ];
    
}


-(void)goMainView{
    MainViewController *mMainViewController = [self.storyboard instantiateViewControllerWithIdentifier:@"mainView"];
    [self.navigationController pushViewController:mMainViewController animated:YES];
}


- (IBAction)resetPasswordBtn:(id)sender {
    ResetPasswordViewController *mResetPasswordViewController = [self.storyboard instantiateViewControllerWithIdentifier:@"resetPasswordView"];
    
    [self.navigationController pushViewController:mResetPasswordViewController animated:YES];
}

- (IBAction)registBtn:(id)sender {
    RegistViewController *mRegistViewController = [self.storyboard instantiateViewControllerWithIdentifier:@"registView"];
     [self.navigationController pushViewController:mRegistViewController animated:YES];
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
