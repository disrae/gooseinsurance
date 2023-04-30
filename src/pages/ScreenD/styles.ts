import { StyleSheet } from 'react-native';
import { DARK_TEXT, PINK, WHITE } from '../../constants';

const BG_ACCOUNT = '#F4F4F4';

export const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: WHITE,
    padding: 10,
  },
  logoutButton: {
    backgroundColor: PINK,
    height: 60,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutContainer: {
    marginTop: 10,
    height: 120,
    backgroundColor: WHITE,
  },
  logoutText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '700',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: BG_ACCOUNT,
  },
  rightArrow: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
    margin: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  rowIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  rowText: {
    alignSelf: 'center',
    maxWidth: 200,
    fontSize: 14,
    color: DARK_TEXT,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: DARK_TEXT,
    padding: 15,
    paddingTop: 20,
  },
});
