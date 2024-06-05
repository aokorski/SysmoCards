import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function test({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Email')}>
        <Text style={styles.buttonText}>Email sended!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Level')}>
        <Text style={styles.buttonText}>Level complete!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cong')}>
        <Text style={styles.buttonText}>Cong</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EasyGame')}>
        <Text style={styles.buttonText}>Memory Easy</Text>
      </TouchableOpacity>
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logoContainer: {
    width: 251,
    height: 242,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  logo: {
    width: 251,
    height: 242,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: '#E7E7E7',
    borderColor: '#EC7302',
    borderWidth: 3,
    borderRadius: 35,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginVertical: 10,
    width: 240,
    height: 65,
    alignItems: 'center',
    marginBottom: 0,
  },
  startButton: {
    backgroundColor: '#EC7302',
    borderColor: '#000',
    borderRadius: 40,
    paddingVertical: 25,
    paddingHorizontal: 50,
    elevation: 5,
    marginVertical: 10,
    width: 240,
    height: 80,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
  iconButtonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    overflow: 'hidden',
    marginBottom: -6
  },
  iconImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
});
