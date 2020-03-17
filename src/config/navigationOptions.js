/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';
import { lightBlue, white } from '../constants/colors';

import headerBackground from '../assets/general/bc_nav_bar.png';
import back from '../assets/navigation_bar/ic_back.png';

import { stylesGenericOptions } from './navigationOptionsStyles';

export const navigationOptionsStyle = {
  headerBackground: () => <Image source={headerBackground} style={{ width: '100%' }} />,
  headerBackImage: () => <Image style={stylesGenericOptions.imageBack} source={back} />,
  headerBackTitle: null,
  shadowRadius: 0,
  shadowOffset: {
    height: 0
  },
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: lightBlue
  },
  headerTitleStyle: {
    color: white,
    fontWeight: 'bold',
    fontSize: 17
  }
};

export const navigationOptions = {
  defaultNavigationOptions: navigationOptionsStyle,
  headerTitleAlign: 'center'
};
