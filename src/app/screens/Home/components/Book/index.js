import React from 'react';
import { View, Image, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import { SCREENS } from '../../../../../constants/screens';

import styles from './styles';

function Book(props) {
  const { image_url: imageUrl, author, title } = props.props;
  const handleClick = () => {
    const {
      navigation: { navigate }
    } = props;
    navigate(SCREENS.BookDetail);
  };
  return (
    <View style={styles.bookContainer} onStartShouldSetResponder={handleClick}>
      <View style={styles.bookInfoContainer}>
        <Image
          source={{
            uri: imageUrl
          }}
          style={styles.bookImage}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
    </View>
  );
}

export default withNavigation(Book);
