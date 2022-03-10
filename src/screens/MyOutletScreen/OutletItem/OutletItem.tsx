import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MyOutletIcon from '../../../assets/icons/shop_icon_active.svg';

interface IOutletItemProps {
  name: string;
  address: string;
}

const OutletItem = (props: IOutletItemProps) => {
  const { name, address } = props;
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <MyOutletIcon height={35} width={35} />
        </View>
        <View style={styles.space} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.outletNameText}>{name}</Text>
          <Text style={styles.outletAddressText}>{address}</Text>
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
    borderRadius: 20,
    backgroundColor: '#522D07',
    padding: 12,
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
  outletNameText: {
    color: '#5C5C5C',
    fontSize: 16,
    fontFamily: 'OpenSans',
    fontWeight: '700',
    fontStyle: 'italic',
  },
  outletAddressText: {
    color: '#5C5C5C',
    fontSize: 16,
    fontFamily: 'OpenSans',
    fontStyle: 'italic',
  },
});

export default OutletItem;
