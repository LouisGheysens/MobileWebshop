import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import firebase from 'react-native-firebase';
import Toast from 'react-native-toast-message';
import RNFirebase from 'react-native-firebase'


export default function App() {

  const [user, setUser] = React.useState();

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const User = firebase.auth().currentUser;
  return <View>{User ? <HomeScreen /> : <LoginScreen />}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
