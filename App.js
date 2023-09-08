import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name ="Landing" component = {LandingScreen} options={{headerShown:false}}/>
      <Stack.Screen name ="Register" component = {RegisterScreen}/>
      <Stack.Screen name ="Login" component = {LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
