
import React from'react'
import Lottie from 'lottie-react-native';

export const LoadingAnimation=()=>{
    return(
        <Lottie 
        source={require('../assets/animation/loadingAnimation.json')} 
        autoPlay={true} 
        loop={true}
        
        
        />
    )
}