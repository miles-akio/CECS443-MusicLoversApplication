import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';


export default function Login({navigation}) {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TextInput
              // Formatting the appearance
              style={styles.input} 
              // When empty this is the value thats filled
              placeholder = "Email"
          />
          <TextInput
              style={styles.input} 
              placeholder = "Password"
          />
          <Button
            title = "Login"
          />
          <Button
            title = "Forgot Password"
            onPress= {()=> navigation.navigate('ForgotPassword')}
          Button/>
    </View>
  )
};
// onPress={()=> navigation.navigate('Login')}/>
const onClick = () => {
  navigation.navigate('ForgotPassword');
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });