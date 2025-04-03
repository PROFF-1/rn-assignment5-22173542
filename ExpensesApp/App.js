import { StyleSheet, Text, View,StatusBar,SafeAreaView,Image } from 'react-native';
import {styles} from './Styles/styles'
import Home from "./Screens/Home"
import Settings from "./Screens/Settings"
import MyCards from "./Screens/MyCards"
import Statistics from "./Screens/Statistics"
import { ThemeProvider } from './ThemeContext';
import { useTheme } from './ThemeContext';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator()

function AppComponents() {

  const theme = useTheme();

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}
        options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/home.png')}
              style={{ width: 20, height: 20, tintColor: color }}
              />
            )
          }
        }/>
        <Tab.Screen name ='My Card' component={MyCards}
         options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/myCards.png')}
              style={{ width: 20, height: 20, tintColor: color }}
              />
            )
          }}
          />
        <Tab.Screen  name='Statistics' component={Statistics}
        options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/statictics.png')}
              style={{ width: 20, height: 20, tintColor: color }}
              />
            )
          }}/>
        <Tab.Screen name ='Settings' component={Settings}
        options={
          {
            tabBarIcon:({color})=>(
              <Image source={require('./assets/settings.png')}
              style={{ width: 20, height: 20, tintColor: color }}
              />
            )
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default function App() {
  return (
   <ThemeProvider>
    <AppComponents/>
   </ThemeProvider>
  )
}


