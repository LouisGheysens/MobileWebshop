import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Icon, Input } from 'react-native-elements'
import MyButton from '../components/MyButton';
import { Form, Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import * as yup from 'yup';
import MyErrorText from '../components/MyErrorText'
import { handleSignIn } from '../services/FirebaseService';
import firebase from 'react-native-firebase';
import Toast from 'react-native-toast-message';

const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email').required('Email adress is required!'),
  password: yup.string().min(4, ({ min }) => `Password must be at least ${min} characters!`)
  .required('Password is required!').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d$@$!%*?&]).*$/,
  )
})

const LoginScreen = ({ navigation }) => {


  const [showPassword, setShowPassword] = React.useState(false)
  
  const emailInputRef = useRef(null);
  const passWordInputRef = useRef(null);

  const handleSignInClick = async () => {
    if(email === "" || password === ""){
      console.error("Invalid credentials!");
      Toast.show({type: 'error',text1: 'Gelieve de velden correct in te vullen!',})
    }else{
      try{
        await handleSignIn(email, password);
        Toast.show({type: 'succes',text1: 'Login succesvol!',})

      }catch(error){
        console.error(error);
      }
    }
  };

  return (
    <Formik
    initialValues={{ email: '', password: ''}}
    validateOnMount={true}
    onSubmit={values => {
    handleSignIn(values);
    }}
    validationSchema={loginValidationSchema}
    >

    {({handleChange, handleBlur, values, touched, errors}) => (

    <View style={styles.container}>
    
      <Text style={styles.pageHeader}>Login</Text>

      <Image style={styles.imageStyle} source={require('../../assets/shopApp.PNG')}/>

      //Email
      <TextInput style={styles.inputStyle} 
      value={values.email}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      ref={emailInputRef}
      autoCorrect={false}
      />

      <Icon name={!errors.email ? 'checkmark' : 'close'} style={{ color: !errors.email ? '#4632A1' : 'red'}} />

      //Handle input email
      {(errors.email && touched.email) &&
      <MyErrorText>{errors.email}</MyErrorText>}


      //Password
      <TextInput style={styles.inputStyle} 
      value={values.password}
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      ref={passWordInputRef}
      secureTextEntry={!showPassword} 
      autoCorrect={false}
      />

      <Icon name={showPassword ? 'eye-off' : 'eye'} style={{ color: '#4632A1'}} onPress={() => setShowPassword(!showPassword)} />

      //Handle input password
      {(errors.password && touched.password) &&
      <MyErrorText>{errors.password}</MyErrorText>}

      <MyButton onPress={handleSignInClick} Text="submit"  />

    </View>

    )}
    </Formik>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageHeader: {
        fontWeight: 'bold',
        fontSize: 34,
    },
    inputStyle: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    imageStyle:{
        resizeMode: "contain",
        height: Dimensions.get('window').height / 2.5,
    }
})