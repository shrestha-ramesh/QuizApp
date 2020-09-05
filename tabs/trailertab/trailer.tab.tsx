import React from 'react'
import {Text, View, ImageBackground, Image} from 'react-native'
import trailerStyle from './trailer.styles'


interface ImagesType{
    uri:string
}
const backgroundImage:ImagesType  ={uri:"https://www.leadquizzes.com/wp-content/uploads/2019/02/New-blog-graphic.jpg?fbclid=IwAR32SltNJ2U7b72pH7-3YPHc0Vkt0DHurL29HC8T41VEfC55uzAgQzL7pp4"}
const logoImage:ImagesType={uri:"https://d259t2jj6zp7qm.cloudfront.net/images/20200113133231/quiz-icon-150x150.png"}
const TrailerTab:React.FC=()=>{
    return(
        <ImageBackground source={backgroundImage} style={trailerStyle.trailerTab}>
            <Image source={logoImage} style={trailerStyle.logoImage}/>
        </ImageBackground>
    )
}
export default TrailerTab