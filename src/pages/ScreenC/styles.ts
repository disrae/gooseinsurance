import { StyleSheet } from 'react-native/';
import { HEADER_SIZE, devBorder } from '../../constants.styles';

export const BG_PROD_WHITE = '#F9F9F9';
export const BG_PROD_PINK = '#FFCEE9';
export const DARK_TEXT = '#54566f';
export const DARK_TEXT_2 = '#14162C';

export const { bottomContainer, introText, header, topContainer, triangle } =
  StyleSheet.create({
    bottomContainer: {
      flex: 1.6,
      backgroundColor: BG_PROD_PINK,
      // ...devBorder,
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: HEADER_SIZE,
      backgroundColor: BG_PROD_WHITE,
      padding: 20,
      // ...devBorder,
    },
    topContainer: {
      flex: 1,
      backgroundColor: BG_PROD_WHITE,
    },
    introText: {
      color: DARK_TEXT,
      fontSize: 17,
      paddingHorizontal: 30,
      paddingVertical: 10,
      //   ...devBorder,
    },
    triangle: {
      position: 'absolute',
      top: -40,
      left: 60,
      width: 0,
      height: 0,
      borderTopWidth: 20,
      borderTopColor: 'transparent',
      borderBottomWidth: 20,
      borderBottomColor: BG_PROD_PINK,
      borderLeftWidth: 20,
      borderLeftColor: 'transparent',
      borderRightWidth: 20,
      borderRightColor: 'transparent',
    },
  });
