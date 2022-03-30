import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MyButton = ({ text, onPress}) => {
  return (
      <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
      <Text style={styles.buttonText}>{ text }</Text>
      </View>
      </TouchableOpacity>

  )
}

export default MyButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})