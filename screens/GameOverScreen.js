import { View, Image, Text, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone took{' '}
        <Text style={styles.highlightText}>{roundsNumber}</Text>{' '}
        rounds to guess the number
        <Text style={styles.highlightText}> {userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%', //this refers to the container of the element
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
