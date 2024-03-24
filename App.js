// import {  useFonts,Inter_700Bold ,Inter_400Regular,} from '@expo-google-fonts/inter';
import {  Text, View,Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const HomeScreen = ({navigation,route})=>{
  const userId = 1
  return(
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Detail',{userId})
      }}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  )
}

const DetailScreen = ({navigation,route})=>{
  // const {userId:id} = route.params
  return(
    <View>
      <Text>Details Screen</Text>
      {/* <Text>{id}</Text> */}
    </View>
  )
}

const ProfileScreen = ({navigation,route})=>{
  // const {userId:id} = route.params
  return(
    <View>
      <Text>Details Screen</Text>
      {/* <Text>{id}</Text> */}
    </View>
  )
}

// stack navigation
const Stack = createNativeStackNavigator();

// tab navigation 

const Tab = createBottomTabNavigator();

const Logo = ()=>{
  return(
    <Image 
    width={20}
    height={20}
    source={require('./assets/adaptive-icon.png')}
    />
  )
}

// stack navigation

// export default function App() {
 
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home' screenOptions={
//          {
//               // headerTitle:()=> <Logo/>,
//               // title: "My Home Page",
//               headerStyle: {
//                 backgroundColor: 'orange'
//               },
//               headerTintColor: 'white',
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 30
//               }
//             }
//       }>
//         <Stack.Screen 
//         name='Home' 
//         component={HomeScreen}
//         // options={
//         //   {
//         //     headerTitle:()=> <Logo/>,
//         //     // title: "My Home Page",
//         //     headerStyle: {
//         //       backgroundColor: 'orange'
//         //     },
//         //     headerTintColor: 'white',
//         //     headerTitleStyle: {
//         //       fontWeight: 'bold',
//         //       fontSize: 30
//         //     }
//         //   }
//         // }
//         />
//         <Stack.Screen name='Detail' component={DetailScreen}
//         options={{headerTitleStyle: {
//           fontSize: 40
//         }}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// tab navigation
export default function App() {
 
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen 
        name='Home' 
        component={HomeScreen}
        />
        <Tab.Screen
         name='Detail' 
         component={DetailScreen}
        />
        <Tab.Screen
         name='Profile' 
         component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



