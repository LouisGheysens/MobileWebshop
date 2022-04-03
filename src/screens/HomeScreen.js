import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import firebase from 'react-native-firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../services/Firebase';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>


      <Text>Welkom : {auth.currentUser?.email}</Text>
      
      <TouchableOpacity
      onPress={handleSignOut}
      style={styles.button}
      >
      <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('ProductScreen')
        }}
      >
        <Text>Ga verder</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 700,
    fontSize: '16'
  },
})