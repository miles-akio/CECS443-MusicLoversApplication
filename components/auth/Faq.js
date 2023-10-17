import React from 'react';
import { Text, Button, View, Image, StyleSheet } from 'react-native';
import {styles} from '../../Styles'


export default function FAQ({navigation}) {
  return (

    <View style={styles.container}>
     
   <Text style={styles.Title}>Mind Bridge FAQs</Text>
   <Text style={styles.Text}> </Text>
   <Text style={styles.Text}>Q: What does Mind Bridge aim to do?</Text>
   <Text style={styles.Text}>A: Mind Bridge is an app that aims to connect like-minded students so they can connect with one another.</Text>
   <Text style={styles.Text}>  </Text>

   <Text style={styles.Text}>Q: Why is this app different than others?</Text>
   <Text style={styles.Text}>A: Mind Bridge aims to create a safe space where users can choose to be anonymous and share things as they wish.</Text>
   <Text style={styles.Text}>  </Text>

   <Text style={styles.Text}>Q: Who is the target audience? </Text>
   <Text style={styles.Text}>A: The target audience is the user that feels like they need to talk about their mental health or understand why they feel the way they do.</Text>
   <Text style={styles.Text}>   Our target audience was originally students, but the aim is to be inclusive to everyone</Text>

   </View>
  )
};