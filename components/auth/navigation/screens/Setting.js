//Avlokita's Work

import * as React from 'react'
import { StyleSheet, View, Text } from "react-native"

export default function Settings({navigation}){
    return(
        <View style = {styles.container}>
            <Text
                style = {styles.temp}>
                    This is settings
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