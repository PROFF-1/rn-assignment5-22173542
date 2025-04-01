import {View, Text , StyleSheet} from 'react-native'
import { transactionProcesses } from '../Data/data'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingTop:15
   
  },

  headerContainer:{
    width:'100%',
    height: 70,
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },

  headerLeft:{
    height: 70,
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
  },

  profileImage:{
    marginLeft: 15,
    marginRight: 20,
    height:60,
    width:60
  },

  welcome: {
    color: 'grey',
    marginBottom:5
  },

  name:{
    fontSize: 20,
    fontWeight: 'bold'
  },

  searchContainer:{
    backgroundColor: '#ddd',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginRight:20,
    width:40,
    height:40,
    borderRadius:'50%'
  },


  card:{
    marginTop: 30,
    marginLeft: 30
  },

  processes:{
    backgroundColor:'blue',
    height:70,
  }
})