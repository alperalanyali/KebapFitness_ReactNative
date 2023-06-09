import React from 'react';
import {Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator}from '@react-navigation/native-stack';
import WelcomePage from './pages/WelcomePage';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='Welcome' component={WelcomePage}/>
        <Stack.Screen name="MemberSignScreen" component={MemberSign}/>
        <Stack.Screen name="MemberResultScreen" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App; 