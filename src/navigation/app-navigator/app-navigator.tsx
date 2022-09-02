import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Archive, Home, Like} from "screens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import { ParamsList } from "../parmas-list";
import { ArchiveActive, ArchiveInActive, AscendingActive, HomeActive, HomeInActive, LikeActive, LikeInActive } from "src/constans/icons";
import { styles } from "src/style/style";
import { View } from "react-native";
import { backgroundColor } from "@shopify/restyle";
import theme from "theme/globalTheme";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Icon from 'react-native-vector-icons/Feather';
// import Icon2 from 'react-native-vector-icons/Octicons';
// import Icon3 from 'react-native-vector-icons/MaterialIcons';


const AuthStack = createStackNavigator<ParamsList>();
const Tab = createBottomTabNavigator();

export const UserStack = () => {
  const forFade = ({ current }: any) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return ( // will find all the placeholder component in SignUp Screen
  <Tab.Navigator
  
  screenOptions={({ route }) => ({
    
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused  ? 'HomeActive' : 'HomeInActive';
      
        
      } else if (route.name === 'Archive') {
        iconName = focused ? 'ArchiveActive' : 'ArchiveInActive';
      }

      else if (route.name === 'Like') {
        iconName = focused ? 'LikeActive' : 'LikeInActive';
      }

      // You can return any component that you like here!
      if (iconName=='HomeActive'){
        return(   
          <View style={{justifyContent:"space-evenly",alignItems:'center',flex:1}}> 
               <HomeActive style={{padding:theme.spacing.ms}}/>
               <View style={styles.activeCircle}></View>
          </View>
           
       )   
      }
      else if (iconName=='HomeInActive'){
        return(   
          <HomeInActive style={{padding:theme.spacing.ms}}/>
        )
      
      }


      else if (iconName=='ArchiveActive'){
        return(   
           <View style={{justifyContent:"space-evenly",alignItems:'center',flex:1}}> 
                 <ArchiveActive style={{padding:theme.spacing.ms}}/>
               <View style={styles.activeCircle}></View>
          </View>
        )
      
      }

      else if (iconName=='ArchiveInActive'){
        return(   
          <ArchiveInActive style={{padding:theme.spacing.ms}}/>
        )
      
      }

      else if (iconName=='LikeActive'){
        return(      
           <View style={{justifyContent:"space-evenly",alignItems:'center',flex:1}}> 
              <LikeActive style={{padding:theme.spacing.ms}}/>
               <View style={styles.activeCircle}></View>
            </View>
        )
      
      }

      else if (iconName=='LikeInActive'){
        return(   
          <LikeInActive style={{padding:theme.spacing.ms}}/>
        )
      
      }

      
       
       
      
  
  
        
     
    
    
       
    },
  
    // tabbarlabel: 'Home',
    tabBarShowLabel:false,
    headerShown: false,
    // swipeEnabled: true,
    tabBarActiveTintColor: theme.colors.iconActive,
    tabBarInactiveTintColor: theme.colors.iconInActive,
    // tabBarActiveTintColor: '#58ceb2',
    // tabBarInactiveTintColor: 'gray',
    //Tab bar styles can be added here
    tabBarStyle:{
      // borderTopLeftRadius:15,\
      // paddingVertical: 5,
      borderRadius:24,
      backgroundColor:theme.colors.sortBackground,
      position:'absolute',
      left:'10%',
      right:'10%',
      bottom:5,
      // height:50,
    
    
    },
      
    // tabBarLabelStyle:{
    //   // color:'transparent'
      
    // },
  
    
  })}
>
      
      {/* <AuthStack.Screen name="Home" component={Home} /> */}

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Archive" component={Archive} />
      <Tab.Screen name="Like" component={Like} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}


      
    </Tab.Navigator>
  );
};
