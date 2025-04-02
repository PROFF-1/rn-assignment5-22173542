import { View, Text, SafeAreaView,Image, FlatList} from 'react-native'
import React from 'react'
import {styles} from '../Styles/styles'
import { MaterialIcons } from '@expo/vector-icons'; 
import {render, renderTrasactions, transactionProcesses, Transactions} from '../Data/data'



export default function Home() {
  return (
    <SafeAreaView style={styles.homeContainer}>
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
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={(item)=>item.name}
        />
        <View style={styles.transactionsHeader}>
          <Text style={styles.transaction}>Transaction</Text>
          <Text style={styles.sellAll}>Sell All</Text>
        </View>
      </View>
      <FlatList
        data={Transactions}
        renderItem ={renderTrasactions}
        keyExtractor={(item)=>item.name}

      />
    </SafeAreaView>
  )
}