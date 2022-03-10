import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const GreetingHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greetingWordContainer}>
        <Text style={styles.greetingWordText}>Welcome</Text>
        <Text style={styles.greetingWordText}>Partner :)</Text>
      </View>
      <View style={styles.greetingIconContainer}>
        <Image
          source={require('../../../assets/icons/banner.jpg')}
          resizeMode="contain"
          style={styles.greetingIconImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingWordContainer: {
    flex: 0,
  },
  greetingIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  greetingWordText: {
    color: '#522D07',
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
  },
  greetingIconImage: {
    height: 200,
    width: 200,
  },
});

export default GreetingHeader;
