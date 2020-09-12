import React from 'react'
import {Text, View, ImageBackground} from 'react-native'
import homeStyle from './home.styles'
import Header from '../../components/header/header.component'
import NewGameButton from '../../components/new-game-button/newGameButton.component'
import LeaderBoard from '../../components/leaderboard/leaderboard.component'

interface HomeTabType{
    navigation:any
}

const HomeTab:React.FC<HomeTabType>=({navigation})=>{
    return(
        <View style={homeStyle.homeTab}>
            <ImageBackground
                style={{width:'100%', flex:1}}
                source={{uri:`https://i.pinimg.com/originals/1d/7e/4d/1d7e4dfd1194a19152cfc55a77d64982.jpg?fbclid=IwAR3lcrOoLkB2g4jsYSYeTyGuRaLa2bpr0_zDB3Etc-aJfhAyCmlE_4J3ltU`}}
            >
            <View style={{...homeStyle.centerFlex,...homeStyle.newGameContainer}}>
                <NewGameButton navigation={navigation}/>
            </View>
            <View style={{...homeStyle.centerFlex,...homeStyle.leaderBoardContainer}}>
                <LeaderBoard/>
            </View>
            </ImageBackground>
        </View>
    )
}
export default HomeTab