import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useField } from 'formik';
import firestore from '@react-native-firebase/firestore'
import { db } from '../services/Firebase';


const ProductScreen = ({ navigation }) => {

  const[data, setData] = useState([]);


  //Read products data from Firebase database
  const fetchData = async () =>{
    const response = db.collection('products');
    const data = await response.get();
    data.docs.forEach(item => {
      setData([...data,item.data])
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <SafeAreaView>
    <ScrollView>
    <FlatList
    data={data.products}
    keyExtractor={(x) => x.name}    renderItem={({x, index}) => (
      <Pressable
      onPress={() => 
      navigation.navigate("DetailsScreen", {
        itemIdx: index,
        name: x.name
      })
    }
    style={styles.listItem}
    >
    <Image style={styles.photo} source={{ uri: x.imageUrl}} />
    <Text style={styles.name}>{x.name}</Text>
    </Pressable>
    )}
    />
    
    </ScrollView>
    </SafeAreaView>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listItem: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 15,
    height: 250,
    marginHorizontal: 5,
    marginTop: 20,
    paddingBottom: 16,
  },
  photo: {
    flex: 1,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  name: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "open-sans-bold",
    marginTop: 8,
  },
})