import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightpink',
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

  export {styles}