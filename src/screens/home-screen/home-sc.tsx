import React, { useEffect, useState } from 'react';
import { Text, Touchable, TouchableOpacity, View, Image, FlatList, Animated, Button, Modal, TouchableHighlight } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import { Ascending, Descending } from 'src/constans/icons';
import theme from 'theme/globalTheme';
import { styles } from '../../style/style'

import { ToggleButton } from '../../components/toggleButton'
import { Archive, Dislike, Like } from 'src/constans/icons';
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

import { setArchive,selectArchive } from "../../store/archive";
import { setLike,selectLike } from "../../store/like";
import { setSearch,selectSearch } from "../../store/search";
import { LoadingAnimation } from 'components/loadingAnimation';

// import Lottie from 'lottie-react-native';


export const Home = () => {
  const [data, setData] = useState([])
  const [allLanguages, setAllLanguages] = useState([])

  // const [fetched,setFetched]=useState(false)

  const dispatch = useDispatch(); // used to be like a setter
  const allArchivedGlobal = useSelector(selectArchive) // getter

  const allLikedGlobal = useSelector(selectLike) // getter

  const allSearchedGlobal = useSelector(selectSearch) // getter

  

  
  

  
  // const { data: repos, isFetched, isSuccess } = useQuery('repos', getRepos);
  // console.warn(repos)
  // console.warn(isFetched)
  // console.warn('isF',isFetched)

  //https://api.github.com/search/repositories?q=repo%2Fgit
  //https://api.github.com/search/repositories?q=git+in%3Aname&type=Repositories // just change the git word

  // let tempArray :any=[]
  // // let tempRequestes :any=[] // will contain all url requests
  // if (isFetched) {
  //   if(!fetched){
  //     // console.warn('repos',repos)
  //     // console.warn('repos length',repos.length)
  //     // // console.warn(repos[1]['owner']['avatar_url'])
    
  //     // console.warn('before')

  //     // for (let i=0 ;i<10 ;i++) {
  //     //   tempArray.push(repos.items[i])
  //     // }
  //     setData(repos.items)
  //     setFetched(true)
  //   }
   
  // }

  const per_page= 5
  // const sort ='desc' 
  const [currentButton, setCurrentButton] = useState('Descending')
  const [sort,setSort] =useState('desc')
 //asc // desc
  const GetSearchResults=()=>{
    axios.get(`https://api.github.com/search/repositories?q=${search}+in%3Aname&type=Repositories&per_page=${per_page}&sort=stars&order=${sort}`)
         .then((response) => {
            let result:any =response.data.items
            setData(result)
            // dispatch(setLike(allArchived))
            const allSearch = {...allSearchedGlobal} // to remove it from the archive 
            // console.warn('all',allSearch)
            // allSearch.push(search:result)
            allSearch[search+sort]= result 
            // console.warn('search word',search)
            dispatch(setSearch(allSearch))

        })
        .catch(()=>{
          console.warn('error happend repos')
        })
}

const [search, setSearchState] = useState('jquery'); // the initial value

const HandleSearch = (searchOn: string): void => {
  setSearchState(searchOn)
  // console.warn(searchOn)
}

useEffect(() => {
  // console.warn('in use effect')
  // console.warn('sort',sort)

  let found=false
  // console.warn('all',allSearchedGlobal)
  for (const key in allSearchedGlobal) {
    if (key == search+sort){ // found it previously in my searchon redux
      setData(allSearchedGlobal[key])
      // console.warn('found in my redux');
      found=true
    }
  }
  const timer = setTimeout(() => {
    if(!found){ // to avoid setting it twice
      // console.warn('not found btw');
      GetSearchResults()// if reached this means the typer stop typing thus will fetch the result
      setLoading(true)
    }
    
  }, 700) // 3 sec then search
  return () => clearTimeout(timer)
}, [search,sort])


  // const [isFetched, setIsFetched] = useState(false)
  // const getRepos = async () => {
  //   await fetch(`https://api.github.com/repositories`)
  //     .then(res => res.json())
  //     .then(data => { console.warn(data) })
  //     ;
  // }
  // if (!isFetched) { // only will fetch once 
  //   let Data = getRepos()
  //   var arrayOfValues = await Promise.all(arrayOfPromises)

  
  //   setData(Data)
  //   setIsFetched(true)
  // }


  // console.warn(typeof AllRepo)
  // console.warn(AllRepo)

  // if(isFetched)

  function insertAt(array: number[], index: number, ...elementsArray: any) {
    array.splice(index, 0, ...elementsArray);
  }
  // let array =[1,2,3]
  // insertAt(array,1,-1)
  // console.warn(array)
  const undo =()=>{
    let tempArray :any= [...data]
    insertAt(tempArray,currentRemovedIndex,currentRemoved)
    // tempArray.push(currentRemoved)
    setData(tempArray)
    RemoveUndo() // TO CLOSE THE POPUP

    const allArchived = [...allArchivedGlobal] // to remove it from the archive 
    allArchived.pop()
    dispatch(setArchive(allArchived))
  }


  const LeftSwipeActions = (progress: any, dragX: any) => {
    const scale: number = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clap'
    })
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', marginBottom: 24 }}
        // onPress={undo}
      >
        <Animated.Text
          style={{
            color: 'white',
            paddingHorizontal: 10,
            fontWeight: '600',
            transform: [{ scale: scale }]
            // paddingHorizontal: 30,
            // paddingVertical: 20,
          }}
        >
          Adding to Archive
            </Animated.Text>
      </View>
    );
  };
  const [currentRemoved,setCurrentRemoved]=useState()
  const [currentRemovedIndex,setCurrentRemovedIndex]=useState(0)

  const swipeFromLeftOpen = (item: any, index: any) => { // just remove it from the list 
    // console.warn('from leeeft')
    let tempArray = [...data]
    setCurrentRemoved(data[index])
    setCurrentRemovedIndex(index)

    const allArchived = [...allArchivedGlobal] // getter
    allArchived.push(data[index])
    dispatch(setArchive(allArchived))
  

    
    tempArray = tempArray.filter((currentItem) => {
      return currentItem != item
    })
    setData(tempArray)
    AddAndRemoveUndo() // the popup
  };

  const swipeFromRightOpen = () => {
    console.warn('Swipe from right');
  };

  //   const ListItem = () => (
  //     <Swipeable
  //       renderLeftActions={LeftSwipeActions}
  //     //   renderRightActions={rightSwipeActions}
  //       onSwipeableRightOpen={swipeFromRightOpen}
  //       onSwipeableLeftOpen={swipeFromLeftOpen}
  //     >
  //       <Card 
  //         archive={()=>ArchiveMe('asd')}
  //         like={()=>LikeMe('asda')}
  //         dislike={()=>DislikeMe('asdas')}

  //         /> 
  //     </Swipeable>
  //   );




  // const ToggleButton=(type:string) :void => {
  //     console.warn(type)
  // }

  const [page, setPage] = useState(0)
  const [stepSize, setStepSize] = useState(10)
  // let stepSize= 1
  // const StepSize =10

  // const handlePaging= ()=>{
  //  if (data.length - stepSize < stepSize && data.length - stepSize >= 0){
  //     console.warn('first if')
  //     setStepSize(data.length - stepSize) // last time with this number

  //  }
  //  if (data.length - stepSize <=0){
  //     console.warn('second if')
  //     setStepSize(0) // wont paginate anymore
  //  }
  //  console.warn('stepsize',stepSize)
  //  console.warn('page',page)
  //  setPage(stepSize+page)
  // }

  const ArchiveMe = (item: any) => {
    // console.warn(item)

  }
 

  const LikeMeFather = (item: any,index:any) => {
    const allLiked = [...allLikedGlobal] // getter
    const result=allLiked.find((currentItem)=>{
      return currentItem.id ==item.id
    })
    if (result==undefined){ // first time to add it 
      allLiked.push(data[index])
      dispatch(setLike(allLiked))
    }
  }
  const DislikeMeFather = (item: any,index:any) => {
    const allLiked = [...allLikedGlobal] // getter
    const result=allLiked.filter((currentItem)=>{
      return currentItem.id != item.id
    })
      dispatch(setLike(result))
  }



