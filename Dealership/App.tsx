import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catalog from './scr/Catalog';
import HomeScreen from './scr/HomeScreen';
import tecnicoScreeen from './scr/Tecnico';

import AsesoriaScreeen from './scr/SoliticutdInfo';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="INICIO" component={HomeScreen} />
        <Stack.Screen name="CATALOGO" component={Catalog} />
        <Stack.Screen name="TECNICO"   component={tecnicoScreeen} />
        <Stack.Screen name ="ASESORIA" component={AsesoriaScreeen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
