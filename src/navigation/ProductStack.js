import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

const ProductStack = () => {
  const navigation = useNavigation();


  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#f4511e",
        },
      }}
    >

    </Stack.Navigator>
  )
}

export default ProductStack

const styles = StyleSheet.create({})