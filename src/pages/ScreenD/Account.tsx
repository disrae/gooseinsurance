import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { AccountNavigationProp, AccountTabScreens } from '../../navigation';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { logout } from '../../redux/authSlice';

import { WHITE } from '../../constants';
import { styles as s } from './styles';
import { formatAddress, formatBirthday } from '../../stringUtilities';

const [cake, home, rightArrowGhost] = [
  require('../../../assets-goose-insurance/ScreenD/profile-cake.webp'),
  require('../../../assets-goose-insurance/ScreenD/profile-home.webp'),
  require('../../../assets-goose-insurance/ScreenD/pink-right-arrow-ghost.webp'),
];

function Account() {
  const navigation = useNavigation<AccountNavigationProp>();
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) navigation.navigate(AccountTabScreens.Home);
  }, [user]);

  return (
    <View style={s.mainContainer}>
      <SafeAreaView style={{ backgroundColor: WHITE }} />
      <View style={s.detailsContainer}>
        <Text style={s.userName}>{user?.name}</Text>
        <View style={s.rowContainer}>
          <Image style={s.rowIcon} source={cake} />
          <Text style={s.rowText}>{formatBirthday(user?.birthday)}</Text>
        </View>
        <View style={s.rowContainer}>
          <Image style={s.rowIcon} source={home} />
          <Text style={s.rowText}>{formatAddress(user?.address)}</Text>
        </View>
        <Image style={s.rightArrow} source={rightArrowGhost} />
      </View>
      <View style={s.logoutContainer}>
        <TouchableOpacity
          style={s.logoutButton}
          onPress={() => dispatch(logout())}
        >
          <Text style={s.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Account;
