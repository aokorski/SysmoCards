import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DifficultyScreen({ navigation }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const handlePlay = () => {
    if (selectedDifficulty) {
      navigation.navigate(selectedDifficulty);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image
        source={require('../images/icons/back.png')}
        style={styles.backIcon}
      />
      </TouchableOpacity>
      <View style={styles.middleContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>SELECT DIFFICULTY LEVEL</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, selectedDifficulty === 'EasyGame' ? styles.selected : null]}
            onPress={() => handleDifficultySelect('EasyGame')}
          >
            <Text style={styles.buttonText}>EASY</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, selectedDifficulty === 'Medium' ? styles.selected : null]}
            onPress={() => handleDifficultySelect('Medium')}
          >
            <Text style={styles.buttonText}>MEDIUM</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, selectedDifficulty === 'Hard' ? styles.selected : null]}
            onPress={() => handleDifficultySelect('Hard')}
          >
            <Text style={styles.buttonText}>HARD</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.playButton} onPress={handlePlay}>
        <Text style={styles.playButtonText}>PLAY</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#EC7302',
    width: 58,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: '#EC7302',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 241,
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  titleText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E7E7E7',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#EC7302',
    paddingVertical: 10,
    marginVertical: 10,
    width: 163,
    height: 54, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: '#EC7302',
  },
  playButton: {
    backgroundColor: '#EC7302',
    borderRadius: 20,
    paddingHorizontal: 100,
    alignSelf: 'stretch',
    margin: 30,
    width: 336,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  playButtonText: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center', 
  }
});
