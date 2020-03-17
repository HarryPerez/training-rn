import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import Book from './components/Book';

import {BOOKS} from '../../../constants/data';

import styles from './styles';

function Home() {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <FlatList
        data={BOOKS}
        renderItem={({item}) => item.image_url && <Book props={item} />}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
}

export default Home;
