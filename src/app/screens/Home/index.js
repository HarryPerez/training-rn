import React from 'react';
import { View, FlatList } from 'react-native';

import Book from './components/Book';

import { BOOKS } from '../../../constants/data';

import styles from './styles';

function Home() {
  return (
    <View style={styles.homeContainer}>
      <FlatList
        data={BOOKS}
        renderItem={({ item }) => item.image_url && <Book props={item} />}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}

export default Home;
