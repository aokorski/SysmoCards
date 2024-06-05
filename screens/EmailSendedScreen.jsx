import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

  export default function EmailSendedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.middleContainer}>
          <Text style={styles.titleText}>Email sended!</Text>
          </View>
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>HOME PAGE</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.button}>
        <TouchableOpacity>
            <Text style={styles.buttonText}>QUIT</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  titleText: {
    fontSize: 36,
    color: '#FFF',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 250,
  },
  button: {
    backgroundColor: '#EC7302',
    borderRadius: 43,
    paddingVertical: 10,
    marginVertical: 10,
    width: 200,
    height: 70, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: '#EC7302',
  },
});
