import { StyleSheet, Text, View,StatusBar,SafeAreaView } from 'react-native';
import {styles} from './Styles/styles'
import Home from "./Screens/Home"
import Settings from "./Screens/Settings"

export default function App() {
  return (
    <View style={styles.container}>
      <Settings/>
      <StatusBar  style='auto'/>
    </View>
  );
}

