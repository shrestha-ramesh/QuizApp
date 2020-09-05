import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeTab from './tabs/hometab/home.tab';
import ScoreTab from './tabs/scoretab/score.tab';
import TrailerTab from './tabs/trailertab/trailer.tab';
import Header from './components/header/header.component';
import GameTab from './tabs/gametab/game.tab';

const App:React.FC=()=> {
  const [viewTrailer, setviewTrailer]=useState<boolean>(true)
  setTimeout(()=>{
    setviewTrailer(false)
  },3000)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {viewTrailer?null:<Header title="Quiz Me"/>}
      {viewTrailer?<TrailerTab/>:<GameTab/>}
      {/* {viewTrailer?<TrailerTab/>:<HomeTab/>} */}
      {/* <ScoreTab/> */}
      {/* <TrailerTab/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%'
  },
});
export default App