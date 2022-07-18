import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function InstructionText({ children, style }) {
  //the style prop can be used to override the instructionText styles
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  );
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontFamily: 'open-sans',
    fontSize: 24,
  },
});
