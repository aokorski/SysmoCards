import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const openURL = async (url) => {
  const canOpen = await Linking.canOpenURL(url);
  if (canOpen) {
    await Linking.openURL(url);
  } else {
    console.error("Cannot open URL");
  }
}

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../images/home.png')}/>
      </View>
      <TouchableOpacity style={[styles.startButton]} onPress={() => navigation.navigate('Easy')}>
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>SETTINGS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Support')}>
        <Text style={styles.buttonText}>SUPPORT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('test')}>
        <Text style={styles.buttonText}>QUIT</Text>
      </TouchableOpacity>
      <View style={styles.iconButtonsContainer}>
        <LinearGradient
          colors={['#F03802', '#EC7302']}
          style={styles.iconButton}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
        <TouchableOpacity style={styles.iconButton}
        onPress={() => openURL('https://www.facebook.com/sysmo.rozwiazania.it/')}>
        <Image style={styles.iconImage} source={require('../images/fb.png')}/>
        </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#F03802', '#EC7302']}
          style={styles.iconButton}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
        <TouchableOpacity style={styles.iconButton}
        onPress={() => openURL('https://www.linkedin.com/company/sysmo-pl-rozwi-zania-it-sp-z-o-o/')}>
        <Image style={styles.iconImage} source={require('../images/in.png')}/>
        </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#F03802', '#EC7302']}
          style={styles.iconButton}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
        <TouchableOpacity style={styles.iconButton}
        onPress={() => openURL('https://www.instagram.com/')}>
        <Image style={styles.iconImage} source={require('../images/ig.png')}/>
        </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['#F03802', '#EC7302']}
          style={styles.iconButton}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
        <TouchableOpacity style={styles.iconButton}  
        onPress={() => openURL('https://sysmo.pl/')}>
        <Image style={styles.iconImage} source={require('../images/website.png')}
       />
        </TouchableOpacity>
        </LinearGradient>
        
      </View>
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
