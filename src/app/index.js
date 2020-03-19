import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createStackNavigator } from 'react-navigation-stack';

import { navigationOptions, defaultNavigationOptionsTab } from '../config/navigationOptions';

import Login from './screens/Login';
import Home from './screens/Home';
import BookDetail from './screens/BookDetail';
import Settings from './screens/Settings';

const App: () => React$Node = () => {
  return <Home />;
};

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: App
    },
    BookDetail: {
      screen: BookDetail
    }
  },
  navigationOptions
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    Settings
  },
  {
    defaultNavigationOptions: defaultNavigationOptionsTab
  }
);

const AppNavigator = createSwitchNavigator(
  {
    App: TabNavigator,
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: 'Login'
  }
);

export default createAppContainer(AppNavigator);
