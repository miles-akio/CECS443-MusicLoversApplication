import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../../Styles'

export default function ForgotPassword({navigation}) {
  return (

    <View style={[styles.container, {backgroundColor: 'aliceblue'}]}>
        <TextInput style={styles.textInput} 
            // When empty this is the value in field
            placeholder = "Your MindBridge Email Address"
        />
        
        <TouchableOpacity style = {styles.button}> 
        {/* onPress ={()=> }> */}    
        <Text  style={styles.buttonText}  > Send email </Text>
        </TouchableOpacity>
    </View>
  )
};