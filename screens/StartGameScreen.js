import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native'; //Alert isn't a component, it's an object with several methods on it
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (
      isNaN(chosenNumber) ||
      chosenNumber <= 0 ||
      chosenNumber > 99
    ) {
      Alert.alert(
        //first argument is the title, second is the message, third is an array of buttons
        'Invalid number!',
        'Must be a number between 1 and 99.',
        [
          {
            text: 'OK',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ]
      );
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          autoFocus={true}
          keyboardType='number-pad' //value will always be a string, even if keyboardType is number-pad
          autoCapitalize='none' //not really necessary here
          autoCorrect={false} //not really necessary here
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
