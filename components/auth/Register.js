import React, {Component} from 'react'
import { View, Button, TextInput } from 'react-native' 
// TODO: Resolve Firebase imports 
import firebase from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//With the necessary imports to create Register page 
export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSingUp = this.onSingUp.bind(this) // Need to bind to give access to components state variables 
    }

    // TODO: Resolve Firebase function calls and imports 
    onSingUp(){
        /* 
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })   
        */
    }


  render() {
    return (
      <View>
        <TextInput 
            // When empty this is the value thats filled
            placeholder = " name"
            // JS assumes that the argugment we pass is same as the variable we created 
            onChangeText={(name)=> this.setState({name})}
        />

        <TextInput 
            placeholder = " email" 
            onChangeText={(name)=> this.setState({email})}
        />

        <TextInput 
            placeholder = " password"
            secureEntry = {true} // secures passowrd text 
            onChangeText={(name)=> this.setState({password})}
        />

        <Button
            onPress ={()=> this.onSignUp()}
            title = "Sign Up"
         />
        
      </View>
    )
  }
}

export default Register;
