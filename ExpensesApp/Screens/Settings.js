import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../Styles/styles'
import { renderSettings, settingsList } from '../Data/data'


export default function Settings() {
  return (
    <SafeAreaView style={styles.settingsContainer}>
      <Text style={styles.settings}>Settings </Text>
      <View style={{width:'100%',paddingHorizontal:30,}}>
        <FlatList
        data={settingsList}
        renderItem={renderSettings}
        />
      </View>
    </SafeAreaView>
  )
}

