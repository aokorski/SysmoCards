import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TutorialScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image
        source={require('../images/icons/back.png')}
        style={styles.backIcon}
      />
      </TouchableOpacity>
      <View style={styles.tutBox}>
        <Text style={styles.titleBoxText}>Level EASY</Text>
        <View style={styles.cardsContainer}>
          <View style={styles.card}></View>
          <View style={styles.card}></View>
        </View>
        <Text style={styles.instructionText}>The player must match pairs of appropriate pictures</Text>
        <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('Medium')}>
          <Text style={styles.skipButtonText}>SKIP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
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
  tutBox: {
    backgroundColor: '#EC7302',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 340,
    height: 460,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#fff',
    padding: 20,
  },
  titleBoxText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 20,
  },
  card: {
    width: 125,
    height: 213,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#000000',
  },
  instructionText: {
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: -10,
    marginBottom: 20,
  },
  skipButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 30,
    marginBottom: -20,
    width: 90,
    height: 30,
  },
  skipButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFA500',
  },
});
