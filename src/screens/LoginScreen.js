import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Input } from 'react-native-elements'
import MyButton from '../components/MyButton';

const LoginScreen = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const emailInputRef = useRef(null);
    const passWordInputRef = useRef(null);

  return (

    <View style={styles.container}>
    
      <Text style={styles.pageHeader}>LoginScreen</Text>

      <Image style={styles.imageStyle} />

      <Input style={styles.inputStyle} 
      value={email}
      onChange={setEmail}
      />

      <Input style={styles.inputStyle} 
      value={password}
      onChange={setPassword}
      />

      <MyButton  />


    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageHeader: {
        fontWeight: 'bold',
        fontSize: 34,
    },
    inputStyle: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    imageStyle:{
        resizeMode: "contain",
        height: 100,
        width: 200
    }
})