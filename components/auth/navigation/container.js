//Avlokita's Work

import * as React from 'react'
import { StyleSheet, View, Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Setting from './screens/Setting';
import UserProfile from './screens/UserProfile';

const Tab = createBottomTabNavigator();

export default function Container({navigation}){
    return(
        
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Add Post" component={Setting} />
                <Tab.Screen name="User Profile" component={UserProfile} />
            </Tab.Navigator>
        </NavigationContainer>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    temp : {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'blue',
    },
  });