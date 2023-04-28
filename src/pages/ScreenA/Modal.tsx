import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  BLACK,
  WHITE,
  devBorder,
  height,
  useShadow,
  width,
} from '../../constants.styles';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList, NavProp } from '../../navigation/stackNavigator';

function Modal({ navigation }: NavProp) {
  const navigator = useNavigation<MainStackParamList>();
  return (
    <View style={container}>
      {loginMethods.map(({ string, img, shouldNavigate }, i) => (
        <TouchableOpacity
          key={string}
          style={style(i).row}
          onPress={() => {
            if (shouldNavigate) navigation.navigate('Login');
          }}
        >
          <Image source={img} style={providerIcon} />
          <Text style={text}>{`Continue with ${string}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const loginMethods = [
  {
    img: require('../../../assets-goose-insurance/screenA/facebookv2.webp'),
    string: 'Facebook',
    shouldNavigate: false,
  },
  {
    img: require('../../../assets-goose-insurance/screenA/gplus.webp'),
    string: 'Google',
    shouldNavigate: false,
  },
  {
    img: require('../../../assets-goose-insurance/screenA/apple.webp'),
    string: 'Apple',
    shouldNavigate: false,
  },
  {
    img: require('../../../assets-goose-insurance/screenA/mailv2.webp'),
    string: 'Email',
    shouldNavigate: true,
  },
];

function style(i = 0) {
  const needsBottomBorder = i < loginMethods.length - 1;
  return StyleSheet.create({
    container: {
      alignSelf: 'center',
      height: height * 0.35,
      width: width * 0.8,
      borderRadius: 25,
      backgroundColor: WHITE,
      ...useShadow(4, 0.07, 0),
      zIndex: 10,
    },
    providerIcon: {
      width: 35,
      height: 35,
      marginHorizontal: 25,
      resizeMode: 'contain',
    },
    row: {
      flexDirection: 'row',
      flex: 1 / loginMethods.length,
      alignItems: 'center',
      borderBottomColor: '#CCC',
      borderBottomWidth: needsBottomBorder ? 1 : 0,
    },
    text: {
      fontSize: 14,
      color: BLACK,
    },
  });
}
const { container, providerIcon, text } = style();

export default Modal;
