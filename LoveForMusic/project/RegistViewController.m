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
@property (weak, nonatomic) IBOutlet UITextField *userMobileEt;
@property (weak, nonatomic) IBOutlet UITextField *verifyCodeEt;
@property (weak, nonatomic) IBOutlet UITextField *passwordEt;
- (IBAction)userRegister:(id)sender;
- (IBAction)roleSelect:(id)sender;
- (IBAction)editDone:(id)sender;

@end

@implementation RegistViewController



- (void)viewDidLoad {
    [super viewDidLoad];
    role = GENERAL;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (IBAction)userRegister:(id)sender {
    //判断用户名是否为空，为空提示用户
    if ([self.userNameEt.text isEqualToString:@""]) {
        self.userNameEt.placeholder = @"用户名不能为空";
        [self toast:@"用户名不能为空"];
        return;
    }
    //判断手机号是否为空，为空提示用户
    if ([self.userMobileEt.text isEqualToString:@""]) {
        self.userMobileEt.placeholder = @"密码不能为空";
        [self toast:@"密码不能为空"];
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
    
    
    [self back];
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
@end
