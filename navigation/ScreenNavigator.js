import {StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import BloodOptions from '../screens/BloodOptions';
import DonateBlood from '../screens/DonateBlood';
import RequestBlood from '../screens/RequestBlood';


const ScreenNavigator = () => {

    const Stack = createNativeStackNavigator();

  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }}/>
        <Stack.Screen  name='blood' component={BloodOptions} options={{headerShown:false}}/>
        <Stack.Screen name='donate' component={DonateBlood} options={{headerShown:false}}/>
        <Stack.Screen name='request' component={RequestBlood} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigator

const styles = StyleSheet.create({})