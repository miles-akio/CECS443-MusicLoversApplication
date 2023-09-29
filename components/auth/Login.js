import React, { useEffect,Component }from 'react';
import { View, Button, TextInput, StyleSheet} from 'react-native'; 
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput 
            style={styles.input} 
            placeholder = "email" 
            onChangeText={(email)=> this.setState({email})}
        />

        <TextInput 
          style={styles.input} 
            placeholder = "password"
            secureEntry = {true} // secures passowrd text 
            onChangeText={(password)=> this.setState({password})}
        />

        <Button
            onPress ={()=> this.onLogIn()}
            title = "Login"
         />

        <Button
            title = "Forgot Password"
            onPress= {()=> this.props.navigation.navigate("ForgotPassword")}
          />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;