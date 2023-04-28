import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { NavProp, Tab } from '../../navigation/AccountTabNavigator';
import Account from '../ScreenD/Account';
import {
  BG_PROD_PINK,
  BG_PROD_WHITE,
  DARK_TEXT_2,
  bottomContainer,
  introText,
  header,
  topContainer,
  triangle,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import {
  DARK_GRAY,
  HEADER_SIZE,
  LIGHT_GRAY,
  PINK,
  devBorder,
  useShadow,
  width,
} from '../../constants.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const gooseLogo = require('../../../assets-goose-insurance/ScreenC/goose-logo.webp');
const rewards = require('../../../assets-goose-insurance/ScreenC/rewards.webp');
const navProfile = require('../../../assets-goose-insurance/ScreenC/nav-profile.webp');
const navHome = require('../../../assets-goose-insurance/ScreenC/nav-home.webp');
const lifeInsurance = require('../../../assets-goose-insurance/ScreenC/life-insurance.gif');
const productImages = [
  require('../../../assets-goose-insurance/ScreenC/1.webp'),
  require('../../../assets-goose-insurance/ScreenC/2.webp'),
  require('../../../assets-goose-insurance/ScreenC/3.webp'),
  require('../../../assets-goose-insurance/ScreenC/4.webp'),
  require('../../../assets-goose-insurance/ScreenC/5.webp'),
];

export function AccountTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: 'red',
        tabBarActiveTintColor: PINK,
      }}
      tabBar={(props) => <AccountTabs {...props} />}
    >
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default function Products() {
  const { products, user } = useSelector((state: RootState) => state.auth);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: BG_PROD_WHITE }} />
      <View style={topContainer}>
        <View style={header}>
          <Image
            style={{
              resizeMode: 'contain',
              height: HEADER_SIZE - 10,
              width: 100,
              // ...devBorder,
            }}
            source={gooseLogo}
          />
          <Image
            style={{
              height: HEADER_SIZE - 30,
              resizeMode: 'contain',
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
              // ...devBorder,
            }}
            source={rewards}
          />
        </View>
        <Text style={introText}>{`Hi ${
          user?.name.split(' ')[0]
        }, what would you like to protect?`}</Text>
        <View style={{ alignItems: 'center', width: width * 0.4 }}>
          <Image
            style={{
              height: HEADER_SIZE * 2,
              width: HEADER_SIZE * 2,
              margin: 15,
              backgroundColor: BG_PROD_WHITE,
              resizeMode: 'contain',
              // ...devBorder,
            }}
            source={lifeInsurance}
          />
          <Text style={{ color: DARK_TEXT_2, fontSize: 12, fontWeight: '700' }}>
            Life & Health
          </Text>
        </View>
      </View>
      <View style={bottomContainer}>
        <View style={triangle} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {products.map((product) => (
            <View
              style={{
                width: '25%',
                height: width * 0.25,
                margin: width * 0.04,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: BG_PROD_WHITE,
                ...useShadow(2),
              }}
            >
              <Image
                style={{ resizeMode: 'contain', width: '65%', height: '55%' }}
                source={productImages[product.id]}
              />
              <Text style={{ fontSize: 12, textAlign: 'center' }}>
                {product.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

function AccountTabs({ navigation }: NavProp) {
  console.log(navigation.getState());
  return (
    <View style={{ flexDirection: 'row', height: 100 }}>
      <TouchableOpacity
        style={{
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Products')}
      >
        <View style={{}}>
          <Image
            style={{
              tintColor: navigation.getState().index === 0 ? PINK : DARK_GRAY,
              resizeMode: 'contain',
              width: 20,
              height: 35,
              alignSelf: 'center',
            }}
            source={navHome}
          />
          <Text style={{ fontSize: 11 }}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Account')}
      >
        <View style={{}}>
          <Image
            style={{
              tintColor: navigation.getState().index === 1 ? PINK : DARK_GRAY,
              resizeMode: 'contain',
              width: 20,
              height: 35,
              alignSelf: 'center',
            }}
            source={navProfile}
          />
          <Text style={{ fontSize: 11 }}>Home</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
