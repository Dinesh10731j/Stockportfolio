import { View,Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react';
import { notifications } from '../constants/Notification';

const Notification = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
<View>
  {
   notifications.map((notify)=>(

    <View style={Style.container} >
      <Text style={Style.NotificationMessage} key={notify.id}>{` ${notify.emoji} ${notify.message}`}</Text>
    </View>
   ))
  }
    </View>

    </ScrollView>
    
  )
}


const Style = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"column",
    gap:20,
    paddingHorizontal:12,
    paddingVertical:10,
    
  },

  NotificationMessage:{
    textAlign:"justify",
    paddingHorizontal:7,
    paddingVertical:12,
    backgroundColor:"#dfe6e9",
    borderRadius:12,
    fontWeight:"bold",
    shadowOffset:{
      height:30,
      width:70,
    }
  }
})

export default Notification