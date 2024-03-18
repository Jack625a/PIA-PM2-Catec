import { StyleSheet, Text, View,Image,ScrollView, Dimensions, Platform,TouchableOpacity} from 'react-native';
import React from 'react';
//Importacion de la navegacion
import { createBottomTabNavigator } from '@react-navigation/native';
import {NavigatorContainer} from '@react-navigation/bottom-tabs';
import InicioScreen from './screens/inicio.js';
import VideoScreen from './screens/videos.js';
import NoticiasScreen from './screens/noticias.js';
import PerfilScreen from './screens/perfil.js';


 //Definir las rutas de navegacion en la funcion
function Inicio(){
  <Text>Prueba Inicio</Text>
}
//Pantalla de videos
function Videos(){
  return(
    <Text>Prueba Videos</Text>
  );
}

function Noticias(){
  <Text>Prueba Noticias</Text>
}

function Perfil(){
  <Text>Prueba Perfil</Text>
}

const Tab=createBottomTabNavigator();
export default function App(){
  return(
    <NavigatorContainer>
     <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Inicio}/>
      <Tab.Screen name="Videos" component={Videos}/>
      <Tab.Screen name="Noticias" component={Noticias}/>
      <Tab.Screen name="Perfil" component={Perfil}/>
     </Tab.Navigator>
    </NavigatorContainer>
  );
}
