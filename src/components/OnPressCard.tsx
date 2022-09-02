import { Text, View,Image } from "react-native"
import React from 'react';
import LinearGradient from "react-native-linear-gradient"

import { styles } from "src/style/style"

export const OnPressCard=(props:any)=>{


    return(
        <>  
             <View style={styles.cardParent}>
                <View
            
                
                style={styles.cardDetailsHold}>
    
                    <View style={styles.firstLine}>
                        
                      
                        <View style={styles.firstLineLeft}>
                                <Image
                                    style={styles.logo}
                                    source={{
                                    uri:  props.sonData.icon,
                                    }}
                                />
                                <Text style={styles.textCardHoldTitle}>{props.sonData.name}</Text>
                        </View>   
                    </View>
                    <Text style={styles.textCardHold}>{props.sonData.description}</Text>          
                </View>
               </View>
        </>
    )


}