import { StyleSheet, Text, View,Image,ScrollView, Dimensions, Platform,TouchableOpacity} from 'react-native';
import React from 'react';
//Importacion de la navegacion
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigatorContainer} from '@react-navigation/native';
import {FAB} from 'react-native-paper';
//import InicioScreen from './screens/inicio.js';
//import VideoScreen from './screens/videos.js';
//import NoticiasScreen from './screens/noticias.js';
//import PerfilScreen from './screens/perfil.js';

//Funciones para las vistas de la pantalla

function HomeScreen({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Pantalla de Inicio</Text>
      <FAB
        style={{position:'absolute', margin:16,right:0,bottom:100}}
        icon="home"
        onPress={()=>navigation.navigate('Inicio')}
      />
      <FAB
        style={{position:'absolute', margin:16,right:0,bottom:100}}
        icon="newspaper"
        onPress={()=>navigation.navigate('Noticias')}
      />
      <FAB
        style={{position:'absolute', margin:16,right:0,bottom:100}}
        icon="video"
        onPress={()=>navigation.navigate('Video')}
      />
    </View>
  );
}

function NoticiasPantalla(){
  return(
    <View>
      <Text>Prueba pantalla noticias</Text>
    </View>
  );
}

function VideoPantalla(){
  return(
    <View>
      <Text>Prueba Pantalla Video</Text>
    </View>
  );
}

const Stack=createNativeStackNavigator();

function App(){
  return(
    <NavigatorContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Inicio'
          component={HomeScreen}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name='Noticias'
          component={NoticiasPantalla}
          options={{
            headerTitle:'Noticias',
          }}
        />
        <Stack.Screen
          name='Video'
          component={VideoPantalla}
          options={{
            headerTitle:'Videos',
          }}
        
        />
      </Stack.Navigator>
    </NavigatorContainer>
  );
}

export default App;