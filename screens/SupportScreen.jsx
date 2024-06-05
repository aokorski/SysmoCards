import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SupportScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSend = () => {
    if (!email || !message || !validateEmail(email) || message.length > 100) {
      setError('TRY AGAIN');
      return;
    }

    setEmail('');
    setMessage('');
    setError('');
    alert("Message sent!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image
        source={require('../images/icons/back.png')}
        style={styles.backIcon}
      />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          {error ? <Text style={styles.headerError}>{error}</Text> : null}
          <Text style={styles.header}>SUPPORT</Text>
          <View style={styles.innerContainer}>
            <Text style={styles.emailText}>Please enter your e-mail:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
            />
            <Text style={styles.messageText}>Message</Text>
            <TextInput
              style={[styles.messageInput]}
              onChangeText={setMessage}
              value={message}
              multiline={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleSend}>
              <Text style={styles.buttonText}>SEND</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
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
  innerContainer: {
    backgroundColor: '#EC7302',
    width: 300,
    height: 400,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#fff',
  },
  header: {
    fontSize: 36,
    color: '#FFF',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  headerError: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
  },
  emailText: {
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  messageInput: {
    width: 254,
    height: 137,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: 132,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#EC7302',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
