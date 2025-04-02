import {View, StyleSheet,Text,Image} from 'react-native';
import {styles} from '../Styles/styles' 

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