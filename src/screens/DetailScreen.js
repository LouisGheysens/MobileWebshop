import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton, { myButton } from '../components/MyButton'
import { Button } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'

const DetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text>DetailScreen</Text>

      <Text
      //Name in center

      />


      <Image
      //Image left
      />

      <Text
      //Price under name
      />


      <Text
      //Rating under price
      />


      <View style={{ flexDirection: "row"}}>
      <View>
      <Pressable
      style={styles.button}
      title="Ga terug"
      onPress={() => {
          navigation.navigate('ProductScreen')
        }}
        />

      <Pressable
      style={styles.button}
      title="Bestel"
      onPress={() => {
        //Plaats product in de state! => State de gehele applicatie de producten bij.
        }}
        />
      </View>
      </View>

    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  
})