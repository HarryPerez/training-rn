import React from 'react';
import { Image } from 'react-native';

import styles from './styles';
import { icons, ACTIVE, PASSIVE, mapRouteToIcon } from './constants/iconsName';

function IconTab({ route, focused }) {
  const iconName = `${mapRouteToIcon[route]}${focused ? ACTIVE : PASSIVE}`;
  const particularIcon = icons[iconName];
  return <Image style={styles.image} source={particularIcon} />;
}

export default IconTab;
