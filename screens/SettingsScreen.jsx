import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

export default function SettingsScreen({ navigation }) {
  const [isMusicEnabled, setMusicEnabled] = useState(50);
  const [isSfxEnabled, setSfxEnabled] = useState(50);  
  const [isVibrationEnabled, setVibrationEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image
        source={require('../images/icons/back.png')}
        style={styles.backIcon}
      />
      </TouchableOpacity>
      <Text style={styles.header}>SETTINGS</Text>
      <View style={styles.settingsContainer}>
        <View style={styles.setting}>
          <Text style={styles.settingText}>LANGUAGE</Text>
          <Image style={styles.flag} source={require('../images/lang/GB.png')} />
          <Image style={styles.flag} source={require('../images/lang/PL.png')} />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingText}>MUSIC</Text>
          <Slider
            style={styles.slider}
            value={isMusicEnabled}
            onValueChange={value => setMusicEnabled(value)}
            minimumValue={0}
            maximumValue={100}
            step={1}
            minimumTrackTintColor="#FFF"
            maximumTrackTintColor="#FFF"
            thumbTintColor="#000"
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingText}>SFX</Text>
          <Slider
            style={styles.slider}
            value={isSfxEnabled}
            onValueChange={value => setSfxEnabled(value)}
            minimumValue={0}
            maximumValue={100}
            step={1}
            minimumTrackTintColor="#FFF"
            maximumTrackTintColor="#FFF"
            thumbTintColor="#000"
          />
        </View>
        <View style={styles.setting}>
          <Text style={styles.settingText}>VIBRATIONS</Text>
          <Switch
            trackColor={{ false: "#FFF", true: "#FFF" }}
            thumbColor={isVibrationEnabled ? "#000" : "#000"}
            onValueChange={setVibrationEnabled}
            value={isVibrationEnabled}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.supportButton} onPress={() => navigation.navigate('Support')}>
        <Text style={styles.supportButtonText}>SUPPORT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingsContainer: {
    backgroundColor: '#EC7302',
    width: '80%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: 300,
    height: 338,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    marginTop: 25,
  },
  settingText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  flag: {
    width: 40,
    height: 30,
  },
  slider: {
    width: 200,
    height: 40,
  },
  supportButton: {
    backgroundColor: '#EC7302',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  supportButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
