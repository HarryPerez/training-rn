import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import {navigationOptions} from '../config/navigationOptions';

import Login from './screens/Login';
import Home from './screens/Home';

const App: () => React$Node = () => {
  return <Home />;
};

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: App,
    },
  },
  navigationOptions,
);

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeNavigator,
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
