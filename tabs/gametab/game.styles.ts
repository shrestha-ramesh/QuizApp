import {StyleSheet} from 'react-native'
import leaderBoardStyle from '../../components/leaderboard/leaderboard.styles'

const gameTabStyle=StyleSheet.create({
    gameTabContainer:{
        width:'100%',
        flex:1,
        alignItems:'center'
    },
    scoreBoard:{
        width:'90%',
        height:'10%',
        justifyContent:'center',
        flexDirection:'row'
    },
    scoreQuestion:{
        width:'90%',
        height:'30%',
    },
    scoreOptions:{
        width:'90%',
        height:'30%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    },
    scoreLife:{
        width:'90%',
        height:'10%',
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:'lightgrey'
    },
    quit:{
        width:'90%',
        flex:1,
        backgroundColor:'pink' 
    }
})
export default gameTabStyle