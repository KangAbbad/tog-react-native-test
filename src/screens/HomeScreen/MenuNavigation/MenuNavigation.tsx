import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LoginScreenNavigationProp } from 'dto/navigation';

import MyOutletInactiveIcon from '../../../assets/icons/shop_icon_inactive.svg';
import MyOutletActiveIcon from '../../../assets/icons/shop_icon_active.svg';
import OrderInactiveIcon from '../../../assets/icons/cart_icon_inactive.svg';
import OrderActiveIcon from '../../../assets/icons/cart_icon_active.svg';
import NotificationInactiveIcon from '../../../assets/icons/notification_icon_inactive.svg';
import NotificationActiveIcon from '../../../assets/icons/notification_icon_active.svg';
import HistoryInactiveIcon from '../../../assets/icons/history_icon_inactive.svg';
import HistoryActiveIcon from '../../../assets/icons/history_icon_active.svg';

const MenuNavigation = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [isMenuActive, onSetMenuActive] = useState([
    false,
    false,
    false,
    false,
  ]);

  const onToggleMenuActive = (index: number) => {
    onSetMenuActive(ps => {
      const copyMenuActive = [...ps];
      copyMenuActive[index] = !ps[index];
      return copyMenuActive;
    });
  };

  return (
    <View>
      <View style={styles.catalogBtnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CatalogueScreen')}>
          <Text style={styles.catalogBtnText}>CATALOG</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <View style={styles.menuItemContainer}>
          <TouchableHighlight
            underlayColor="#522D07"
            onPressIn={() => onToggleMenuActive(0)}
            onPressOut={() => onToggleMenuActive(0)}
            style={styles.menuBtnContainer}
            onPress={() => navigation.navigate('MyOutletScreen')}>
            <View style={styles.menuBtn}>
              {isMenuActive[0] ? (
                <MyOutletActiveIcon width={50} height={50} />
              ) : (
                <MyOutletInactiveIcon width={50} height={50} />
              )}
              <Text
                style={StyleSheet.flatten([
                  styles.menuBtnText,
                  { color: isMenuActive[0] ? '#FF972F' : '#522D07' },
                ])}>
                My Outlet
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.menuItemGap} />
        <View style={styles.menuItemContainer}>
          <TouchableHighlight
            underlayColor="#522D07"
            onPressIn={() => onToggleMenuActive(1)}
            onPressOut={() => onToggleMenuActive(1)}
            style={styles.menuBtnContainer}
            onPress={() => navigation.navigate('OrderScreen')}>
            <View style={styles.menuBtn}>
              {isMenuActive[1] ? (
                <OrderActiveIcon width={50} height={50} />
              ) : (
                <OrderInactiveIcon width={50} height={50} />
              )}
              <Text
                style={StyleSheet.flatten([
                  styles.menuBtnText,
                  { color: isMenuActive[1] ? '#FF972F' : '#522D07' },
                ])}>
                Order
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View
        style={StyleSheet.flatten([styles.menuContainer, { marginTop: 20 }])}>
        <View style={styles.menuItemContainer}>
          <TouchableHighlight
            underlayColor="#522D07"
            onPressIn={() => onToggleMenuActive(2)}
            onPressOut={() => onToggleMenuActive(2)}
            style={styles.menuBtnContainer}
            onPress={() => navigation.navigate('NotificationScreen')}>
            <View style={styles.menuBtn}>
              {isMenuActive[2] ? (
                <NotificationActiveIcon width={50} height={50} />
              ) : (
                <NotificationInactiveIcon width={50} height={50} />
              )}
              <Text
                style={StyleSheet.flatten([
                  styles.menuBtnText,
                  { color: isMenuActive[2] ? '#FF972F' : '#522D07' },
                ])}>
                Notification
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.menuItemGap} />
        <View style={styles.menuItemContainer}>
          <TouchableHighlight
            underlayColor="#522D07"
            onPressIn={() => onToggleMenuActive(3)}
            onPressOut={() => onToggleMenuActive(3)}
            style={styles.menuBtnContainer}
            onPress={() => navigation.navigate('HistoryScreen')}>
            <View style={styles.menuBtn}>
              {isMenuActive[3] ? (
                <HistoryActiveIcon width={50} height={50} />
              ) : (
                <HistoryInactiveIcon width={50} height={50} />
              )}
              <Text
                style={StyleSheet.flatten([
                  styles.menuBtnText,
                  { color: isMenuActive[3] ? '#FF972F' : '#522D07' },
                ])}>
                History
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  catalogBtnContainer: {
    alignItems: 'flex-end',
    marginRight: 40,
    marginBottom: 20,
  },
  catalogBtnText: {
    color: '#5C5C5C',
    textAlign: 'right',
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
  menuContainer: {
    flexDirection: 'row',
  },
  menuItemContainer: {
    flex: 1,
    height: '100%',
  },
  menuItemGap: {
    flex: 0.15,
  },
  menuBtnContainer: {
    borderWidth: 3,
    borderRadius: 35,
    borderColor: '#522D07',
    paddingTop: 35,
    paddingBottom: 20,
  },
  menuBtn: {
    alignItems: 'center',
  },
  menuBtnText: {
    color: '#522D07',
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    marginTop: 15,
  },
});

export default MenuNavigation;
