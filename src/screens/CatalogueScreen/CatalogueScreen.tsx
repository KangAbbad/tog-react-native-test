import React from 'react';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';

import catalogueJson from 'dummyData/catalogue.json';

import Header from './Header';
import ProductItem from './ProductItem';

const CatalogueScreen = () => {
  const renderItem = ({ item }: any) => (
    <ProductItem imageUrl={item.image} name={item.name} price={item.price} />
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
          data={catalogueJson}
          renderItem={renderItem}
          keyExtractor={item =>
            `${item.id}-${item.name.toLowerCase().replace(' ', '-')}`
          }
          contentContainerStyle={styles.productListContainer}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  productListContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
});

export default CatalogueScreen;
