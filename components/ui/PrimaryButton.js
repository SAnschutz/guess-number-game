import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
        // android_ripple={{ color: 'yellow' }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        } //for Pressables, style accepts either a standard styles opject
        // or it accepts a function that will be called when the item is pressed
        // "pressed" name is not up to you -- it's a property that exists already on the object that is passed to the function by RN
        // its value is a boolean that is set to true when the item is pressed
        // For ANY styles object, you can pass in an array of styles, and all will be used
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    //doing this for iOS to simulate android_ripple
    opacity: 0.75,
  },
});
