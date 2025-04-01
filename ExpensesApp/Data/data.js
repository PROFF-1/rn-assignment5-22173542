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


export const render =({item})=>{
  return(
    <View style={{backgroundColor:'plum', width:200}}>
      <View>
        <Image source={item.image}/>
      </View>
      <Text>{item.name}</Text>
    </View>
  )
}