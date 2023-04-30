import React, { useEffect, useState } from 'react';
import {
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp, RootStackScreens } from '../../navigation';

import { useSelector } from 'react-redux';
import { login } from '../../redux/thunks';

import { RootState, useAppDispatch } from '../../redux/store';
import { LIGHT_GRAY, PINK, WHITE } from '../../constants';
import { styles as s } from './styles';

const leftArrow = '\u2190';
const gooseLogo = require('../../../assets-goose-insurance/ScreenB/goose-logo.webp');

function Login() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<RootStackNavigationProp>();
  const [email, setEmail] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocused, setPasswordFocused] = useState(false);
  const { isLoading, user, error } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (user) {
      navigation.navigate(RootStackScreens.AccountTabNavigator);
    }
  }, [user]);

  function handleLogin() {
    dispatch(login(email, password));
  }

  return (
    <View style={{ flex: 1, backgroundColor: WHITE }}>
      <SafeAreaView style={{ backgroundColor: WHITE }} />
      <StatusBar barStyle="dark-content" />
      <View style={s.headerContainer}>
        <View style={s.leftArrowContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RootStackScreens.LandingPage)}
          >
            <Text style={{ fontSize: 40, color: '#CCC' }}>{leftArrow}</Text>
          </TouchableOpacity>
        </View>
        <Image style={s.image} source={gooseLogo} />
      </View>
      <View style={s.mainContainer}>
        <View style={{ paddingVertical: 30, paddingLeft: 15 }}>
          <Text style={s.loginText}>Login</Text>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={{ paddingVertical: 15 }}>
            <Text style={s.loginInputTitle}>ENTER YOUR EMAIL</Text>
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
            <Text style={s.loginInputTitle}>PASSWORD</Text>
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
        {/* Conditionally render error here */}
      </View>
      <TouchableOpacity style={s.bottomLogin} onPress={handleLogin}>
        <Text style={s.loginButtonText}>{isLoading ? '...' : 'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
