import { StyleSheet } from 'react-native';
import {
  DARK_GRAY,
  devBorder,
  FLAG_SIZE,
  GOOSE_PINK,
  LIGHT_GRAY,
  useShadow,
  WHITE,
  width,
} from '../../constants.styles';

const style = StyleSheet.create({
  bottomHalf: {
    flex: 0.56,
    backgroundColor: LIGHT_GRAY,
    zIndex: -1,
  },
  flag: {
    alignContent: 'flex-end',
    width: FLAG_SIZE * 3,
    height: FLAG_SIZE * 2,
    marginEnd: 20,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  flagContainer: {
    ...useShadow(),
  },
  logo: {
    height: '20%',
    marginVertical: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
    zIndex: 100,
  },
  policyContainer: {
    position: 'absolute',
    bottom: 0,
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    backgroundColor: LIGHT_GRAY,
    height: '46%',
    ...useShadow(4, undefined, 0),
  },
  slogan: {
    fontSize: 18,
    color: WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topHalf: {
    flex: 0.44,
    backgroundColor: GOOSE_PINK,
    ...useShadow(5, 0.08, 0),
  },
});

export default style;
