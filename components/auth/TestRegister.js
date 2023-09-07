import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

export default function TestRegisterScreen ({navigation}) {
    const [text, onChangeText] = React.useState('Enter text here');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Test Input Text Box</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} clearTextOnFocus={true}/>
    </View>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});