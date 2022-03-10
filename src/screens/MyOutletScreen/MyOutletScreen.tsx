import React from 'react';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';

import outletJson from 'dummyData/outlet.json';

import Header from './Header';
import OutletItem from './OutletItem';

const MyOutletScreen = () => {
  const renderItem = ({ item }: any) => (
    <OutletItem name={item.name} address={item.address} />
  );

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
        <FlatList
          data={outletJson}
          renderItem={renderItem}
          keyExtractor={item =>
            `${item.id}-${item.name.toLowerCase().replace(' ', '-')}`
          }
          style={styles.outletList}
          contentContainerStyle={styles.outletListContainer}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  outletListContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  outletList: {
    height: '100%',
  },
});

export default MyOutletScreen;
