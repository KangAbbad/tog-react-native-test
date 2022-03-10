import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import MyOutletIcon from '../../../assets/icons/shop_icon.svg';
import OrderIcon from '../../../assets/icons/cart_icon.svg';
import NotificationIcon from '../../../assets/icons/notification_icon.svg';
import HistoryIcon from '../../../assets/icons/history_icon.svg';

const MenuNavigation = () => {
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
        <TouchableOpacity onPress={() => {}}>
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
            onPress={() => {}}>
            <View style={styles.menuBtn}>
              <MyOutletIcon width={50} height={50} />
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
            onPress={() => {}}>
            <View style={styles.menuBtn}>
              <OrderIcon width={50} height={50} />
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
            onPress={() => {}}>
            <View style={styles.menuBtn}>
              <NotificationIcon width={50} height={50} />
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
            onPress={() => {}}>
            <View style={styles.menuBtn}>
              <HistoryIcon width={50} height={50} />
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
    fontFamily: 'OpenSans',
    fontWeight: '700',
    fontSize: 18,
  },
  menuContainer: {
    flexDirection: 'row',
  },
  menuItemContainer: {
    flex: 1,
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
    fontWeight: '700',
    marginTop: 15,
  },
});

export default MenuNavigation;
