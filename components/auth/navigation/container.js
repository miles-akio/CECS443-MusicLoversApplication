import * as React from 'react'
import { StyleSheet, View, Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Setting from './screens/Setting';
import UserProfile from './screens/UserProfile';
import QHG from './screens/QHG'
import AddPostScreen from './screens/AddPostScreen'; 
import AddFriends from './screens/AddFriends';

const Tab = createBottomTabNavigator();

export default function Container({route,navigation}){
    const user = route.params?.user;
    const email = user.email
    const Uid = user.uid
    console.log("USER OBJECT FROM THE CONTAINER", {user})
    console.log("USER FROM THE CONTAINER:", {email})
    console.log("USER UID FROM THE CONTAINER:", {Uid})

    // Omitted settings until finalized --> Consider linking in user profile instead 
    return(

        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" component={Home} 
                initialParams={{ user }} // Pass user as a parameter
                />
                <Tab.Screen name="Add Post" component={AddPostScreen}
                initialParams={{ user }} // Pass user as a parameter
                />
                <Tab.Screen name="Add Friends" component={AddFriends} />
                <Tab.Screen name="QHG" component={QHG} />
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