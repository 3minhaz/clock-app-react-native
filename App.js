import { StatusBar } from 'expo-status-bar';
import {  useFonts,Inter_700Bold ,Inter_400Regular,} from '@expo-google-fonts/inter';
import { ActivityIndicator, ImageBackground, StyleSheet, Text, View,Image ,SafeAreaView, Pressable, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


const RowView = ({label,value})=>{
  return(
    <View style={{flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width: '100%'
    }}>
      <View>
        <Text
        style={{
          fontFamily: 'Inter_Regular',
          color: '#303030',
          fontSize: 10,
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginRight: 10
        }}
        >{label}</Text>
      </View>
      <View>
        <Text
        style={{
          fontFamily: 'Inter_Bold',
          color: '#303030',
          fontSize: 20,
          letterSpacing: 2
        }}
        >{value}</Text>
      </View>
    </View>
  )  
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_Regular: Inter_400Regular,
    Inter_Bold: Inter_700Bold
  });

  const [showMore,setShowMore] = useState(false)

  if (!fontsLoaded) {
    return <ActivityIndicator/>;
  }
  return (
    <NavigationContainer>
      <SafeAreaView>
    <ImageBackground
    style={{flex: 1}}
      source={require('./assets/light-bg.png')}
    >
      <View style={{paddingHorizontal: 30,
        flex: 1,
        flexDirection:'column',justifyContent:'space-between'}}>

      {/* upper portion */} 
      {
        !showMore && (
          <View style={{flexDirection:'row', justifyContent:'space-between',marginTop: 15}}>
        <View>
          <Text style={{fontFamily:'Inter_Regular',fontSize: 14,color:'#fff'}}>
            Wikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects.
You can support our work with a donation.
        </Text>
        <Text style={{fontFamily:'Inter_Bold',fontSize: 18, color: '#fff'}}>
          Other Text
        </Text>
        </View>
        <Image source={require('./assets/refresh.png')}/>
      </View>
        )
      }
      
      <View style={{marginBottom: 20}}> 
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={require('./assets/sun.png')}/>
          <Text style={{fontFamily:'Inter_Regular', color:'#fff',marginLeft:20}}>Good Morning</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontFamily:'Inter_Bold', fontSize: 90,color: '#fff'}}>11:37</Text>
          <Text style={{marginLeft:20, fontSize: 20, color: '#fff'}}>BST</Text>
        </View>
        <View>
            <Text style={{fontFamily:'Inter_Bold', fontSize:15,color:'#fff'}}>In LONDON UK</Text>
        </View>
        {/* <Pressable */}
        <TouchableOpacity
          onPress={()=>{setShowMore(!showMore)}}
          style={{
            height: 40,
            width: 115,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-between',
            backgroundColor: '#fff',
            borderRadius: 30,
            paddingLeft: 16,
            paddingRight: 4,
            marginTop: 40
          }}
        >
          <Text style={{fontFamily:'Inter_Bold',fontSize: 14, color: '#000',letterSpacing: 2}}>
            {showMore ? 'LESS' : 'More'}
            </Text>
          <Image source={
            showMore ? require('./assets/arrow-up.png') :
            require('./assets/arrow-down.png')
          }/>
        </TouchableOpacity>
        {/* </Pressable> */}
      </View>
      </View>

      {/*  expanded view */}
      {
        showMore && (
          <View style={{
            backgroundColor: '#fff',
            paddingVertical: 48,
            paddingHorizontal: 26,
            opacity: 0.8
            }}>
              <RowView label={'Current Timezone'} value='Europe/London'/>
              <RowView label={'Day of the Year'} value='295'/>
              <RowView label={'Day of the week'} value='5'/>
              <RowView label={'Week number'} value='42'/>
            </View>
        )
      }
     
    </ImageBackground>
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
