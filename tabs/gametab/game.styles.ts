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
        justifyContent:'space-between',
        flexDirection:'row',
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
        width:'75%',
        height:'10%',
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:'lightgrey',
        borderRadius:30
    },
    quit:{
        // width:'50%',
        flex:1,
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        // justifyContent:'center',
        alignItems:'center',
        // padding:10,
        // borderRadius:20,
        // margin:20
    }
})
export default gameTabStyle