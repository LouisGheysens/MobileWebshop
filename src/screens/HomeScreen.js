import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import firebase from 'react-native-firebase'

const HomeScreen = ({ navigation  }) => {
  return (
    <View style={styles.container}>
      <Text>Welkom {firebase.auth().currentUser.email}</Text>

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    top: 25,
    backgroundColor: "#11DDAA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 55,
    width: 55,
  },
})