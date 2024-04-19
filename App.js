
import {NavigationContainer} from '@react-navigation/native';
import { PaperProvider, Text} from 'react-native-paper';
import { MainStackNavigator } from './navigation/StackNavigator';
import React from "react";
import TabNavigator from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';



const App=()=>{
  return(
    <PaperProvider>
      <NavigationContainer>
          <DrawerNavigator/>
      </NavigationContainer>
    </PaperProvider>
  )
}
export default App;