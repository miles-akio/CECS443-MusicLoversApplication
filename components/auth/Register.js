import React, {Component} from 'react'
import { View, Button, Text, Image, StyleSheet,TouchableOpacity, TextInput } from 'react-native' 
// TODO: Resolve Firebase imports 
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword } from '@firebase/auth'; 

//With the necessary imports to create Register page 
export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this) // Need to bind to give access to components state variables 
    }

    // TODO: Resolve Firebase function calls and imports 
    onSignUp(){
        const auth = FIREBASE_AUTH;
        const { email, password, name } = this.state;
        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })    
        
    }

  render() {
    return (
      <View style={styles.container}>
      
        <Image 
        // Currently Imnage is directly in the componentse folder need to figure out how to route from images folder
        source={require('./mdi_user.png')}
        style={styles.image}
        />

        <TextInput style = {styles.textInput}
                // When emptythis ist he value that's filled
                placeholder = "name"
                // JS assumes that the argugment we pass is same as the variable we created
                onChangeText={(name)=> this.setState({name})} 
            >
            </TextInput>

            <TextInput style = {styles.textInput}
                placeholder = "email"
                onChangeText={(email)=> this.setState({email})} 
            >
            </TextInput>

            <TextInput style = {styles.textInput}
                placeholder = "password"
                onChangeText={(password)=> this.setState({password})} 
            >
            </TextInput>

            <TouchableOpacity style = {styles.button}
                onPress ={()=> this.onSignUp()}>
                <Text style={styles.buttonText}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Register;

// TODO: Create a style sheet page and import it 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D4F0EF',
    },
    image: {
      justifyContent: 'center',
      width: 100, // Set the width of the image
      height: 100, // Set the height of the image
      resizeMode: 'contain', // You can adjust the resizeMode as needed (cover, contain, stretch, etc.)
      marginBottom: 15,
    },
    image2: {
        justifyContent: 'center',
        width: 400, // Set the width of the image
        height: 380, // Set the height of the image
        resizeMode: 'contain', // You can adjust the resizeMode as needed (cover, contain, stretch, etc.)
        margin: 30,
      },
    title: {
      fontSize: 24, // Adjust the font size as needed
      fontWeight: 'bold', // Make the text bold
      color: 'black', // Set the text color to black
      },
    button: {
      width: 200, // Set the width of the button
      height: 40, // Set the height of the button
      borderRadius: 20, // Adjust the border radius to make the edges rounded
      backgroundColor: 'white', // Button background color
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:10,
    },
    buttonText: {
      color: 'black',
      fontSize: 18,
      fontWeight: 400,
    },
    textInput: {
        width: '70%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
      },
  });