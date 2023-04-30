import { StyleSheet } from 'react-native/';
import { HEADER_SIZE, useShadow, width } from '../../constants';

export const BG_HOME_WHITE = '#F9F9F9';
const BG_HOME_PINK = '#FFCEE9';
const DARK_TEXT = '#54566f';
const DARK_TEXT_2 = '#14162C';
const CARD_SIZE = width * 0.25;

export const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1.5,
    backgroundColor: BG_HOME_PINK,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: HEADER_SIZE,
    backgroundColor: BG_HOME_WHITE,
    padding: 20,
  },
  headerLogo: {
    resizeMode: 'contain',
    height: HEADER_SIZE - 10,
    width: 100,
  },
  introText: {
    color: DARK_TEXT,
    fontSize: 17,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  headerGift: {
    height: HEADER_SIZE - 30,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  productCard: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    margin: width * 0.04,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: BG_HOME_WHITE,
    ...useShadow(2),
  },
  productImage: {
    resizeMode: 'contain',
    width: '65%',
    height: '55%',
  },
  productText: {
    fontSize: 12,
    textAlign: 'center',
  },
  selectionContainer: {
    alignItems: 'center',
    width: width * 0.4,
  },
  selectedIcon: {
    height: HEADER_SIZE * 2,
    width: HEADER_SIZE * 2,
    margin: 15,
    backgroundColor: BG_HOME_WHITE,
    resizeMode: 'contain',
  },
  selectedText: {
    color: DARK_TEXT_2,
    fontSize: 12,
    fontWeight: '700',
  },
  topContainer: {
    flex: 1,
    backgroundColor: BG_HOME_WHITE,
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
    borderBottomColor: BG_HOME_PINK,
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
  },
});
