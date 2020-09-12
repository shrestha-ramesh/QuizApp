import React,{useState,useEffect} from 'react'
import {View, Text, FlatList} from 'react-native'
import{Card, CardItem,Right} from 'native-base'
import leaderBoardStyle from './leaderboard.styles';
import AsyncStorage from '@react-native-community/async-storage';

type WinnerType={
    name:string
    score:number
}[]
// const fakeData:WinnerType=[
//     {name:'Ramesh',score:100},
//     {name:'Suraj',score:90},
//     {name:'Kishor',score:80},
//     {name:'Santosh',score:70},
//     {name:'Sam',score:60},
//     {name:'Ram',score:50},
//     {name:'Dhan',score:40},
//     {name:'Bang',score:30},
//     {name:'Vang',score:20},
//     {name:'Yang',score:10}
// ]
const LeaderBoard:React.FC=()=>{
    const [winners, setWinners]=useState<WinnerType>([])
    useEffect(()=>{
        getPlayers()
    })
    const getPlayers=async()=>{
        try{
            const players= await AsyncStorage.getItem('topTenNames')
            if(players){
                setWinners(JSON.parse(players))
            }
        }catch(error){
            console.log(error);
        }
    }
    const eachcard=({item})=>(
        <Card style={{width:'95%',borderWidth:2, borderColor:'red'}}>
            <CardItem style={{width:'100%'}}>
             <Text>{item.name}</Text>
                <Right><Text>{item.score}/100</Text></Right>
        </CardItem>

    </Card>)
    return(
        <Card style={{...leaderBoardStyle.leaderBoardContainer}}>
            <View style={{...leaderBoardStyle.leaderBoardHeader}}><Text style={{color:'white',fontSize:30}}>LeaderBoard</Text></View>
            <FlatList
                data={winners}
                renderItem={eachcard}
                keyExtractor={(item,index)=>index.toString()}
                style={{width:'90%'}}
            />
        </Card>
    )
}



export default LeaderBoard;