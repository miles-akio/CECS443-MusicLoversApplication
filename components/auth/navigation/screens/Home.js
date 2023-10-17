//Avlokita's Work

import * as React from 'react'
import { StyleSheet, View, Text, Image } from "react-native"
import { FIRESTORE_DB } from '../../../../App';
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Home({route, navigation}){

    const user = route.params?.user;
    const email = user.email
    const db = FIRESTORE_DB; 

    const usersCollection = collection(db, 'users');

    getDocs(usersCollection)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log(`Name: ${data.name}`);
        });
      })
      .catch((error) => {
        console.error('Error querying Firestore:', error);
      });

    // NOTE: Container will be switched from what we import in styles 
    return(       
        <View> 
        
            <Text style ={styles.title}>Welcome {email}</Text>
      
        </View>
    )
        
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
        justifyContent: 'center',
        fontSize: 24, // Adjust the font size as needed
        fontWeight: 'bold', // Make the text bold
        color: 'black', // Set the text color to black
        },


  });