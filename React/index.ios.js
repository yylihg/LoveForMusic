'use strict'

import {AppRegistry} from 'react-native';

import ReactIosProject from "./component/ReactIosProject"
AppRegistry.registerComponent('ReactIosProject', () => ReactIosProject);

import IndividualView from "./views/me/IndividualPage"
AppRegistry.registerComponent('IndividualView', () => IndividualView);

import HomeView from "./views/home/HomePage"
AppRegistry.registerComponent('HomeView', () => HomeView);

import SeeView from "./views/see/SeePage"
AppRegistry.registerComponent('SeeView', () => SeeView);

import CollectListPage from "./views/me/CollectListPage"
AppRegistry.registerComponent('CollectListPage', () => CollectListPage);
//购买的视频
import BoughtVideoListPage from "./views/me/BoughtVideoListPage"
AppRegistry.registerComponent('BoughtVideoListPage', () => BoughtVideoListPage);
//课程列表
import CourcesListPage from "./views/me/CourcesListPage"
AppRegistry.registerComponent('CourcesListPage', () => CourcesListPage);

//约课
import SelectCourcesPage from "./views/cources/SelectCourcesPage"
AppRegistry.registerComponent('SelectCourcesPage', () => SelectCourcesPage);


//教师详情
import TeacherDetailPage from "./views/teacher/TeacherDetailPage"
AppRegistry.registerComponent('TeacherDetailPage', () => TeacherDetailPage);
//教师试看视频列表
import TeacherDemoVideoPage from "./views/teacher/TeacherDemoVideoPage"
AppRegistry.registerComponent('TeacherDemoVideoPage', () => TeacherDemoVideoPage);
//约课
import BookPage from "./views/cources/BookPage"
AppRegistry.registerComponent('BookPage', () => BookPage);