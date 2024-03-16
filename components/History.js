import { View, Text,StyleSheet,ScrollView } from 'react-native'
import { Dimensions } from 'react-native';
import { stockExchanges } from '../constants/Indexes';
import { LineChart } from 'react-native-chart-kit';



const History = () => {
  return (

<>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    
    
    
   
   {
stockExchanges.map((indexes)=>(
  <View style={Style.Indexes} key={indexes.name}>
  <Text style={{fontSize:20}}>{indexes.name}</Text>
  <Text style={{ color: indexes.trend === 'Bull' ? 'green' : 'tomato', fontSize:20 }}>{indexes.value}</Text>

  <Text  style={{fontSize:50}}>{indexes.emoji}</Text>

  </View>
))
   }
 
     
    </ScrollView>


    <View>
 <LineChart
    data={{
      labels: ["NYSE", "NASDAQ", "LSE", "TSE", "SSE"],
      datasets: [
        {
          data: [
            569299.89,788888,28388,845203,99988,328328,283438,363303,73483,3638,26844,37345,24362,67764.4
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
    </>
     
    
  )
}

const  Style = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    
  },

Indexes:{
height:150,
width:200,
backgroundColor:"#dfe6e9",
borderRadius:17,
margin:12,
paddingHorizontal:12,
alignItems:"center"
}
})

export default History