import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import {  DescendingInActive, DescendingActive,AscendingActive,AscendingInActive} from "src/constans/icons"
import { styles } from "src/style/style"
import theme from "theme/globalTheme"


export const OButton =(props:any) =>{

    const iconRender= () =>{
         if (props.title=='Ascending'){
            if (props.currentButton==props.title){ // active black
                return( <AscendingActive style={styles.iconSize}></AscendingActive>)
            }
            else{
                return( <AscendingInActive style={styles.iconSize}></AscendingInActive>)
            }
         }
         else {
            if (props.currentButton==props.title){ // active black
                return( <DescendingActive style={styles.iconSize}></DescendingActive>)
            }
            else{
                return( <DescendingInActive style={styles.iconSize}></DescendingInActive>)
            }
         }
    }

    const Action=()=>{
        // console.warn('in action')
        props.setCurrentButton(props.title)
        if (props.title=='Ascending')
            props.setSort('asc')
        else
            props.setSort('desc')
        // console.warn(props.)
    }
    
return (

    <TouchableOpacity  
            style={{...styles.sortBoth,
            backgroundColor:props.currentButton==props.title?
            theme.colors.sortActive:theme.colors.sortInActive }} 
            onPress={Action}>


            {iconRender()}
           
       <Text style={{...styles.textSort,
                color:props.currentButton==props.title?
                theme.colors.sortActiveText:theme.colors.sortInActiveText
    
        }}>{props.title}</Text>
   </TouchableOpacity>

)
} 