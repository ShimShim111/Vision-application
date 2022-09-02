// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import {
    SafeAreaProvider,
    initialWindowMetrics,
  } from 'react-native-safe-area-context';

import Root from "navigation/index"
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';




import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { UserStack } from "navigation/app-navigator/app-navigator";
import theme from 'theme/globalTheme';


const queryClient = new QueryClient();

const App=() => {
  return (
    // <React.Fragment>
    //   <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <ThemeProvider theme={theme}>
        <Root/>
  </ThemeProvider>
       
    //   </SafeAreaProvider>
    // </React.Fragment>

//    <View style={{flex:1,backgroundColor:'red'}}>
//  {/* <Root></Root> */}
//  <NavigationContainer>
//       <UserStack />
//     </NavigationContainer>


//    </View>
  );
};

export default () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}




// export const App =() =>{
// return(
// <>
 
// <Root/>
// </>
// )
// }



