import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import HamburgerMenuBtn from 'components/HamburgerMenuBtn';
import GreetingHeader from './GreetingHeader';
import MenuNavigation from './MenuNavigation';

const HomeScreen = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
        showHideTransition="fade"
      />
      <View style={styles.container}>
        <Image
          source={require('assets/icons/bg.png')}
          resizeMode="contain"
          style={styles.bgImage}
        />
        <ScrollView>
          <View style={styles.header}>
            <HamburgerMenuBtn />
            <GreetingHeader />
          </View>
          <View style={styles.menuNavigation}>
            <MenuNavigation />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFFFFF',
  },
  bgImage: {
    position: 'absolute',
    right: 0,
    bottom: -122,
    left: 0,
    height: 'auto',
    width: Dimensions.get('window').width,
    aspectRatio: 1,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuNavigation: {
    paddingHorizontal: 20,
    marginTop: 35,
  },
});

export default HomeScreen;
