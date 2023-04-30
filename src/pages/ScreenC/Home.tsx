import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import { BG_HOME_WHITE, styles as s } from './styles';

const [gooseLogo, rewards, lifeInsurance] = [
  require('../../../assets-goose-insurance/ScreenC/goose-logo.webp'),
  require('../../../assets-goose-insurance/ScreenC/rewards.webp'),
  require('../../../assets-goose-insurance/ScreenC/life-insurance.gif'),
];
const productImages = [
  require('../../../assets-goose-insurance/ScreenC/1.webp'),
  require('../../../assets-goose-insurance/ScreenC/2.webp'),
  require('../../../assets-goose-insurance/ScreenC/3.webp'),
  require('../../../assets-goose-insurance/ScreenC/4.webp'),
  require('../../../assets-goose-insurance/ScreenC/5.webp'),
];

export default function Home() {
  const { products, user } = useSelector((state: RootState) => state.auth);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: BG_HOME_WHITE }} />
      <View style={s.topContainer}>
        <View style={s.header}>
          <Image style={s.headerLogo} source={gooseLogo} />
          <Image style={s.headerGift} source={rewards} />
        </View>
        <Text style={s.introText}>
          {`Hi ${user?.name.split(' ')[0]}, what would you like to protect?`}
        </Text>
        <View style={s.selectionContainer}>
          <Image style={s.selectedIcon} source={lifeInsurance} />
          <Text style={s.selectedText}>Life & Health</Text>
        </View>
      </View>
      <View style={s.bottomContainer}>
        <View style={s.triangle} />
        <View style={s.productContainer}>
          {products.map((product) => (
            <View key={product.id} style={s.productCard}>
              <Image
                style={s.productImage}
                source={productImages[product.id - 1]}
              />
              <Text style={s.productText}>{product.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
