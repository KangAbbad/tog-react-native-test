import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from 'dto/navigation';

import LoginScreen from 'screens/LoginScreen';
import HomeScreen from 'screens/HomeScreen';
import CatalogueScreen from 'screens/CatalogueScreen';
import MyOutletScreen from 'screens/MyOutletScreen';
import OrderScreen from 'screens/OrderScreen/OrderScreen';
import NotificationScreen from 'screens/NotificationScreen';
import HistoryScreen from 'screens/HistoryScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CatalogueScreen" component={CatalogueScreen} />
        <Stack.Screen name="MyOutletScreen" component={MyOutletScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
