import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;
