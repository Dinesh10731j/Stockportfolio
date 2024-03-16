import { View, Text ,SafeAreaView,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import Dashboard from './components/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import History from './components/History';
import Invest from './components/Invest';
import Notification from './components/Notification';
import React from 'react';
const dashBoardIcon = require("../e-commerce/assets/home.png");
const historyIcon = require("./assets/user.png");
const InvestIcon = require("./assets/rocket.png");
const BellIon = require("./assets/bell.png");
const AdrianProfile = require("./assets/adrian.jpg")
const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
   
   <NavigationContainer>
   <BottomTab.Navigator screenOptions={{
    tabBarStyle:{backgroundColor:"#dfe6e9"},
    tabBarLabelStyle: {
          fontSize: 13, 
          fontWeight:"bold",
  
        },
        tabBarItemStyle:{
        
          alignItems:"center",
        shadowOffset:{
          height:60,
          width:90,

        },

    
        }
    }}>
    <BottomTab.Screen name='Dashboard'  component={Dashboard} options={{
      headerLeft:()=>(<Text style={Style.CompanyName}>
        StockAlpha
      </Text>),

      headerRight:()=>(<Image source={AdrianProfile} style={Style.AdrianPic}/>),

      headerTitle:"",
 
      tabBarIcon:()=>(
        <TouchableOpacity  style={Style.IconBg}>
        
 <Image source={dashBoardIcon} style={Style.BottomIcons}/>
        </TouchableOpacity>
       
      )
    }}/>
    <BottomTab.Screen name='History' component={History} options={{
     
      tabBarIcon:()=>(
        <TouchableOpacity style={Style.IconBg}>
<Image source={historyIcon} style={Style.BottomIcons}/>
        </TouchableOpacity>
        
      )
    }}/>
    <BottomTab.Screen name='Invest' component={Invest}
options={{

 
headerTitleStyle:{
  fontSize:30,
},

      tabBarIcon:()=>(
        <TouchableOpacity style={Style.IconBg}>
           <Image source={InvestIcon} style={Style.BottomIcons}/>
        </TouchableOpacity>
       
      )}}

    />
    <BottomTab.Screen name='Notifications' component={Notification} options={{
       
      tabBarIcon:()=>(
     
        <TouchableOpacity style={Style.IconBg}>
          <Image source={BellIon} style={Style.BottomIcons}/>
        </TouchableOpacity>
        
      )
    }}/>
   </BottomTab.Navigator>

   </NavigationContainer>
 
  
  
  )
}


const Style = StyleSheet.create({
  BottomIcons:{
    height:20,
    width:20,
    shadowOffset:{
      height:600,
      width:500,
    },
    shadowColor:"black"
    
  },
  IconBg:{
    paddingVertical:7,
    paddingHorizontal:7,
    backgroundColor:"white",
    borderRadius:50,
  },
  CompanyName:{
    fontSize:30,
    fontWeight:"bold",
  color:"#2e86de",
  letterSpacing:2
  },
  AdrianPic:{
    height:50,
    width:50,
    borderRadius:100,
    marginRight:12,

  }
})

export default App