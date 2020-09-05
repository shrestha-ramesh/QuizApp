import React from 'react'
import {View, Text} from 'react-native'
import headerStyle from './header.styles'

interface HeaderProps{
    title:string
}

const Header:React.FC<HeaderProps>=({title})=>{
    return(
    <View style={headerStyle.header}><Text style={headerStyle.headerText}>{title}</Text></View>
    )
}
export default Header