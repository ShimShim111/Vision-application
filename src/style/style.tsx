import { StyleSheet } from "react-native";
import theme from "theme/globalTheme";
import { RFValue } from 'react-native-responsive-fontsize';
import { height } from '../theme/globalTheme';
import { backgroundColor } from "@shopify/restyle";



export const styles = StyleSheet.create({
    body:{
        backgroundColor:theme.colors.Background,
        //  backgroundColor:'white',
        flex:1,
        // justifyContent:"center",
        alignItems:'center',
        paddingVertical:theme.spacing.l,
        position:'relative',

    },
    header:{
        // flex:1,  
        fontSize: RFValue(24, height),
        color:theme.colors.header,
        fontWeight:'bold',
        // textAlign:'left'
        // backgroundColor:'red',
      
        // marginVertical:theme.spacing.l,
        // alignSelf:"flex-start",
    },
    headerContainer:{
        marginHorizontal:theme.spacing.l,
        position:'relative',
        alignSelf:'flex-start',
        // backgroundColor:'green'
    },
    barHeader:{
        height:1,
        // width:20,
        backgroundColor:'white',
        position:'absolute',
        left:0,
        right: '30%',
        top:'120%'
    },
    textInput:{
        // backgroundColor:'red',
        borderColor:theme.colors.textinput,
        borderRadius:12,
        borderWidth:2,
        alignSelf:'stretch',
        marginHorizontal: theme.spacing.l,
        paddingHorizontal:theme.spacing.m,
        marginVertical:theme.spacing.l,
        fontSize:RFValue(18,height),
        color:'white',
       
    },

    
    sort:{
        backgroundColor:theme.colors.sortBackground,
        marginBottom:theme.spacing.l,
        alignSelf:'stretch',
        borderRadius:12,
        flexDirection:'row',
        marginHorizontal: theme.spacing.l,
        // paddingHorizontal:theme.spacing.m,
        height:60,
        overflow:'hidden'
    },

    cardParent:{
        backgroundColor:theme.colors.sortBackground,
        alignSelf:'stretch',
        borderRadius:24,
        flexDirection:'column',
        justifyContent:'flex-start',
        marginHorizontal: theme.spacing.l,
        marginBottom:theme.spacing.l,
        // paddingHorizontal:theme.spacing.m,
        minHeight:height/5,
        overflow:'hidden',
        

    },

    cardDetails:{
        backgroundColor:theme.colors.sortActive,
        alignSelf:'stretch',
        borderRadius:24,
        flexDirection:'column',
        justifyContent:'space-around',
        // marginHorizontal: theme.spacing.l,
        // paddingHorizontal:theme.spacing.m,
        // height:'50%',
        // flex:1,
        minHeight:height/4,
        overflow:'hidden',
        padding:theme.spacing.m,
    },

    cardDetailsHold:{
        backgroundColor:theme.colors.sortInActive,
        alignSelf:'stretch',
        borderRadius:24,
        flexDirection:'column',
        justifyContent:'space-around',
        // marginHorizontal: theme.spacing.l,
        // paddingHorizontal:theme.spacing.m,
        // height:'50%',
        // flex:1,
        minHeight:height/4,
        overflow:'hidden',
        padding:theme.spacing.m,
    },
    language:{
        flexDirection:'row',
        // backgroundColor:'blue',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:theme.spacing.s

        // padding:theme.spacing.m
        // alignSelf:'center'


    },
    allLanguages:{
        padding:theme.spacing.m,
        // backgroundColor:'red',
        minHeight:height/12,
        // flex:1,
        // flex:1
        // minHeight:'100%'

    },
    bar:{
        backgroundColor:'gray',
        height:6,
        borderRadius:8,
        // flex:2,
        width:'50%',
        // marginHorizontal:theme.spacing.m,
        
        // alignSelf:'flex-end'

    },

    progress:{
        borderRadius:8,
        backgroundColor:theme.colors.sortActive,
        height:6,
        width:'0%',         // change this depending on the percentage
        position:'relative',
        justifyContent:'center'

    },
    circle:{
        width:14,
        height:14,
        borderRadius:10,
        backgroundColor:theme.colors.sortActive,
        position:'absolute',
        right:-theme.spacing.s,
        
        // top:0,
        // bottom:0
        
    },



    sortBoth:{
        flex:1,
        backgroundColor:theme.colors.sortActive,
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:'center',    
        borderRadius:12,
    },
    sortInActive:{
        backgroundColor:theme.colors.sortInActive
    },
    sortActive:{
        backgroundColor:theme.colors.sortActive
    },
    
    textSort:{
        color:'white',
        fontSize:RFValue(18,height),
    },

    textCard:{
        color:'black',
        fontSize:RFValue(18,height),
        textAlign:'center',
        // backgroundColor:'red'
    },

    textCardHold:{
        color:'white',
        fontSize:RFValue(18,height),
        textAlign:'center',
        // backgroundColor:'red'
    },

    textCardHoldTitle:{
        color:theme.colors.sortActive,
        fontSize:RFValue(18,height),
        fontWeight:'bold',
        textAlign:'center',
        // backgroundColor:'red'
    },



    firstLine:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        alignSelf:'center',
        alignItems:'center',
        // backgroundColor:'white',
        // flex:1

    },

    firstLineLeft:{
        flexDirection:'row',
        alignItems:'center',
        width:'60%',
        justifyContent:"flex-start",
    },

    firstLineRight:{
        width:'40%',
        // backgroundColor:'white',
        padding:theme.spacing.ms,
        // width:22,

    },

    icons:{
        flexDirection:'row',
        justifyContent:"space-between",
        // backgroundColor:'red',  
        width:'50%'
    },
    iconAndText:{
        flexDirection:'row',
        // flex:1,
        // justifyContent:'flex-start',
        alignItems:'center',
        justifyContent:'space-around'

    },
    logo:{
        width:44,
        height:44,
        borderRadius:22,
        marginRight:10
        // flex:1
        
    },
    iconWhite:{
        backgroundColor:'white',
        padding:theme.spacing.s,
        borderRadius:theme.spacing.xl,
    },

    iconSize:{
        padding:theme.spacing.s,
    },
    LikeIcon:{
        marginHorizontal:theme.spacing.s
    },
    languageTitle:{
        color:'white',
        fontSize:RFValue(18,height),
        width:'28%',
        marginEnd:5,
        // flex:1,
        // backgroundColor:'blue',
    },
    languagePer:{
        color:'white',
        fontSize:RFValue(18,height),
        textAlign:"right",
        width:'20%',
  
    },
    UndoStyle:{
        backgroundColor:'#3C4043',
        position:'absolute',
        left:'15%',
        right:'15%',
        top:'92%',
        // marginHorizontal:theme.spacing.m,
        zIndex:99,
        height:40,
        opacity:1,
        borderRadius:12,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    undoText:{  
        color:'white',
        fontSize:RFValue(18,height),
        marginLeft:theme.spacing.m,
    },
    undoButton:{
        backgroundColor:theme.colors.sortActive,
        alignSelf:'stretch',
        justifyContent:'center',
        borderRadius:12,
    },
  
    undoTextButton:{  
        color:'white',
        fontSize:RFValue(18,height),
        margin:theme.spacing.s,
    },


    img:{
        // backgroundColor:'rgba(52, 52, 52, 0.8)',
        position:"absolute",
        // top:'50%',
        // opacity:1,

        width:500,
        height:500
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // opacity:0.6
        // backgroundColor:'black'
      },

      navigationBar:{
        paddingVertical: 5,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        backgroundColor:'white',
        position:'absolute',
        height:50,
      },
      activeCircle:{
        width:6,
        height:6,
        backgroundColor:theme.colors.sortActive,
        borderRadius:3,
      }

    
})