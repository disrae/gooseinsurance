import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {
  RootStackScreens,
  RootStackParamList,
  RootStackScreenProp,
  RootStackNavigationProp,
  RootStackRouteProp,
  AccountTabScreens,
  AccountTabParamList,
  AccountTabScreenProp,
  AccountNavigationProp,
  AccountTabRouteProp,
} from './types';

import { LandingPage, Login, Home, Account } from '../pages';
import { DARK_GRAY, PINK, WHITE } from '../constants';

const [navProfile, navHome] = [
  require('../../assets-goose-insurance/ScreenC/nav-profile.webp'),
  require('../../assets-goose-insurance/ScreenC/nav-home.webp'),
];

// If this file becomes too large the different stacks can be
// defined in neighbouring files and exported as one navigator.

const RootStack = createStackNavigator<RootStackParamList>();
const AccountTab = createBottomTabNavigator<AccountTabParamList>();

function LandingStack() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={RootStackScreens.LandingPage}
        component={LandingPage}
      />
      <RootStack.Screen name={RootStackScreens.Login} component={Login} />
      <RootStack.Screen
        name={RootStackScreens.AccountTabNavigator}
        component={AccountTabNavigator}
      />
    </RootStack.Navigator>
  );
}

function AccountTabNavigator() {
  return (
    <AccountTab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <AccountTabs {...props} />}
    >
      <AccountTab.Screen name={AccountTabScreens.Home} component={Home} />
      <AccountTab.Screen name={AccountTabScreens.Account} component={Account} />
    </AccountTab.Navigator>
  );
}

function AccountTabs({ navigation }: BottomTabBarProps) {
  const { button, buttonText, mainContainer } = style();

  return (
    <View style={mainContainer}>
      <TouchableOpacity
        style={button}
        onPress={() => navigation.navigate('Home')}
      >
        <Image style={style(0).image} source={navHome} />
        <Text style={buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={button}
        onPress={() => navigation.navigate('Account')}
      >
        <Image style={style(1).image} source={navProfile} />
        <Text style={buttonText}>Account</Text>
      </TouchableOpacity>
    </View>
  );

  function style(tabIndex = 0) {
    return StyleSheet.create({
      button: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: { fontSize: 11 },
      image: {
        tintColor: navigation.getState().index === tabIndex ? PINK : DARK_GRAY,
        resizeMode: 'contain',
        width: 20,
        height: 35,
        alignSelf: 'center',
      },
      mainContainer: {
        flexDirection: 'row',
        height: 90,
        paddingBottom: 15,
        paddingHorizontal: 50,
        backgroundColor: WHITE,
      },
    });
  }
}

function MainNavigationStack() {
  return <LandingStack />;
}

export default MainNavigationStack;

export { RootStackScreens, AccountTabScreens };
export type {
  RootStackParamList,
  RootStackScreenProp,
  RootStackNavigationProp,
  RootStackRouteProp,
  AccountTabParamList,
  AccountTabScreenProp,
  AccountNavigationProp,
  AccountTabRouteProp,
};
