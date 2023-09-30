import React, { useEffect,Component }from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native'; 
import {styles} from '../auth/Styles'
// TODO: Resolve Firebase imports 
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from '@firebase/auth'; 

//With the necessary imports to create Register page 
export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onLogIn = this.onLogIn.bind(this) // Need to bind to give access to components state variables 
    }

    // TODO: Resolve Firebase function calls and imports 
    onLogIn(){
        const auth = FIREBASE_AUTH;
        const { email, password } = this.state;
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("I AM SIGNED IN: ", {user});

          
          this.props.navigation.navigate('Container') //avlokita's work
        })
        .catch((error) => {
            console.log(error)
        })    
        
    }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
            style={styles.textInput} 
            placeholder = "email" 
            onChangeText={(email)=> this.setState({email})}
        />

        <TextInput style={styles.textInput} 
            placeholder = "password"
            secureEntry = {true} // secures passowrd text 
            onChangeText={(password)=> this.setState({password})}
        />
        <TouchableOpacity style = {styles.button}
            onPress ={()=> this.onLogIn()}>
        <Text  style={styles.buttonText}  > Login </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button}
            onPress= {()=> this.props.navigation.navigate("ForgotPassword")}>
        <Text  style={styles.buttonText}  > Forgot Password </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Login;