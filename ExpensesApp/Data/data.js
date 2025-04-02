import {View, StyleSheet,Text,Image} from 'react-native';
import {styles} from '../Styles/styles' 
import AntDesign from '@expo/vector-icons/AntDesign';

export const transactionProcesses=[
  {
    name:'Sent',
    image: require('../assets/send.png'),
  },

  {
    name:'Recieved',
    image: require('../assets/recieve.png'),
  },
  {
    name:'Loan',
    image: require('../assets/loan.png'),
  },
  {
    name:'Topup',
    image: require('../assets/topUp.png'),
  },
]

export const Transactions=[
  
  {

  icon: require('../assets/apple.png'),
  name: 'Apple Store',
  type: 'Entertainment',
  amount: '-$5,99',
  color:'black'

  },
  {

  icon: require('../assets/spotify.png'),
  name: 'Spotify',
  type: 'Music',
  amount: '-$12,99',
  color:'black'

  },
  {
 
  icon: require('../assets/moneyTransfer.png'),
  name: 'Money Transfer',
  type: 'Transaction',
  amount: '$300',
  color:'#1E90FF'

  },
  {

  icon: require('../assets/grocery.png'),
  name: 'Grocery',
  type: 'Grocery',
  amount: '-$88',
  color:'black'
  }
]


export const settingsList =[
  {
    name: 'Language',
    icon:()=>(
      <AntDesign name="right" size={24} color="#888" />
    )
  },
  {
    name: 'My Profile',
    icon:()=>(
      <AntDesign name="right" size={24} color="#888" />
    )
  },
  {
    name: 'Contact Us',
    icon:()=>(
      <AntDesign name="right" size={24} color="#888" />
    )
  },
  {
    name: 'Change Password',
    icon:()=>(
      <AntDesign name="right" size={24} color="#888" />
    )
  },
  {
    name: 'Privacy Policy',
    icon:()=>(
      <AntDesign name="right" size={24} color="#888" />
    )
  },
]


export const render =({item})=>{
  return(
    <View style={styles.processContainer}>
      <View style={styles.processIconContainer}>
        <Image source={item.image}/>
      </View>
      <Text style={styles.processName}>{item.name}</Text>
    </View>
  )
}


export const renderTrasactions =({item})=>{
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
}


export const renderSettings=({item})=>{
  return(
    <View style={styles.eachSettings}>
      <Text style={{fontSize: 18,}}>{item.name}</Text>
      {item.icon()}
    </View>
  )
}