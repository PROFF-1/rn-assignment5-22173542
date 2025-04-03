import { FlatList, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../Styles/styles'
import { settingsList } from '../Data/data'
import { useTheme } from '../ThemeContext.js'


export default function Settings() {

  const theme =useTheme();
  const {isDarkMode}= theme;
  return (
    <SafeAreaView style={[styles.settingsContainer, {backgroundColor:theme.colors.background}]}>
      <Text style={[styles.settings,{color: theme.colors.text}]}>Settings </Text>
      <View style={{width:'100%',paddingHorizontal:30,}}>
        <FlatList
        data={settingsList}
        renderItem={({item})=>{
          return(
            <View style={[styles.eachSettings, {borderBottomColor:isDarkMode? '#3b3838' : '#dadbe0'}]}>
              <Text style={{fontSize: 18, color: theme.colors.text}}>{item.name}</Text>
              {item.icon()}
            </View>
          )
        }}
        />
        <View style={styles.switchContainer}>
          <Text style={[styles.theme,{color: theme.colors.text}]}>Theme</Text>
          <Switch
          thumbColor={'white'}
            value={theme.isDarkMode}
            onValueChange={theme.toggleTheme}
            trackColor={{ false: "#767577", true: "#80ed8d" }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

