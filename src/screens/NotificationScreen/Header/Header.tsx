import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

import { LoginScreenNavigationProp } from 'dto/navigation';

const Header = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>
            <Icon name="chevron-left" size={30} color="#FF972F" />;
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Notification</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#522D07',
    paddingVertical: 20,
  },
  backBtnContainer: {
    flex: 0,
    paddingLeft: 20,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: '#FF972F',
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    marginLeft: -50,
  },
});

export default Header;
