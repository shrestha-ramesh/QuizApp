import React from 'react'
import {View, Text} from 'react-native'
import scoreStyle from './score.styles'

const ScoreTab:React.FC=()=>{
    return(
        <View style={scoreStyle.scoreTab}>
            <Text>This is score Tab</Text>
        </View>
    )
}
export default ScoreTab