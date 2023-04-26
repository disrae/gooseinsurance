import React from 'react';

import { SafeAreaView, View } from 'react-native';
import style from './styles';
import { commonStyles } from '../../constants.styles';

const { safeArea, topContainer } = style;

function ScreenA() {
  return (
    <SafeAreaView style={safeArea}>
      <View style={topContainer}></View>
    </SafeAreaView>
  );
}

export default ScreenA;
