import React, { useState,useEffect } from 'react'
import {View, Text, ImageBackground,Image, TouchableOpacity, Alert} from 'react-native'
import gameTabStyle from './game.styles'
import { Right } from 'native-base'
import Option from '../../components/option/option.component'
import { Ionicons,Feather} from '@expo/vector-icons'; 

interface ImageType{
    uri:string
}
type OptionsType=string[]
type gameQuestionsType={
    question:string,
    options:OptionsType,
    answer:string
}[]
const gameQuestions:gameQuestionsType=[
    {
        question:'How many district in Nepal?',
        options:['78', '76', '77', '75'],
        answer:'77'
    },
    {
        question:'Which is the largest district in Nepal?',
        options:['Dolpa', 'Rolpa', 'Rukum', 'Surkhe'],
        answer:'Dolpa'
    },
    {
        question:'Which is smallest district of Nepal?',
        options:['Bhaktapur District', 'Lalitpur District', 'Kathmandu District', 'Dhading District'],
        answer:'Bhaktapur District'
    },
    {
        question:'Which is the largest bridge in Nepal?',
        options:['Ghatbesi Bridge', 'Dhading Bridge', 'Kothiyaghat Bridge', 'Surkhe Bridge'],
        answer:'Kothiyaghat Bridge'
    },
    {
        question:'Which is the longest waterfall of Nepal?',
        options:['Jhor Falls', 'Hyatung Falls', 'Pokali Falls', 'Devis Falls'],
        answer:'Hyatung Falls'
    },
    {
        question:'Which is the only bird found in Nepal?',
        options:['Himalayan Monal', 'Tibetan Snowcock', 'Spiny Babbler', 'Spotted owlet'],
        answer:'Spiny Babbler'
    },
    {
        question:'How many rivers are in Nepal?',
        options:['5000', '4000', '3000', '6000'],
        answer:'6000'
    },{
        question:'Which is the deepest lake in Nepal?',
        options:['Rara Lake', 'Phewa Lake', 'Tilicho Lake', 'She-Phoksundo Lake'],
        answer:'She-Phoksundo Lake'
    },
    {
        question:'How many national parks are in Nepal?',
        options:['10', '12', '9', '11'],
        answer:'10'
    }
]

const backgroundImage:ImageType={uri:"https://i.pinimg.com/originals/1d/7e/4d/1d7e4dfd1194a19152cfc55a77d64982.jpg?fbclid=IwAR3lcrOoLkB2g4jsYSYeTyGuRaLa2bpr0_zDB3Etc-aJfhAyCmlE_4J3ltU"}
const GameTab:React.FC=()=>{
    const [index, setIndex]=useState<number>(0)
    const [score,setScore]=useState<number>(0)
    const [optionStatus, setOptionStatus]=useState<boolean[]>([false,false,false,false])
    const [fiftyfiftyused, setFiftyFiftyUsed]=useState<boolean>(false)
    const [showAnswerUsed, setShowAnswerUsed]=useState<boolean>(false)
    const [selectedAnswer,setSelectedAnswer]=useState<string>('')
    const [color, setColor]=useState<string>('white')
    
    const{question,options,answer}=gameQuestions[index]
    const correctAnswerIndex = options.findIndex((option)=>option===answer)
    const correctAnswer = options[correctAnswerIndex]
    
    const triggerFiftyFifty=()=>{
        // const fiftyFiftyUsed=optionStatus.includes(true)
        setFiftyFiftyUsed(true)
        let ramdonIndex:number|null=null
        do{
            ramdonIndex=Math.floor(Math.random()*Math.floor(4))
        }while(ramdonIndex===correctAnswerIndex)
        const newOptionsStatus:boolean[]=optionStatus.map(
            (value:boolean,index:number)=>index===ramdonIndex||index===correctAnswerIndex?false:true
        )
        setOptionStatus([...newOptionsStatus])
    }
    const triggerShowAnswer=()=>{
        setShowAnswerUsed(true)
        setSelectedAnswer(correctAnswer)
        setColor('green')
    }
    const handleOptionButton=(value:string)=>{
        setSelectedAnswer(value)
        setColor('gray')
    }
    const handleCheck=()=>{
        setOptionStatus(optionStatus.map((bool:boolean,index:number)=>true))
        setScore(selectedAnswer===correctAnswer?score+1:score)
        setColor(selectedAnswer===correctAnswer?'green':'red')
        setTimeout(()=>{
            setIndex(index+1)
            setOptionStatus(optionStatus.map((bool:boolean,index:number)=>false))
            setSelectedAnswer('')
        },1000)
    }
    return(
        <ImageBackground
        source={backgroundImage}
        style={{...gameTabStyle.gameTabContainer}}
        >
            <View style={{...gameTabStyle.scoreBoard}}>
                <Text style={{fontSize:30,color:'white'}}>Score:{score}</Text>
                <Text style={{fontSize:30,color:'white'}}>{index+1}/{gameQuestions.length}</Text>
            </View>
            <View style={{...gameTabStyle.scoreQuestion}}>
                <ImageBackground
                style={{width:'100%',height:'95%',justifyContent:'center',alignItems:'center'}}
                source={{uri:`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSVge8t9-peLC0flzcRUNBYkzWbP-Kx6nikg&usqp=CAU`}}
                >
                <Text style={{fontSize:20,width:'80%',textAlign:'center'}}>Q: {question}</Text>
                </ImageBackground>
            </View>
            <View style={{...gameTabStyle.scoreOptions}}>
                {options.map((option,index)=>
                    <Option width='40%' height='40%' text={option} key={index} 
                    disabled={optionStatus[index]} handlePress={handleOptionButton}bgColor={selectedAnswer===option?color:'white'}
                    />
                )}
                {/* <Option width='40%' height='40%' text='heloo' bgColor='red'/>
                <Option width='40%' height='40%' text='heloo' bgColor='red'/>

                <Option width='40%' height='40%' text='heloo' bgColor='red'/>
                <Option width='40%' height='40%' text='heloo' bgColor='red'/> */}

            </View>
            <View style={{...gameTabStyle.scoreLife}}>
                <TouchableOpacity
                    onPress={triggerFiftyFifty}
                    disabled={fiftyfiftyused}
                >
                    <Ionicons name="md-heart-half" size={50} color={fiftyfiftyused?"black":"red"} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={triggerShowAnswer}
                    disabled={showAnswerUsed}
                >
                    <Ionicons name="ios-eye" size={50} color={showAnswerUsed?"black":"red"} />  
                </TouchableOpacity>          
            </View>
            <View style={{...gameTabStyle.quit}}>
                <TouchableOpacity>
                    <Text style={{fontSize:40,color:'white'}}>QUIT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleCheck}
                >
                    <Text style={{fontSize:40,color:'white'}}>{selectedAnswer?"CHECK":"PASS"}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
export default GameTab