import { StyleSheet } from 'react-native';
import {
  HEADER_SIZE,
  LIGHT_TEXT,
  PINK,
  WHITE,
  devBorder,
} from '../../constants.styles';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // ...devBorder,
  },
  image: {
    height: HEADER_SIZE,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  leftArrowContainer: {
    position: 'absolute',
    left: 10,
    padding: 5,
    zIndex: 2,
    // ...devBorder,
  },
  login: {
    flex: 0.15,
    backgroundColor: PINK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: WHITE,
  },
  loginText: {
    fontSize: 22,
    fontWeight: '800',
  },
  loginInputTitle: {
    size: 10,
    color: LIGHT_TEXT,
    fontWeight: '600',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 5,
    // ...devBorder,
  },
});

export const {
  headerContainer,
  image,
  leftArrowContainer,
  login,
  loginButtonText,
  loginText,
  loginInputTitle,
  mainContainer,
} = styles;
