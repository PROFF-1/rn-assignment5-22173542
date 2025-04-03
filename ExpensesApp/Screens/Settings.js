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
      <Text style={styles.settings}>Settings </Text>
      <View style={{width:'100%',paddingHorizontal:30,}}>
        <FlatList
        data={settingsList}
        renderItem={({item})=>{
          return(
            <View style={styles.eachSettings}>
              <Text style={{fontSize: 18,}}>{item.name}</Text>
              {item.icon()}
            </View>
          )
        }}
        />
        <View>
          <Text>Theme</Text>
          <Switch
            value={theme.isDarkMode}
            onValueChange={theme.toggleTheme}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

