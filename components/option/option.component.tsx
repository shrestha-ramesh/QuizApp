import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import {Card} from 'native-base'

interface OptionType{
    width:string|number,
    height:string|number,
    bgColor?:string,
    text?:string,
    disabled?:boolean
}
const Option:React.FC<OptionType>=({width,height,bgColor='white',text,disabled=false})=>{
    return(
        <TouchableOpacity 
            style={{width:width,
                height:height,
                marginVertical:8
            }}
            activeOpacity={0.8}
            disabled={disabled}
        >
            <Card style={{
                width:'100%',height:'100%',justifyContent:'center',
                alignItems:'center',backgroundColor:bgColor,borderRadius:10,
                opacity:disabled?0.5:1.0
                }}>
                <Text style={{
                    width:'80%', textAlign:'center',fontSize:20,
                    fontWeight:'bold'
                    }}>{text}</Text>
           </Card>

        </TouchableOpacity>
    )
}
export default Option