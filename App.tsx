import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import HomeTab from './tabs/hometab/home.tab';
import ScoreTab from './tabs/scoretab/score.tab';
import TrailerTab from './tabs/trailertab/trailer.tab';
import Header from './components/header/header.component';
import GameTab from './tabs/gametab/game.tab';
import AsyncStorage from '@react-native-community/async-storage';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const App:React.FC=()=> {
  const [viewTrailer, setviewTrailer]=useState<boolean>(true)
  useEffect(()=>{
    checkStorage()
  },[])
  const checkStorage=async()=>{
    try{
      const value= await AsyncStorage.getItem('topTenNames')
      if(!value){
        await AsyncStorage.setItem('topTenNmaes',JSON.stringify([]))
      }
      const score = await AsyncStorage.getItem('score')
      if(!score){
        await AsyncStorage.setItem('score','')
      }
    }catch(erro){
      console.log("test"); 
    }
  }
  setTimeout(()=>{
    setviewTrailer(false)
  },3000)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {viewTrailer?null:<Header title="Quiz Me"/>}
      {viewTrailer?<TrailerTab/>:<Navigation/>}
    </View>
  );
}

const Navigation =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="hometab" screenOptions={{headerShown:false}}>
        <Stack.Screen name="hometab" component={HomeTab}/>
        <Stack.Screen name="gametab" component={GameTab}/>
        <Stack.Screen name="scoretab" component={ScoreTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%'
  },
});
export default App