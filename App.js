import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import firebase from 'react-native-firebase';
import Toast from 'react-native-toast-message';
import RNFirebase from 'react-native-firebase'
import ProductTabNavigator from './src/navigation/ProductTabNavigator'


export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
