//
//  RegistViewController.m
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/4/3.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import "RegistViewController.h"

@interface RegistViewController ()
@property (weak, nonatomic) IBOutlet UITextField *userNameEt;
@property (weak, nonatomic) IBOutlet UITextField *verifyCodeEt;
@property (weak, nonatomic) IBOutlet UISegmentedControl *UserTypeSegment;
@property (weak, nonatomic) IBOutlet UITextField *passwordEt;
- (IBAction)userRegister:(id)sender;
- (IBAction)roleSelect:(id)sender;
- (IBAction)editDone:(id)sender;
- (IBAction)getVerificationCode:(id)sender;

@end

@implementation RegistViewController
@synthesize userInfo = _userInfo;


- (void)viewDidLoad {
    [super viewDidLoad];
    role = GENERAL;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (IBAction)userRegister:(id)sender {
    
    NSLog(@"ihg: %d",(int)[self.UserTypeSegment selectedSegmentIndex]);
    //判断用户名是否为空，为空提示用户
    if ([self.userNameEt.text isEqualToString:@""]) {
        self.userNameEt.placeholder = @"用户名不能为空";
        [self toast:@"用户名不能为空"];
        return;
    }
    //判断验证码是否为空，为空提示用户
    if ([self.verifyCodeEt.text isEqualToString:@""]) {
        self.verifyCodeEt.placeholder = @"验证码不能为空";
        [self toast:@"验证码错误"];
        return;
    }
    //判断密码是否为空，为空提示用户
    if ([self.passwordEt.text isEqualToString:@""]) {
        [self toast:@"验证码错误"];
        return;
    }
    [self getAccessToken];
//    [self back];
}

-(void)getAccessToken{
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    [manager GET: [NSString stringWithFormat:@"%@%@" , [Utils getStringFromPlist:@"connectIp"],@"/api/api/accessToken/find.do?appId=ep20170712235111&secret=34463963d038419e859e4f62f47c85de" ] parameters:nil
        progress:^(NSProgress * _Nonnull downloadProgress) {
            
        }
         success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
             NSLog(@"%@",responseObject);
             _userInfo= [[UserModel alloc] init];
             _userInfo.accessToken =[[responseObject objectForKey:@"data"] objectForKey:@"ACCESS_TOKEN"];
             _userInfo.userToken = @"";
             [Utils setUserInfo:_userInfo];
             [self regist];
         }
         failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull   error) {
             [self toast:@"获取验证码失败"];
         }
     ];
}


-(void)regist{
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    [manager.requestSerializer setValue:_userInfo.accessToken forHTTPHeaderField:@"access-token"];
//    [manager.requestSerializer setValue:@"sdds" forHTTPHeaderField:@"access-token"];
     NSLog(@"ihg accessToken %@", _userInfo.accessToken);
    NSMutableDictionary *parameters = [[NSMutableDictionary alloc] init];
    [parameters setObject:self.userNameEt.text forKey:@"mobile"];
    [parameters setObject:self.passwordEt.text forKey:@"password"];
    [parameters setObject:self.verifyCodeEt.text  forKey:@"mobileCode"];
    [parameters setObject:[NSString stringWithFormat:@"%d", (int)[self.UserTypeSegment selectedSegmentIndex]]forKey:@"isTeacher"];
     NSLog(@"ihg parameters %@",parameters);
    [manager POST: [NSString stringWithFormat:@"%@%@" , [Utils getStringFromPlist:@"connectIp"],@"/api/api/register/doRegister.do" ]  parameters:parameters
         progress:^(NSProgress * _Nonnull uploadProgress) {
             
         } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
             NSLog(@"ihg%@",[[responseObject objectForKey:@"errorMsg"] stringByReplacingPercentEscapesUsingEncoding:NSUTF8StringEncoding]);
             //    [self goMainView];
         } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
             NSLog(@"ihg error %@", error);

         }
     ];
}



//选择角色
- (IBAction)roleSelect:(UISegmentedControl *)sender {
    if (sender.selectedSegmentIndex == 0) {
        role = GENERAL;
    }else if (sender.selectedSegmentIndex == 1){
        role = TEACHER;
    }
}

- (IBAction)editDone:(id)sender {
     [sender resignFirstResponder];
}

- (IBAction)getVerificationCode:(id)sender {
    NSLog(@"ihg: %@",self.userNameEt.text);
    //判断用户名是否为空，为空提示用户
    if (self.userNameEt.text.length == 0|| [self.userNameEt.text isEqualToString:@""]) {
        self.userNameEt.placeholder = @"用户名不能为空";
        [self toast:@"用户名不能为空"];
        return;
    }
    
    NSLog(@"%@",[NSString stringWithFormat:@"%@%@%@" , [Utils getStringFromPlist:@"connectIp"],@"/api/api/register/fingMobileCode.do?mobile=", self.userNameEt.text] );
    
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    [manager GET: [NSString stringWithFormat:@"%@%@%@" , [Utils getStringFromPlist:@"connectIp"],@"/api/api/register/fingMobileCode.do?mobile=", self.userNameEt.text] parameters:nil
        progress:^(NSProgress * _Nonnull downloadProgress) {
           
        }
         success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
              NSLog(@"%@", responseObject);
         }
         failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull   error) {
            
         }
     ];
}
@end
