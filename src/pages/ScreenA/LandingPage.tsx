import React from 'react';
import { Image, SafeAreaView, StatusBar, View, Text } from 'react-native';

import { styles as s } from './styles';
import { useShadow, GOOSE_PINK, DARK_GRAY } from '../../constants';
import Modal from './Modal';

const [flagImg, gooseLogo] = [
  require('../../../assets-goose-insurance/screenA/flag-ca.webp'),
  require('../../../assets-goose-insurance/screenA/goose-logo-lg-white.webp'),
];

function LandingPage() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ backgroundColor: GOOSE_PINK }} />
      <View style={s.topHalf}>
        <View style={useShadow()}>
          <Image source={flagImg} style={s.flag} />
        </View>
        <Image source={gooseLogo} style={s.logo} />
        <Text style={s.slogan}>{'THE INSURANCE SUPER-APP'}</Text>
        <View style={s.verticalGap} />
        <Modal />
      </View>
      <View style={s.bottomHalf}>
        <View style={s.policyContainer}>
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

export default LandingPage;
