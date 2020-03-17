import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function Book({ props }) {
  const { image_url: imageUrl, author, title } = props;
  return (
    <View style={styles.bookContainer}>
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

export default Book;
