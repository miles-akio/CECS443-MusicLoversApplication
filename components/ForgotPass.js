import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';


export default function ForgotPassword({navigation}) {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
              // Creating a field to input email
              style={styles.input} 
              // When empty this is the value in field
              placeholder = "Email address"
          />
    </View>
  )
};

const styles = StyleSheet.create({
      input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });