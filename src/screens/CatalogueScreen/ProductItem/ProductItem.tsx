import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { currencyFormatter } from 'utils';

interface IProductItemProps {
  imageUrl: string;
  name: string;
  price: string;
}

const ProductItem = (props: IProductItemProps) => {
  const { imageUrl, name, price } = props;
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                imageUrl ??
                'https://assets.resepedia.id/assets/images/2021/02/1692211110068875-es-kopi-susu-gula-aren-640.jpg',
            }}
            resizeMode="contain"
            style={styles.imageThumbnail}
          />
        </View>
        <View style={styles.space} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.productNameText}>{name}</Text>
          <Text style={styles.productPriceText}>
            {currencyFormatter(Number(price))}/kg
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#522D07',
    padding: 15,
  },
  imageThumbnail: {
    height: 60,
    width: 60,
  },
  space: {
    flex: 0.15,
  },
  descriptionContainer: {
    flex: 1,
  },
  productNameText: {
    color: '#5C5C5C',
    fontSize: 16,
    fontFamily: 'OpenSans',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  productPriceText: {
    color: '#5C5C5C',
    fontSize: 16,
    fontFamily: 'OpenSans',
    fontStyle: 'italic',
  },
});

export default ProductItem;
