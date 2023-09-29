//Avlokita's Work

import * as React from 'react'
import { StyleSheet, View, Text, Image } from "react-native"


export default function Home({navigation}){
    return(
        <View style = {styles.container}>
            <Image source={require('../../../../assets/background.png')}/>
        </View>
    )
        /* <View style= {styles.container}w>
            <Text style={styles.temp} >
                Hello!                      
            </Text>   
        </View> */
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