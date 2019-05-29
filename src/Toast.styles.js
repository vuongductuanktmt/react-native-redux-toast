import { StyleSheet } from 'react-native';

const colors = {
  black: '#000',
  blue: '#40C4FE',
  red: '#F55E64',
  transparent: 'transparent',
  yellow: '#FFD200'
};

export default StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    bottom: 10,
    zIndex: 100,
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageContainer: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    marginHorizontal: 20,
    overflow: 'hidden',
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  error: {
    backgroundColor: colors.red
  },
  warning: {
    backgroundColor: colors.yellow
  },
  shadow: {
    elevation: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 5
  }
});
