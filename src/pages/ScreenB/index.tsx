import React, { useState } from 'react';
import {
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {
  DARK_GRAY,
  GOOSE_PINK,
  HEADER_SIZE,
  LIGHT_GRAY,
  PINK,
  WHITE,
  devBorder,
} from '../../constants.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigation/stackNavigator';
import {
  headerContainer,
  image,
  leftArrowContainer,
  login,
  loginButtonText,
  loginInputTitle,
  loginText,
  mainContainer,
} from './styles';

type NavProp = NativeStackScreenProps<MainStackParamList, 'Login'>;

const leftArrow = '\u2190';

function ScreenB({ navigation }: NavProp) {
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: WHITE }}>
      <SafeAreaView style={{ backgroundColor: WHITE }} />
      <StatusBar barStyle="dark-content" />
      <View style={headerContainer}>
        <View style={leftArrowContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{ fontSize: 40, color: '#CCC' }}>{leftArrow}</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={image}
          source={require('../../../assets-goose-insurance/ScreenB/goose-logo.webp')}
        />
      </View>
      <View style={mainContainer}>
        <View style={{ paddingVertical: 30, paddingLeft: 15 }}>
          <Text style={loginText}>Login</Text>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={{ paddingVertical: 15 }}>
            <Text style={loginInputTitle}>ENTER YOUR EMAIL</Text>
          </View>
          <TextInput
            style={{
              borderBottomColor: emailFocused ? PINK : LIGHT_GRAY,
              borderBottomWidth: 2,
            }}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <View style={{ paddingVertical: 15 }}>
            <Text style={loginInputTitle}>PASSWORD</Text>
          </View>
          <TextInput
            style={{
              borderBottomColor: passwordFocused ? PINK : LIGHT_GRAY,
              borderBottomWidth: 2,
            }}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity style={login}>
        <Text style={loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ScreenB;
