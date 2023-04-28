import { Dimensions, StyleSheet } from 'react-native';
import { isIos } from './contants';

export const { width, height } = Dimensions.get('window');

// List of app colours.
export const WHITE = '#FFF';
export const BLACK = '#000';
export const LIGHT_GRAY = '#E7E7E7';
export const DARK_GRAY = '#6C6C81';
export const DARK_TEXT = '#14162C';
export const LIGHT_TEXT = '#737387';
export const PINK = '#F72697';
export const GOOSE_PINK = '#D5398D';

// List of app sizes.
export const FLAG_SIZE = 10;
export const LOGO_SIZE = 10;
export const HEADER_SIZE = 50;

// Shared styles.
export function useShadow(
  size = 1,
  shadowOpacity = 0.1,
  width = 2,
  height = 2
) {
  return isIos
    ? {
        shadowColor: BLACK,
        shadowOffset: {
          width: width * size,
          height: height * size,
        },
        shadowOpacity,
        shadowRadius: 2,
      }
    : {
        elevation: 4 * size,
      };
}

export const devBorder = {
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 0,
};
