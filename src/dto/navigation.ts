import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  CatalogueScreen: undefined;
  MyOutletScreen: undefined;
  OrderScreen: undefined;
  NotificationScreen: undefined;
  HistoryScreen: undefined;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;
