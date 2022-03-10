import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from 'dto/navigation';

import LoginScreen from 'screens/LoginScreen';
import HomeScreen from 'screens/HomeScreen';
import CatalogueScreen from 'screens/CatalogueScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CatalogueScreen" component={CatalogueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
