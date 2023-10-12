//Avlokita's Work

import * as React from 'react'
import { StyleSheet, View, Text, Image } from "react-native"



export default function Home({route, navigation}){

    const user = route.params?.user;
    const email = user.email

    return(        
        <View style = {styles.container}>
            <Image source={require('../../../../assets/background.png')}/>


            <Text style ={styles.title}>Welcome {email}</Text>


        </View>
    )
        /* <View style= {styles.container}w>
            <Text style={styles.temp} >
                Hello!                      
            </Text>   
        </View> */
}

// TODO: Add to styling sheet instead
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
    title: {
        fontSize: 24, // Adjust the font size as needed
        fontWeight: 'bold', // Make the text bold
        color: 'black', // Set the text color to black
        },


  });