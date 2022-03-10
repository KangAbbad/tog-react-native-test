import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const HamburgerMenuBtn = () => {
  return (
    <TouchableOpacity>
      <View style={styles.hamburgerStripe} />
      <View
        style={StyleSheet.flatten([
          styles.hamburgerStripe,
          styles.hamburgerStripeGap,
        ])}
      />
      <View style={styles.hamburgerStripe} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hamburgerStripe: {
    borderRadius: 10,
    height: 5,
    width: 25,
    backgroundColor: '#522D07',
  },
  hamburgerStripeGap: {
    borderRadius: 10,
    marginVertical: 3,
  },
});

export default HamburgerMenuBtn;
