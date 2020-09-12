import React from 'react'
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'
import newGameButtonStyle from './newGameButton.styles'

interface ImageType{
    uri:string
}
interface NewGameButtonType{
    navigation:any
}
const newGameImage:ImageType={uri:"https://andregunawan.github.io/TriviaGame/assets/images/start.png?fbclid=IwAR0K-N0_X3zkmnpW22xE9hmYTXZmXbCCM1xGpFDcPBk70N3RFh3U4Sw67Js"}
const NewGameButton:React.FC<NewGameButtonType>=({navigation})=>{
    return(
        <TouchableOpacity style={{...newGameButtonStyle.newGameButtonImage}}
        activeOpacity={0.5}
        onPress={()=>navigation.navigate("gametab")}
        >
            <Image source={newGameImage} style={{...newGameButtonStyle.image}}/>
        </TouchableOpacity>
    )
}
export default NewGameButton