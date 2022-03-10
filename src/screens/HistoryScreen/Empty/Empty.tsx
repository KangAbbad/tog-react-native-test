import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Empty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>Halaman Belum Tersedia.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#000000',
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export default Empty;
