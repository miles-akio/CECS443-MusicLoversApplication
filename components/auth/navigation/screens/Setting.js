import * as React from 'react'
import { StyleSheet, View, Text , Image, ImageBackground} from "react-native"

export default function Settings({navigation}){

    return(
        <View style = {styles.container}>
            <Image source={require('./background2.png')}/>
            <Text
                style = {styles.temp}>
                    Main Feed
            </Text>
        </View>
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