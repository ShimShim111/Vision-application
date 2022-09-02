import { getAllLang } from 'api/api';
import React, { useEffect, useState } from 'react';
import { View,Image, Text, TouchableOpacity, Modal } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { useQuery } from 'react-query';
// import { LinearGradient } from 'react-native-svg';
import { Archive, Dislike, Like } from "src/constans/icons"
import { styles } from "src/style/style"
import theme from 'theme/globalTheme';
import axios from 'axios';
import { OnPressCard } from './OnPressCard';
import { BlurView } from '@react-native-community/blur';



export const Card=(props:any) =>{
    // const [fetched,setFetched]=useState(false)
    // const [render,setRender]=useState(false)
    // console.warn('the current index',props.index);
    

    // const { data: languages, isFetched, isSuccess } = useQuery('languages', () => getAllLang(props.languages_url));
    const [allLanguages,setAllLanguages] =useState([])
    
    useEffect(() => { 
        GetLanguagesResponse()
        }, [])

    

    const GetLanguagesResponse=()=>{
        axios.get(props.languages_url)
             .then((response) => {
                let result =CalcPercantage(response.data)
                setAllLanguages(result)
   
            })
            .catch(()=>{
                console.warn('error happend langs')
              })
    }

    const CalcPercantage=(AllLang:any)=>{
        let totlaWords= 0 // initailly
        for (const currentLang in AllLang) {
            totlaWords+=AllLang[currentLang]
        }
        let tempArray:any=[]
        for (const currentLang in AllLang) {
            // Math.round(number * 10) / 10
            const Percentage=    Math.round(((AllLang[currentLang]/ totlaWords)*100)*10)/ 10
            const stringPerc =Percentage.toString()+'%' // '50%'
            let tempObj = {name:currentLang,per:Percentage,width:{width:stringPerc }}
            tempArray.push(tempObj)
        }
        return tempArray;
    }

    const getElementById=()=>{
        

    }

    
   
    // const [popUpIconStyle,setPopUpIconStyle] =useState({
    //     width:'50%'
    // })

    // setPopUpIconStyle(red:{borderColor:'red'})

   

    const onReleaseButton =()=>{
        // console.warn('released');
        if (props.modalLongPress==true){
            props.setModalLongPress(!props.modalLongPress)
        }
    }
      
    const onLongPressButton =()=>{
        props.setModalLongPress(!props.modalLongPress)
        props.SonToFatherDetails(sendData())
    }

    const sendData=()=>{
        const data={name:props.name,description:props.description,icon:props.icon}
        return data
    }


  const [likeStyle,setLikeStyle]=useState({})
  const [dislikeStyle,setDislikeStyle]=useState({})

  const LikeMe = (item: any) => {
    // console.warn(item, 'like')
    // console.warn()
    setLikeStyle({padding:theme.spacing.ms2})
    setDislikeStyle({padding:theme.spacing.s})
    props.like()

  }
  const DislikeMe = (item: any) => {
    setLikeStyle({padding:theme.spacing.s})
    setDislikeStyle({padding:theme.spacing.ms2})
    props.dislike()

  }


return(
    <>
    

         

         <View style={styles.cardParent} >
            <TouchableOpacity 
              onLongPress={onLongPressButton} 
              delayLongPress={300}
              onPressOut={onReleaseButton}
            //   onPress={()=>{console.warn(props.item)}}
            activeOpacity={0.5}>
                    <LinearGradient
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0}} 
                    colors={[theme.colors.cardGradient1,theme.colors.cardGradient2 ]} 
                    
                    style={styles.cardDetails}>
                    

                        <View style={styles.firstLine}>
                            
                        
                            <View style={styles.firstLineLeft}>
                                    <Image
                                        style={styles.logo}
                                        source={{
                                        uri: props.icon,
                                        }}
                                    />


                                    <Text style={styles.textCard}>{props.name}</Text>
                            </View>
                            
                            {props.from=='Home'?
                            <TouchableOpacity style={styles.iconWhite} onPress={props.archive}>
                                    <Archive style={styles.firstLineRight}/>
                            </TouchableOpacity>
                            :
                            <></>
                            
                            
                            }

                            {/* <TouchableOpacity style={styles.iconWhite} onPress={props.archive}>
                                    <Archive style={styles.firstLineRight}/>
                            </TouchableOpacity> */}
                        

                        
                        

                        </View>
                        <Text style={styles.textCard}>{props.description}</Text>


                        {props.from=='Home'?

                        <View style={styles.icons}> 
                                    <TouchableOpacity style={styles.iconAndText} onPress={LikeMe}>
                                            <Like style={{...styles.LikeIcon,...styles.iconSize,...likeStyle}} />
                                                    <Text style={styles.textCard}>Like</Text>

                                            

                                    </TouchableOpacity>
                        
                                    <TouchableOpacity style={styles.iconAndText} onPress={DislikeMe}>
                                        <Dislike style={{...styles.LikeIcon,...styles.iconSize,...dislikeStyle}}/>
                                            <Text style={styles.textCard}>Dislike</Text>

                                        

                                    </TouchableOpacity>
                        
                        </View>
                        :
                        <View style={styles.icons}> 
                         </View>

                        }

                        
                        
                        
                    
                    </LinearGradient>
            </TouchableOpacity>
           <View style={styles.allLanguages}>
            {
                allLanguages.map((currentLang:any)=>(
                    <View style={styles.language}>
                    <Text style={styles.languageTitle}>{currentLang.name}</Text>
                    <View style={styles.bar}>
                        <View style={[styles.progress,currentLang.width]}>
                                <View style={styles.circle}></View>
    
                        </View>
    
                    </View>
                    <Text  style={styles.languagePer}>{currentLang.per}%</Text>
    
                </View>

                ))
            }
            
          

        

          
            



           </View>

           </View>

    </>
)



}