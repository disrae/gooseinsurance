import { StackNavigationProp } from '@react-navigation/stack';
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';

// Routes.
export enum RootStackScreens {
  LandingPage = 'LandingPage',
  Login = 'Login',
  AccountTabNavigator = 'AccountTabNavigator',
}
export enum AccountTabScreens {
  Home = 'Home',
  Account = 'Account',
}

// Param lists.
export type RootStackParamList = {
  [RootStackScreens.LandingPage]: undefined;
  [RootStackScreens.Login]: undefined;
  [RootStackScreens.AccountTabNavigator]: undefined;
};
export type AccountTabParamList = {
  [AccountTabScreens.Home]: undefined;
  [AccountTabScreens.Account]: undefined;
};

// Main stack types.
export type RootStackScreenProp<
  RouteName extends keyof RootStackParamList = RootStackScreens
> = StackNavigationProp<RootStackParamList, RouteName>;
export type RootStackNavigationProp<
  RouteName extends keyof RootStackParamList = RootStackScreens
> = StackNavigationProp<RootStackParamList, RouteName>;
export type RootStackRouteProp<
  RouteName extends keyof RootStackParamList = RootStackScreens
> = RouteProp<RootStackParamList, RouteName>;

// Tab navigator types.
export type AccountTabScreenProp<
  RouteName extends keyof AccountTabParamList = AccountTabScreens
> = BottomTabScreenProps<AccountTabParamList, RouteName>;
export type AccountNavigationProp<
  RouteName extends keyof AccountTabParamList = AccountTabScreens
> = BottomTabNavigationProp<AccountTabParamList, RouteName>;
export type AccountTabRouteProp<
  RouteName extends keyof AccountTabParamList = AccountTabScreens
> = RouteProp<AccountTabParamList, RouteName>;
