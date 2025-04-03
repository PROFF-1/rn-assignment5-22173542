import { View, Text, SafeAreaView,Image, FlatList} from 'react-native'
import React from 'react'
import {styles} from '../Styles/styles'
import { MaterialIcons } from '@expo/vector-icons'; 
import {transactionProcesses, Transactions} from '../Data/data';
import {useTheme} from '../ThemeContext.js'



export default function Home() {
  const theme = useTheme();
  const {isDarkMode}= theme;
  return (
    <SafeAreaView style={[styles.homeContainer,{backgroundColor:theme.colors.background}]}>
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
          renderItem={({item})=>{
            return(
              <View style={styles.processContainer}>
                <View style={styles.processIconContainer}>
                  <Image source={item.image}/>
                </View>
                <Text style={styles.processName}>{item.name}</Text>
              </View>
            )
          }}
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
        renderItem ={({item})=>{
          return(
            <View style={styles.transactionContainer}>
              <View style={styles.transactionLeft}>
                <View style={styles.icon}> <Image source={item.icon} /></View>
                <View>
                  <Text style={styles.transactionName}>{item.name}</Text>
                  <Text style={styles.transactionType}>{item.type}</Text>
                </View>
              </View>
              <Text style={[styles.amount,{color:item.color}]}>
                {item.amount}
              </Text>
            </View>
          )
        }}
        keyExtractor={(item)=>item.name}

      />
    </SafeAreaView>
  )
}