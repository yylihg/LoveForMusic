'use strict'

import {AppRegistry} from 'react-native';

import ReactIosProject from "./component/ReactIosProject"
AppRegistry.registerComponent('ReactIosProject', () => ReactIosProject);

import IndividualView from "./views/me/IndividualView"
AppRegistry.registerComponent('IndividualView', () => IndividualView);

import HomeView from "./views/home/HomeView"
AppRegistry.registerComponent('HomeView', () => HomeView);