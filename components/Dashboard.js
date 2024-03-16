import { View,Dimensions, Text,SafeAreaView,TextInput,StyleSheet,FlatList,Image,ScrollView} from 'react-native'
import React from 'react';
import {
  LineChart,
 
} from "react-native-chart-kit";

import  {UserStock}  from '../constants/Stock';



const Dashboard = () => {

  return (
    <ScrollView>
    <SafeAreaView>
        <View>
      <View style={Style.container}>
        <View>
          <Text style={Style.overView}>OverView</Text>
        </View>
        <View>
 
          <TextInput placeholder='Search username...'

            style={Style.SearchBar}
          />
        </View>
      
      </View>
      <View>
        <Text style={Style.username}>Hello,Adrian</Text>
      </View>
      <View style={Style.TotalRevenueContainer} >
      <View style={Style.TotalRevenue}>
      <Text style={Style.username}>Total Investment</Text>
      <Text style={[Style.Revenue,Style.TodayRevenue]}>$980,237.00</Text>
<Text style={Style.username}> Total Loss</Text>
<Text style={[Style.Revenue,Style.TodayLoss]}>$10023.09</Text>
<Text style={Style.username}>Today Gain</Text>
<Text style={[Style.Revenue,Style.TodayGain]}>$7,900</Text>
      </View>

      <View style={Style.StockInfo}>
      <Text style={[Style.username,Style.Mid]}>Stock Info</Text>
      {
        UserStock.map((StockInfo)=>(
<Text style={Style.Stocks}>{` ${StockInfo.Stock}`}</Text>
        )
      )}
     

      </View>
      
        </View>
        <View style={Style.container}>
        <View style={Style.StockBriefInfo}>
       
  
<View>
<Text style={Style.closingPrice}>Closing Price</Text>
{
  UserStock.map((closePrice)=>(
    <Text style={{color:closePrice.High?"green":"black"}} key={closePrice.Close}>{`$${closePrice.Close}`}</Text>
  ))
}

</View>
<View>
  <Text style={Style.OpeningPrice}>Opening Price</Text>
{
  UserStock.map((OpeningPrice)=>(
    <Text style={{color:OpeningPrice.High?"#0984e3":"black"}} key={OpeningPrice.High}>{`$${OpeningPrice.Open}`}</Text>
  ))
}
</View>
        </View>
        <View style={Style.ReturnOverview}>
       <View style={Style.HighlOW}>
       <View>
        <Text style={Style.OpeningPrice}>High</Text>
        {
          UserStock.map((high)=>(
            <Text style={{color:high.High?"green":"black"}}>{`$${high.Low}`}</Text>
          ))
        }
       </View>
       <View>
        <Text style={Style.OpeningPrice}>Low</Text>
        {
          UserStock.map((low)=>(<Text style={{color:low.Low?"tomato":"black"}}>
            {`$${low.High}`}
          </Text>))
        }
       </View>

       </View>
        </View>
<View>

</View>
        </View>
        <View  style={Style.Graph}>
        <LineChart
    data={{
      labels: ["January", "Feburary", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            441906,
            74141,
            16163,
            55701,
            3040,
            718121
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={400}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={7} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#dfe6e9",
      backgroundGradientFrom: "#dfe6e9",
      backgroundGradientTo: "#2d3436",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 245, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "3",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
        </View>
   
    </View>
    </SafeAreaView>
    </ScrollView>
    
  )
}


const Style=  StyleSheet.create({
  container:{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-evenly",
    flexDirection:"row",
    marginTop:20,
  },
  SearchBar:{
   height:50,
    backgroundColor:"#dfe6e9",
    borderRadius:12,
    width:250,
    paddingHorizontal:10,
    shadowOffset:{
      height:120,
      width:300,
      
    }

    
  },

  overView:{
    fontSize:23,
    fontWeight:"bold"
  },
  username:{
    fontSize:20,
    fontWeight:"bold"

  },
  TotalRevenueContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:15,

  },
  TotalRevenue:{
    height:200,
    width:195,
    borderRadius:17,
    backgroundColor:"#dfe6e9",
    paddingHorizontal:20,
    paddingVertical:12,
  },

  StockInfo:{
    height:200,
    width:150,
    backgroundColor:"#dfe6e9",
    borderRadius:17,
  },
  Revenue:{
    fontWeight:"bold",
    fontSize:15,
  },
  
TodayGain:{
  color:"#55efc4"

},
TodayLoss:{
  color:"tomato"
},
TodayRevenue:{
  color:"#0abde3"
},
Stocks:{
  paddingHorizontal:25,
  fontWeight:"bold"
},
Mid:{
  textAlign:"center"
},
StockBriefInfo:{
  height:150,
  width:220,
  borderRadius:12,
  backgroundColor:"#dfe6e9",
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-evenly",
  
},

ReturnOverview:{
  height:150,
  width:120,
  borderRadius:12,
  backgroundColor:"#dfe6e9",
  
 
},

HighlOW:{
  display:"flex",
  flexDirection:"row",
  gap:12,
  alignItems:"center",
  justifyContent:"center"

},
OpeningPrice:{
  fontWeight:"bold",
  fontSize:15,

},closingPrice:{
  fontWeight:"bold",
  fontSize:15,
},

Graph:{
  height:350,
  width:350,
  borderRadius:20,
  marginTop:7,
  marginLeft:1,
  resizeMode:"cover",
}


})
export default Dashboard