import { StyleSheet } from 'react-native';

export const WHITE = '#FFF';
export const BLACK = '#000';
export const GOOSE_PINK = '#D5398D';
export const LIGHT_GRAY = '#D5398D';
export const DARK_GRAY = '#6C681';
export const commonStyles = StyleSheet.create({
  devBorder: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 0,
  },
  dragBar: {
    display: 'flex',
    width: '45%',
    height: '3px',
    justifyContent: 'center',
  },
});
