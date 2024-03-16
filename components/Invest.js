import { View, Text,Image,StyleSheet} from 'react-native'
import { Dimensions } from 'react-native';

import {LineChart} from 'react-native-chart-kit';

const AppleLogo = require("../assets/apple.png");
const googleLogo = require("../assets/google.png");
const TeslaLogo = require("../assets/Tesla.png");
 
const Invest = () => {
  return (
    <View>
    <View>
 <LineChart
    data={{
      labels: ["January", "Feburary", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            441922,
            741323,
            16163,
            55701,
            3040,
            718121
          ]
        }
      ]
    }}
    width={350}
     // from react-native
    height={400}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={6} // optional, defaults to 1
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

    <View>
    <Text>In Stock Today</Text>
     


        
      
     
       
     </View>

      
    
       
      
      </View>
    
    
 
    



  )
}


const Style = StyleSheet.create({

  container:{
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"row",
    gap:20,
  },
  stockLogo:{
    height:40,
    width:40,
    borderRadius:100,

  }

})
export default Invest