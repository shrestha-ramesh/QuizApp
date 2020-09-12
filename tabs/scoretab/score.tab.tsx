import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ImageBackground, TouchableOpacity, AsyncStorage } from "react-native";
import scoreStyle from "./score.styles";
import leaderBoardStyle from "../../components/leaderboard/leaderboard.styles";

interface ScoreTabType{
  navigation:any
}
interface ImageType {
  uri: string;
}
const backgroundImage: ImageType = {
  uri:
    "https://i.pinimg.com/originals/1d/7e/4d/1d7e4dfd1194a19152cfc55a77d64982.jpg?fbclid=IwAR3lcrOoLkB2g4jsYSYeTyGuRaLa2bpr0_zDB3Etc-aJfhAyCmlE_4J3ltU",
};
type WinnerType={
  name:string
  score:number
}
type WinnersType = WinnerType[]
const ScoreTab: React.FC<ScoreTabType> = ({navigation}) => {
  const [score, setScore]=useState<number>(0)
  const [leaderBoard, setLeaderBoard] = useState<WinnersType>([])
  const [madeToLeaderboard,setMadeToLeaderboard]=useState<boolean>(false)
  const [name, setName]=useState<string>('')
  useEffect(()=>{
    getData()
  },[])
  const getData=async()=>{
    let fullScore=0
    try{
      const score=await AsyncStorage.getItem('score')
      if(score){
        fullScore=parseInt(score)
        setScore(fullScore)
      }
      const leaderBoard=await AsyncStorage.getItem('topTenNames')
      if(leaderBoard){
        setLeaderBoard(JSON.parse(leaderBoard))
      }
    }catch(error){
      console.log(error);
    }
    setMadeToLeaderboard(leaderBoard.length<10?true:leaderBoard[leaderBoard.length-1].score<fullScore?true:false)
  }
  const saveToLeaderBoard=async()=>{
    const leaderBoardTemp=leaderBoard
    leaderBoardTemp.length===10?leaderBoardTemp.pop():null
    const rank = leaderBoardTemp.findIndex((player)=>player.score<score)
    const value:WinnerType={name:name,score:score}
    if(rank===-1){
      leaderBoardTemp.push(value)
    }else{
      leaderBoardTemp.splice(rank,0,value)
    }
    try{
        await AsyncStorage.setItem('topTenNames',JSON.stringify(leaderBoardTemp))
    }catch(error){
      console.log(error);
    }
    navigation.navigate('hometab')
  }
  return (
    <ImageBackground
      source={backgroundImage}
      style={{ ...scoreStyle.scoreTab }}
    >
        <View style={{...scoreStyle.scoreContainer}}>
            {madeToLeaderboard?<Text style={{fontSize:40,textAlign:'center'}}>Congratulation you make it in top 10</Text>:
            <Text style={{fontSize:40,textAlign:'center'}}>Sorry you didn't make it in top 10</Text>}
        </View>
        <View style={{...scoreStyle.scoreContainer, width:'40%',borderRadius:50}}>
            <Text style={{fontSize:120,textAlign:'center'}}>{score}</Text>
        </View>
        <View style={{width:'100%'}}>
          {madeToLeaderboard?<TextInput
                style={{ height:'20%', borderColor: 'white', 
                borderWidth: 1,color:'black'}}
                placeholder={"Enter your name"}
                value={name}
                onChangeText={(name)=>setName(name)}
            />:null}
            {madeToLeaderboard?<TouchableOpacity 
                style={{backgroundColor:'green',alignItems:'center',margin:50,
                    padding:10,borderRadius:40}}
                onPress={()=>saveToLeaderBoard()}
            >
                <Text style={{fontSize:50}}>Save</Text>
            </TouchableOpacity>:<TouchableOpacity 
                style={{backgroundColor:'green',alignItems:'center',margin:50,
                    padding:10,borderRadius:40}}
                onPress={()=>navigation.navigate('hometab')}
            >
                <Text style={{fontSize:50}}>PLAY AGAIN</Text>
            </TouchableOpacity>}
        </View>
        
    </ImageBackground>
  );
};
export default ScoreTab;
