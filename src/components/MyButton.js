import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'

const MyButton = (props) => {
  return (
      <Button style={styles.buttonStyle} {...props}>
      {props.children}
      </Button>
  )
}

export default MyButton

const styles = StyleSheet.create({
    buttonStyle: {
        color: 'lightblue',
    }
})