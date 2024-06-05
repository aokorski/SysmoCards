import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import randomstring from 'randomstring';

const App = () => {
  const [code, setCode] = useState(randomstring.generate(7));
  const [copiedText, setCopiedText] = useState('');

  const simulateCopyToClipboard = () => {
    setCopiedText(code);
    Alert.alert(`Copied successfully.`);
  };

  const handleEmailDecision = (decision) => {
    if (decision) {
      console.log('Email sent');
      Alert.alert('Email Sent', 'Your code has been sent via email.');
    } else {
      console.log('Email not sent');
      Alert.alert('Email Not Sent', 'You chose not to send the code via email.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <Text style={styles.title}>LEVEL COMPLETE!</Text>
        <Text style={styles.subtitle}>You won 5 hours of programming</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.code}>{code}</Text>
          <TouchableOpacity style={styles.copyButton} onPress={simulateCopyToClipboard}>
            <Text style={styles.copyButtonText}>COPY</Text>
          </TouchableOpacity>
        </View>
        {copiedText ? <Text style={styles.copiedText}>Copied Code: {copiedText}</Text> : null}
        <Text style={styles.emailQuestion}>Do you want to receive the code by email?</Text>
        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.emailButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>YES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.emailButton} onPress={() => navigation.navigate('Cong')}>
        <Text style={styles.buttonText}>NO</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  containerBox: {
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    marginVertical: 10,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#000',
  },
  code: {
    fontSize: 16,
    color: '#FFF',
    marginRight: 10,
  },
  copyButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
  },
  copyButtonText: {
    color: '#000',
  },
  copiedText: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 10,
  },
  emailQuestion: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emailButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#000',
  },
});

export default App;
