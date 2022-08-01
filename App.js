

 import React, { useState } from 'react';
 import {StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Login from './Components/Login';

import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import Todos from './Components/Todos';



const App = ()=>{
  const Stack = createNativeStackNavigator();
 

  // const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Registeration' component={Signup} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Todo' component={Todos} />


      </Stack.Navigator>
    </NavigationContainer>
  )


}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },

});
export default App;
