import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const ProductScreen = ({ props }) => {

  // READ DATA FROM FIREBASE IN FLATLIST
  return (
    <SafeAreaView>

    <Text>name product....</Text>


    <ScrollView>
    //Products with scroll functionality
    <FlatList
    //Products with name + image
    //Image left side + name center 
    //Onpress on item to navigate to DetailScreen
    />
    </ScrollView>
    </SafeAreaView>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})