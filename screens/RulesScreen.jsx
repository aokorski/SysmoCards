import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RulesScreen({ navigation }) {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image
        source={require('../images/icons/back.png')}
        style={styles.backIcon}
      />
      </TouchableOpacity>
      <View style={styles.rulesContainerTitle}>
        <Text style={styles.rulesTitle}>RULES</Text>
        <Text style={styles.rulesText1}>
          Wygraj darmowe godziny programistyczne (kod)
        </Text>
        <View style={styles.bulletPointText}>
  <Text style={styles.bulletPoint}>• Nagroda obowiązuje tylko w software house Sysmo.pl</Text>
  <Text style={styles.bulletPoint}>• Ilość godzin uzależniona jest od ukończonego poziomu trudności</Text>
  <Text style={styles.bulletPoint}>• Kod ma ważność 3 miesiące od otrzymania</Text>
  <Text style={styles.bulletPoint}>• Aby skorzystać z kodu, skontaktuj się z nami :)
  </Text>
    </View>
    <Text style={styles.rulesText2}>Pełny regulamin znajdziesz tutaj</Text>
        <View style={styles.acceptContainer}>
          <TouchableOpacity onPress={() => setIsAccepted(!isAccepted)} style={styles.checkbox}>
            {isAccepted && <View style={styles.checkboxTick} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.nextButton, { opacity: isAccepted ? 1 : 0.5 }]}
            disabled={!isAccepted}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#EC7302',
    width: 58,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rulesContainerTitle: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 20,
    padding: 20,
    margin: 70,
    width: 300,
    height: 491,
    backgroundColor: '#D9D9D9',
  },
  rulesTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  rulesText1: {
    fontSize: 15,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000',
  },
  rulesText2: {
    fontSize: 15,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000',
  },
  bulletPointText: {
    fontSize: 15,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000',
  },
  bulletPoint: {
    fontSize: 16,
    color: 'black',
    marginBottom: 4,
  },
  rulesText2: {
    fontSize: 16,
    textAlign: 'justify',
    color: 'black',
  },
  acceptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    backgroundColor: '#FFF',
    marginBottom: -100,
  },
  checkboxTick: {
    width: 14,
    height: 14,
    backgroundColor: '#000',
  },
  label: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#EC7302',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: 121,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -100,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#000',
  },
});
