import { StyleSheet, Platform, Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const colors = {
  black: '#000',
  blue: '#40C4FE',
  red: '#F55E64',
  transparent: 'transparent',
  yellow: '#FFD200',
  green: '#4CAF50'
};

export default StyleSheet.create({
  container: {
    backgroundColor: colors.transparent,
    zIndex: 100,
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  top: {
    top: getStatusBarHeight() + 10,
  },
  bottom: {
    bottom: 10
  },
  center: {
    top: Dimensions.get("window").height/2
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
  success: {
    backgroundColor: colors.green
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
