//
//  ResetPasswordViewController.m
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/4/3.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import "ResetPasswordViewController.h"

@interface ResetPasswordViewController ()
@property (weak, nonatomic) IBOutlet UITextField *mobileEt;
@property (weak, nonatomic) IBOutlet UITextField *verifyEt;
@property (weak, nonatomic) IBOutlet UITextField *passwordEt;
@property (weak, nonatomic) IBOutlet UITextField *ensurePasswordEt;
- (IBAction)sureBtn:(id)sender;
//获取验证码
- (IBAction)getVerifyCode:(id)sender;

@end

@implementation ResetPasswordViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)sureBtn:(id)sender {
    if ([self.mobileEt.text isEqualToString:@""]) {
        self.mobileEt.placeholder = @"手机号不能为空";
        [self toast:@"手机号不能为空"];
        return;
    }
    if ([self.verifyEt.text isEqualToString:@""]) {
        self.verifyEt.placeholder = @"验证码错误";
        [self toast:@"验证码错误"];
        return;
    }
    if ([self.passwordEt.text isEqualToString:@""] ) {
        self.passwordEt.placeholder = @"密码不能为空";
        [self toast:@"密码不能为空"];
        return;
    }
    if(![self.passwordEt.text isEqualToString:self.ensurePasswordEt.text]){
        self.ensurePasswordEt.placeholder = @"密码不一致";
        [self toast:@"密码不一致"];
        return;
    }
    [self back];
}

- (IBAction)getVerifyCode:(id)sender {
}
@end
