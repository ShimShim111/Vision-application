import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { enableScreens } from 'react-native-screens';

import { UserStack } from './app-navigator/app-navigator';

// enableScreens();

const Root = () => {
  return (
    <NavigationContainer>
      <UserStack />
    </NavigationContainer>
  );
};
export default Root;