const [modalVisible, setModalVisible] = useState({opacity:0});



const AddAndRemoveUndo=()=>{ // the popup
  setModalVisible((prev) => ({...prev,opacity:1}))
  setTimeout(() => {
    setModalVisible((prev) => ({...prev,opacity:0}))
  }, 3000);
  
}

const RemoveUndo=()=>{ // to remove it when he confirm
  setModalVisible((prev) => ({...prev,opacity:0})) 
}

const [modalLongPress, setModalLongPress] = useState(false);


const [sonData,setSonData] =useState({})
const SonToFatherDetails = (data:any) => { // here I have all the data from my son card
  // console.warn('in father')
  // console.warn('data',data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  setSonData(data)
}
const [loading,setLoading]= useState(true)

useEffect(()=>{
  setTimeout(() => {
    setLoading(false)
  }, 2000);
},[loading])
 
if (loading){
  return(
    <View style={{backgroundColor:'black',flex:1}}>
        <LoadingAnimation/>
    </View>
  
  )
}
else{


  return (
    <View style={styles.body}>
      
    
 
      

      <View style={[styles.UndoStyle,modalVisible]}>
        <Text style={styles.undoText}>Removed One Repository</Text>
        <TouchableOpacity  style={styles.undoButton} onPress={undo}>
            <Text style={styles.undoTextButton}>undo</Text>
        </TouchableOpacity>
      </View>



      <View style={styles.headerContainer}>
        <Text style={styles.header}>Available Repos</Text>
        <View style={styles.barHeader}></View>
      </View>
     


      <TextInput style={styles.textInput}
        placeholder={'Search for a repo...'}
        placeholderTextColor="#636363" 
        value={search}
        onChangeText={(e) => HandleSearch(e)}
      >


      </TextInput>



      <ToggleButton
        currentButton={currentButton}
        setCurrentButton={setCurrentButton}
        setSort={setSort}
      />
      {/* <Button title='asdasd' onPress={toggleUndo}></Button> */}


      <FlatList style={{ width: "100%" }}

        //    maxToRenderPerBatch={1}
        onEndReached={() => setPage(page + stepSize)}

        // data={data.splice(page,page+stepSize)}  
        data={data}
        // data={AllRepo}  
        // keyExtractor={(item, index) => index.toString()}
        // renderItem={({item}) => 
        // <Card 
        //  archive={()=>ArchiveMe(item)}
        //  like={()=>LikeMe(item)}
        //  dislike={()=>DislikeMe(item)}

        // /> 
        
        renderItem={({ item, index }) =>
        <GestureHandlerRootView>
          <Swipeable
            renderLeftActions={LeftSwipeActions}
            //   renderRightActions={rightSwipeActions}
            // onSwipeableRightOpen={swipeFromRightOpen}
            onSwipeableLeftOpen={() => swipeFromLeftOpen(item, index)}

          >
            <Card
              archive={() => swipeFromLeftOpen(item,index)}
              like={() => LikeMeFather(item,index)}
              dislike={() => DislikeMeFather(item,index)}
              name={item['name']}
              description={item['description']}
              icon={item['owner']['avatar_url']}
              languages_url={item['languages_url']}
              allLanguages={allLanguages}
              // index={index}

              modalLongPress={modalLongPress}
              setModalLongPress={setModalLongPress}

              // item={item}

              SonToFatherDetails={SonToFatherDetails}
              
              from={'Home'}

              // likeStyle={likeStyle}
              // dislikeStyle={dislikeStyle}

              

            />
          </Swipeable >
          </GestureHandlerRootView>

        }

      // ItemSeparatorComponent={renderSeparator}  
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalLongPress}
        onRequestClose={() => setModalLongPress(!modalLongPress) } 
        >

          <BlurView
            style={styles.absolute}
            // viewRef={this.state.viewRef}
            blurType="thinMaterialDark"
            blurAmount={8}
            // blurRadius={14}
            // reducedTransparencyFallbackColor="red"
          />
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <OnPressCard sonData={sonData}/>
          </View>
        
         
      
      </Modal>

          










    </View>

  )

}

  





}