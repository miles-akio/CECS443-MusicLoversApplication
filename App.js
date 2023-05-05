import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, button, Pressable, TextInput } from 'react-native';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

import { getDatabase, ref, set, update, onValue, remove, get, child } from "firebase/database";
import { useState } from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq3F_9cn_1tJnNP1S3Soao4TCc79dOwaE",
  authDomain: "mind-bridge-a93eb.firebaseapp.com",
  projectId: "mind-bridge-a93eb",
  storageBucket: "mind-bridge-a93eb.appspot.com",
  messagingSenderId: "1052298113718",
  appId: "1:1052298113718:web:2f3f42634a541b55f7ac17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();

export default function App() {


  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastUserName, setLastUserName] = useState('');

  function createData() {

    set(ref(db, 'users/' + username), {          
      username: username,
      email: email  
    }).then(() => {
      // Data saved successfully!
      alert('data created!');    
  })  
      .catch((error) => {
          // The write failed...
          alert(error);
      });
}

  function getData() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${username}`)).then((snapshot) => {
    if (snapshot.exists()) {
      var data = snapshot.val()
      console.log(data);
      alert('data: ' + JSON.stringify(data))
    } else {
      console.log("No data available");
    }
    }).catch((error) => {
      console.error(error);   
    });  
  }


  return (

  <View style={styles.container}>
      <Text>firebase</Text>
      <TextInput value={username} 
      onChangeText={(username) => {
          setName(username)
          setLastUserName(username) // add this line
        }
      } 
      placeholder='Username' style={styles.TextBoxes}></TextInput>
      <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder='Email' style={styles.TextBoxes}></TextInput>
      <Button title='create data' onPress={createData}></Button>
      <Button title='get data' onPress={getData}></Button>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop: 10,
    marginBottom: 10,
    height: 47,
    borderRadius:5,
    backgroundColor: '#788ecc',
    width:200,
    alignItems:'center',
    justifyContent:'center',
 },
 buttonText:{
    color:'white',
    fontSize:15,
 },
 TextBoxes: {
  width:'90%',
  fontSize:18,
  padding:12,
  backgroundColor:'grey',
  marginVertical:10,
}

});