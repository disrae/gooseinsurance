import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { HEADER_SIZE, WHITE, devBorder } from '../../constants.styles';
import { SafeAreaView } from 'react-native-safe-area-context';

function ScreenB() {
  return (
    <View style={{ flex: 1, backgroundColor: WHITE }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ ...devBorder }} />
      <View style={{ ...devBorder, height: HEADER_SIZE }}>
        <Image style={{}} source={{}} />
        <Image
          style={{ height: 50, resizeMode: 'contain' }}
          source={require('../../../assets-goose-insurance/ScreenB/goose-logo.webp')}
        />
      </View>
    </View>
  );
}

export default ScreenB;
