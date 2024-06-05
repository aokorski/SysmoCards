import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RulesScreen from './screens/RulesScreen';
import DifficultyScreen from './screens/DifficultyScreen';
import TutEasyScreen from './screens/TutEasyScreen';
import TutMediumScreen from './screens/TutMediumScreen';
import TutHardScreen from './screens/TutHardScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';
import EmailSendedScreen from './screens/EmailSendedScreen';
import LevelScreen from './screens/LevelScreen';
import CongratsScreen from './screens/CongratsScreen';
import EasyMemoryScreen from './screens/EasyMemoryScreen';
import TestScreen from './screens/TestScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Rules">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Rules" component={RulesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Difficulty" component={DifficultyScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Easy" component={TutEasyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Medium" component={TutMediumScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Hard" component={TutHardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Support" component={SupportScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Email" component={EmailSendedScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Level" component={LevelScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Cong" component={CongratsScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="EasyGame" component={EasyMemoryScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="test" component={TestScreen} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
