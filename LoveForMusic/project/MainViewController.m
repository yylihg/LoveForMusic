//
//  MainViewController.m
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/4/3.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import "MainViewController.h"

#import "ReactViewController.h"
#import "MainMenuModel.h"
@interface MainViewController ()
//@property (weak, nonatomic) IBOutlet UITabBar *tabViewContainer;

@end

@implementation MainViewController

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
    
    [self initMap];
    
    NSMutableArray *tabItemsArray = [[NSMutableArray alloc] init];
    
    //首页
    MainMenuModel *homeModel = [[MainMenuModel alloc] init];
    homeModel.title = @"首页";
    homeModel.component = @"HomeView";
    homeModel.selectedImg = @"icon_main_forewarn_select";
    homeModel.unSelectedImg = @"icon_main_forewarn";
    
    [tabItemsArray addObject: homeModel];
    
    //看看
    MainMenuModel *SeeViewModel = [[MainMenuModel alloc] init];
    SeeViewModel.title = @"看看";
    SeeViewModel.component = @"SeeView";
    SeeViewModel.selectedImg = @"icon_main_forewarn_select";
    SeeViewModel.unSelectedImg = @"icon_main_forewarn";
    
    [tabItemsArray addObject: SeeViewModel];
    //我的
    MainMenuModel *IndividualViewModel = [[MainMenuModel alloc] init];
    IndividualViewModel.title = @"我的";
    IndividualViewModel.component = @"IndividualView";
    IndividualViewModel.selectedImg = @"icon_main_forewarn_select";
    IndividualViewModel.unSelectedImg = @"icon_main_forewarn";
    
    [tabItemsArray addObject: IndividualViewModel];
 
    
    
    NSMutableArray *viewArray = [[NSMutableArray alloc] init];
    NSDictionary *dictSelect = [NSDictionary dictionaryWithObjectsAndKeys:[UIColor whiteColor],NSForegroundColorAttributeName, nil];
    NSDictionary *dict =  [NSDictionary dictionaryWithObjectsAndKeys:[UIColor blackColor],
                           NSForegroundColorAttributeName,nil];
    MainMenuModel *mainMenuModel =  [[MainMenuModel alloc] init];
    for (int i = 0; i < tabItemsArray.count; i++) {
        mainMenuModel = [tabItemsArray objectAtIndex: i];
        ReactViewController *mReactViewController = [[ReactViewController alloc] init];
        mReactViewController.component = mainMenuModel.component;
        UIImage *icon_main_forewarn_select = [[UIImage imageNamed:mainMenuModel.selectedImg] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
        UIImage *icon_main_forewarn = [[UIImage imageNamed:mainMenuModel.unSelectedImg] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
        UITabBarItem *tabItem = [[UITabBarItem alloc] init];
        [tabItem setImage:icon_main_forewarn];
        tabItem.selectedImage = icon_main_forewarn_select;
        tabItem.title = mainMenuModel.title;
        
        [tabItem setTitleTextAttributes:dict forState:UIControlStateNormal];
        [tabItem setTitleTextAttributes:dictSelect forState:UIControlStateSelected];
        mReactViewController.tabBarItem = tabItem;
        [viewArray addObject:mReactViewController];
    }
    self.tabBar.backgroundColor =[UIColor colorWithRed:0 green:0 blue:255 alpha:1];
    self.viewControllers =viewArray;
}

-(void)initMap{
    self.locationManager = [[AMapLocationManager alloc] init];
    self.locationManager.delegate = self;
//    self.locationManager.distanceFilter = 200;
    //设置允许连续定位逆地理
    [self.locationManager setLocatingWithReGeocode:YES];
    //设置允许在后台定位
//    [self.locationManager setAllowsBackgroundLocationUpdates:YES];
    
      [self.locationManager startUpdatingLocation];
}

#pragma mark - AMapLocationManager Delegate

- (void)amapLocationManager:(AMapLocationManager *)manager didFailWithError:(NSError *)error
{
    NSLog(@"%s, amapLocationManager = %@, error = %@", __func__, [manager class], error);
}

- (void)amapLocationManager:(AMapLocationManager *)manager didUpdateLocation:(CLLocation *)location reGeocode:(AMapLocationReGeocode *)reGeocode
{
    NSLog(@"location:{lat:%f; lon:%f; accuracy:%f; reGeocode:%@}", location.coordinate.latitude, location.coordinate.longitude, location.horizontalAccuracy, reGeocode.formattedAddress);
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
