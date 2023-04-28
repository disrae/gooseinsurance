import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { logout, selectAuthState } from '../../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { WHITE } from '../../constants.styles';
import {
  rowContainer,
  detailsContainer,
  mainContainer,
  rowIcon,
  rowText,
  userName,
  rightArrow,
  logoutContainer,
  logoutButton,
  logoutText,
} from './styles';
import { NavProp } from '../../navigation/MainStackNavigator';

export default function Account({ navigation }: NavProp) {
  const { isLoading, products, user } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log({ user });
    if (!user) navigation.navigate('Home');
  }, [user]);

  return (
    <View style={mainContainer}>
      <SafeAreaView style={{ backgroundColor: WHITE }} />
      <View style={detailsContainer}>
        <Text style={userName}>{user?.name}</Text>
        <View style={rowContainer}>
          <Image
            style={rowIcon}
            source={require('../../../assets-goose-insurance/ScreenD/profile-cake.webp')}
          />
          <Text style={rowText}>{formatBirthday(user?.birthday)}</Text>
        </View>
        <View style={rowContainer}>
          <Image
            style={rowIcon}
            source={require('../../../assets-goose-insurance/ScreenD/profile-home.webp')}
          />
          <Text style={rowText}>{formatAddress(user?.address)}</Text>
        </View>
        <Image
          style={rightArrow}
          source={require('../../../assets-goose-insurance/ScreenD/pink-right-arrow-ghost.webp')}
        />
      </View>
      <View style={logoutContainer}>
        <TouchableOpacity
          style={logoutButton}
          onPress={() => dispatch(logout())}
        >
          <Text style={logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function formatBirthday(birthdayString: string | undefined) {
  if (!birthdayString) return '';

  const date = new Date(birthdayString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
}

function formatAddress(address: string | undefined) {
  if (!address) return '';

  const formattedAddress = address
    .replace(/(\d+)/, '$1\n')
    .replace(/([A-Z]{2}\s)/, '$1\n')
    .replace('\n', '');
  return formattedAddress;
}
