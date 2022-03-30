import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Icon, Input } from 'react-native-elements'
import MyButton from '../components/MyButton';
import { Form, Formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import * as yup from 'yup';
import MyErrorText from '../components/MyErrorText'

const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email').required('Email adress is require!'),
  password: yup.string().min(4, ({ min }) => `Password must be at least ${min} characters!`)
  .required('Password is required!').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d$@$!%*?&]).*$/,
  )
})

const LoginScreen = ({ navigation }) => {

  //Show / Hide password
  const [showPassword, setShowPassword] = React.useState(false)

    const emailInputRef = useRef(null);
    const passWordInputRef = useRef(null);

  return (

    <Formik
    initialValues={{ email: '', password: ''}}
    validateOnMount={true}
    onSubmit={values => {
    // Call login Service here from firebase! Here we can pass the values!
    }}
    validationSchema={loginValidationSchema}
    >

    {({handleChange, handleBlur, handleSubmit, values, touched, errors, isValid}) => (

    <View style={styles.container}>
    
      <Text style={styles.pageHeader}>LoginScreen</Text>

      <Image style={styles.imageStyle} source={require('../../assets/shopApp.PNG')}/>

      //Email
      <TextInput style={styles.inputStyle} 
      value={values.email}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      ref={emailInputRef}
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
      />

      <Icon name={showPassword ? 'eye-off' : 'eye'} style={{ color: '#4632A1'}} onPress={() => setShowPassword(!showPassword)} />

      //Handle input password
      {(errors.password && touched.password) &&
      <MyErrorText>{errors.password}</MyErrorText>}

      <MyButton onPress={handleSubmit} Text="submit"  />



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