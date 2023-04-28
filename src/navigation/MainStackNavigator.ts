import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Login: undefined;
  Products: undefined;
  User: undefined;
};

export type NavProp = NativeStackScreenProps<MainStackParamList, 'Home'>;

export const Stack = createNativeStackNavigator<MainStackParamList>();

export const Routes = {
  Home: 'Home',
  Login: 'Login',
};
