import { StyleSheet, Text, View,StatusBar,SafeAreaView } from 'react-native';
import {styles} from './Styles/styles'
import Home from "./Screens/Home"

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <StatusBar  style='auto'/>
    </View>
  );
}

