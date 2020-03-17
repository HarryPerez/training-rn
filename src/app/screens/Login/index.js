import React, { Component } from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import backgroundImage from '../../../assets/general/bc_inicio.png';
import { SCREENS } from '../../../constants/screens';

import styles from './styles';

class Login extends Component {
  navigate = () => {
    const {
      navigation: { navigate }
    } = this.props;
    navigate(SCREENS.Home);
  };

  render() {
    return (
      <ImageBackground style={styles.loginContainer} source={backgroundImage}>
        <TouchableOpacity style={[styles.buttonContainer, styles.container]} onPress={this.navigate}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default withNavigation(Login);
