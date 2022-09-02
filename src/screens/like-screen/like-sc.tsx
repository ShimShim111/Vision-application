import React, { useEffect, useState } from 'react';
import { Text, Touchable, TouchableOpacity, View, Image, FlatList, Animated, Button, Modal, TouchableHighlight } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import { Ascending, Descending } from 'src/constans/icons';
import theme from 'theme/globalTheme';
import { styles } from '../../style/style'

import { ToggleButton } from '../../components/toggleButton'
import { Card } from 'components/Card';
import { OnPressCard } from 'components/OnPressCard';
// import { getRepos} from 'api/api';
import { useQueries, useQuery } from 'react-query';
import { getAllLang, getRepos } from 'api/api';

import {Swipeable,GestureHandlerRootView} from 'react-native-gesture-handler';
  import axios from 'axios';
import AxiosResponse  from 'axios';
import { opacity } from '@shopify/restyle';

import { BlurView } from '@react-native-community/blur';
import {useDispatch,useSelector} from 'react-redux';
import { setLike,selectLike } from "../../store/like";






export const Like = (props:any) => {
  const [allLanguages, setAllLanguages] = useState([])

  const allLikedGlobal = useSelector(selectLike) // getter
  const [data, setData] = useState([]) // will send the data from home screen


  useEffect(()=>{
    setData(allLikedGlobal)
  },[allLikedGlobal])


  const [page, setPage] = useState(0)
  const [stepSize, setStepSize] = useState(10)
  

 



const [modalLongPress, setModalLongPress] = useState(false);

const [sonData,setSonData] =useState({})
const SonToFatherDetails = (data:any) => { // here I have all the data from my son card
  setSonData(data)
}
 

  


  return (
    <View style={styles.body}>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Favourite Repos</Text>
        <View style={styles.barHeader}></View>
      </View>

      <FlatList style={{ width: "100%",marginTop:theme.spacing.xl }}
        onEndReached={() => setPage(page + stepSize)}
        data={data}
        renderItem={({ item, index }) =>  
            <Card 
              name={item['name']}
              description={item['description']}
              icon={item['owner']['avatar_url']}
              languages_url={item['languages_url']}
              allLanguages={allLanguages}
              modalLongPress={modalLongPress}
              setModalLongPress={setModalLongPress}
              SonToFatherDetails={SonToFatherDetails}
              from={'Like'}
            />

        }

      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalLongPress}
        onRequestClose={() => setModalLongPress(!modalLongPress) } 
        >
          <BlurView
            style={styles.absolute}
            blurAmount={8}
          />
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <OnPressCard sonData={sonData}/>
          </View>
      </Modal>
    </View>

  )


}