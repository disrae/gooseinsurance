import React from 'react';

import { Image, SafeAreaView, StatusBar, View, Text } from 'react-native';
import {
  bottomHalf,
  flag,
  logo,
  policyContainer,
  slogan,
  topHalf,
} from './styles';
import {
  useShadow,
  devBorder,
  height,
  GOOSE_PINK,
  DARK_GRAY,
} from '../../constants.styles';
import Modal from './Modal';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigation/stackNavigator';

type NavProp = NativeStackScreenProps<MainStackParamList, 'Home'>;

function ScreenA({ navigation }: NavProp) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ backgroundColor: GOOSE_PINK }} />
      <View style={topHalf}>
        <View style={useShadow()}>
          <Image
            source={require('../../../assets-goose-insurance/screenA/flag-ca.webp')}
            style={flag}
          />
        </View>
        <Image
          source={require('../../../assets-goose-insurance/screenA/goose-logo-lg-white.webp')}
          style={logo}
        />
        <Text style={slogan}>{'THE INSURANCE SUPER-APP'}</Text>
        <View style={{ height: height * 0.13 }} />
        <Modal navigation={navigation} />
      </View>
      <View style={bottomHalf}>
        <View style={policyContainer}>
          <Text style={{ fontSize: 11, fontWeight: 'bold', color: DARK_GRAY }}>
            Terms of Service | Privacy Policy
          </Text>
          <View style={{ height: 5 }} />
          <Text style={{ fontSize: 8, color: DARK_GRAY, fontWeight: '700' }}>
            Insurance is sold by Goose Insurance and underwritten by various
            companies.
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ScreenA;
