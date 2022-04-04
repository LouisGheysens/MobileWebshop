import { StyleSheet, Text, View, CheckBox, Picker } from 'react-native'
import React, { useRef, useState } from 'react'
import { Button, TextInput, View } from 'react-native';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import MyButton, { myButton } from '../components/MyButton'
import { set } from 'react-native-reanimated';
import firebase from 'react-native-firebase'
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const formValidationSchema = yup.object().shape({
    message: yup.string().min(5)('Please enter more than 5 characters!').required('Message adress is required!'),
    select: yup.string().required(),
    rating: yup.number().min(1).max(10).required(),
    date: yup.date().default(() => new Date()),
    wouldRecommend: yup.boolean().default(false),
  })

const FeedbackScreen = () => {

  //Dropdown
  const [isSelected, setSelection] = useState(false);

  //useState
  const [name, setName] = useState('');

  //useRefs
  const messageInputRef = useRef(null);
  const nameRef = useRef(null);
  const ratingRef = useRef(null);

  const handleClick = () =>{
    Toast.show({
      type: 'succes',
      text1: 'Uw feedback werd verzonden!'
    });

  }

  return (
    <Formik
    initialValues={{ name: '', message: '', select: '', rating: '', date: Date.now(), wouldRecommend: false}}
    validateOnMount={true}
    onSubmit={values => {
    handleSubmit(values);
    }}
    validationSchema={formValidationSchema}
    >

    <View>
      <Text style={styles.title}>FeedbackScreen</Text>

      <Text>Naam: </Text>
      <TextInput
      value={name}
      onValueChange={setName}
      ref={nameRef}
      >
      </TextInput>

      <Text>Datum: {Date.now()}</Text>

      <Picker
      style={{ height: 50, width: 150 }}
      >
      <Picker.Item label="Product" value="product"/>
      <Picker.Item label="Levering"  value="levering"/>
      <Picker.Item label="Applicatie"  value="applicatie"/>
      <Picker.Item label="Klacht"  value="klacht"/>
      </Picker>

      <Text>Bericht</Text>
      <TextInput
      autoCorrect={false}
      ref={messageInputRef}
      />

      <Text>Beoordeling</Text>
      <TextInput
      autoCorrect={false}
      ref={ratingRef}
      multiline={true}
      numberOfLines={12}
      />

      <CheckBox
      value={isSelected}
      onValueChange={setSelection}
      style={styles.checkbox}
      />

      
      <MyButton
      onPress={handleClick}
      >Bevestig</MyButton>      

    </View>
    </Formik>
  )
}

export default FeedbackScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  checkbox:{
    alignSelf: "center",
  }
})