import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../Styles/styles'

export default function Settings() {
  return (
    <SafeAreaView style={styles.settingsContainer}>
      <Text style={styles.settings}>Settings</Text>
    </SafeAreaView>
  )
}

