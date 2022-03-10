import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Header from './Header';
import Empty from './Empty';

const HistoryScreen = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#522D07"
        barStyle="light-content"
        showHideTransition="fade"
      />
      <View style={styles.container}>
        <Header />
        <Empty />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default HistoryScreen;
