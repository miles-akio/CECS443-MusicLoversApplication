// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from './components/auth/Landing'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name ="Landing" component = {LandingScreen} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;