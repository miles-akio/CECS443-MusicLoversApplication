import React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../auth/Styles'

export default function ForgotPassword({navigation}) {
  return (
    <View style={[styles.container, {backgroundColor: 'aliceblue'}]}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae posuere nulla, in dapibus tellus.</Text>
    </View>
  )
};

