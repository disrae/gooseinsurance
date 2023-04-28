import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type BottomTabParamList = {
  Products: undefined;
  Account: undefined;
};

export type NavProp = NativeStackScreenProps<BottomTabParamList, 'Products'>;

export const Tab = createBottomTabNavigator<BottomTabParamList>();

export const Routes = {
  Products: 'Products',
  Account: 'Account',
};
