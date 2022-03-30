import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { red } from 'react-native-reanimated/src/reanimated2/Colors'

const MyErrorText = (props) => {
  return (
  <Text style={styles.errorMsg} {...props}>{ props.children }</Text>
  )
}

export default MyErrorText

const styles = StyleSheet.create({
    errorMsg: {
        color: 'red',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5
    }
})