import { StyleSheet } from 'react-native';
import { HEADER_SIZE, LIGHT_TEXT, PINK, WHITE } from '../../constants';

export const styles = StyleSheet.create({
  bottomLogin: {
    flex: 0.15,
    backgroundColor: PINK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 10,
    color: LIGHT_TEXT,
    fontWeight: '600',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
