import { StyleSheet, Text, View,Image,ScrollView, Dimensions, Platform,TouchableOpacity} from 'react-native';
import React from 'react';
//Importacion de la navegacion
import { createBottomTabNavigator } from '@react-navigation/native';
import {NavigatorContainer} from '@react-navigation/bottom-tabs';

 //Definir las rutas de navegacion en la funcion
function InicioScreen(){
  return(
  <Text>Prueba Inicio</Text>
  );
  
}
//Pantalla de videos
function VideosScreen(){
  return(
    <Text>Prueba Videos</Text>
  );
}

function NoticiasScreen(){
  return(
  <Text>Prueba Noticias</Text>
  );
  
}

function PerfilScreen(){
  return(
    <Text>Prueba Perfil</Text>
  );
  
}

const Tab=createBottomTabNavigator({
  Inicio:InicioScreen,
  Videos:VideosScreen,
  Noticias:NoticiasScreen,
  Perfil:PerfilScreen
});

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
