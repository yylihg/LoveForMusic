//
//  MainMenuModel.h
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/4/4.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface MainMenuModel : NSObject
@property(nonatomic,retain) NSString *title;//tab标题
@property(nonatomic,retain) NSString *component;//tab react 组件
@property(nonatomic,retain) NSString *selectedImg;//选中图片
@property(nonatomic,retain) NSString *unSelectedImg;//未选中图片
@end
