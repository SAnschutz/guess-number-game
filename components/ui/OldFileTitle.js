//Can use this file and write platform-specific stuff into it
// (like the borderWidth below) or can use separate files (like the
//   Title.android.js and Title.ios.js files also in this folder)
//DON'T NEED TO ADJUST IMPORTS!!!!  JUST USE THE SAME FILE NAME
//Expo will choose which file to use based on the platform
//(i.e. IT WILL CHOOSE Title.android.js if on Android, Title.ios.js if on iOS)

import { Text, StyleSheet, Platform } from 'react-native';

import Colors from '../../constants/colors';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    // for border width, can do either of the syntaxes below, or can have separate Title.android.js and Title.ios.js files
    // If separate files, don't need to change imports!  Expo will choose which file to use based on the platform

    // borderWidth: Platform.OS === 'android' ? 2 : 0,either this or the syntax below works!
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
