import { View, Text, SafeAreaView,Image, FlatList} from 'react-native'
import React from 'react'
import {styles} from '../Styles/styles'
import { MaterialIcons } from '@expo/vector-icons'; 
import {render, transactionProcesses} from '../Data/data'



export default function Home() {
  return (
    <SafeAreaView>
      <View style ={styles.headerContainer}>
        <View style={styles.headerLeft }>
          <View >
            <Image source={require('../assets/profile.png')}
              style={styles.profileImage}
            />
          </View>
          <View>
            <Text style = {styles.welcome}>
            welcome back,
            </Text>
            <Text style ={styles.name}>
              Eric Atsu
            </Text>
        </View>
        </View>
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color="black"  style={styles.search}/>
        </View>
      </View>

      <Image
        source={require('../assets/Card.png')}
        style={styles.card}
      />

      <View>
        <FlatList
          data={transactionProcesses}
          renderItem={render}
          horizontal
          style={styles.processes}
        />
      </View>
    </SafeAreaView>
  )
}