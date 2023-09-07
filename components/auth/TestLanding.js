import React from 'react'
import { Text, Button, View } from 'react-native'

export default function TestLanding ({navigation}) {
    return (
      <View style={{flex:1, justifyContent: 'center'}}>
        <Button
          title = "TestRegister"
          onPress={()=> navigation.navigate("TestRegister")}/>
  
        <Button
          title = "TestLogin"
          onPress={()=> navigation.navigate("TestLogin")}/>
  
      </View>
    )
  }