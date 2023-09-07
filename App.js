// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TestLandingScreen from './components/auth/TestLanding'
import TestRegisterScreen from './components/auth/TestRegister'


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TestLanding">
        <Stack.Screen name ="TestLanding" component = {TestLandingScreen} options={{headerShown:true}}/>
        <Stack.Screen name ="TestRegister" component = {TestRegisterScreen} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;