import {StyleSheet} from 'react-native'

const headerStyle=StyleSheet.create({
    header:{
        backgroundColor:'#874d00',
        width:'100%',
        height:'10.5%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:6
    },
    headerText:{
        fontSize:25,
        color:'white',
        shadowColor:'red',
        shadowOffset:{width:0, height:0},
        shadowOpacity:1,
        shadowRadius:2,
        elevation:1
    }
})
export default headerStyle