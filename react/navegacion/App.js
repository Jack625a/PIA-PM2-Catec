import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Dimensions,ScrollView,StyleSheet,Image,FlatList,TouchableOpacity,Modal} from 'react-native';
import {FAB} from 'react-native-paper';
import YoutubeIframePlayer from 'react-native-youtube-iframe-player';
//Importacion de pantallas

import {HomeScreen} from './screens/inicio';
import {NoticiasScreen} from './screens/noticias';
import {VideoScreen} from './screens/videos';


const {width}=Dimensions.get('window');

//Datos para el banner
const banners=[
  {
    id:1,
    imagen:'https://www.paho.org/sites/default/files/styles/max_650x650/public/sdg-diagram-environmental-determinants-es.png',
  },
  {
    id:2,
    imagen:'https://www.ambientum.com/wp-content/uploads/2018/03/conservacion-naturaleza-8.jpg',
  },
  {
    id:3,
    imagen:'https://i0.wp.com/ejemplomx.com/wp-content/uploads/2023/09/IMG-20230926-WA0000.jpg',
  },
  {
    id:4,
    imagen:'https://salud-ambiental.com/wp-content/uploads/2016/09/environmental-health.jpg',
  }
];

//datos de noticias o informaciones
const noticias=[
  {
    id:1,
    titulo:'Colores del Reciclaje',
    imagen:'https://wwfint.awsassets.panda.org/img/original/post_reciclaje.png',

  },
  {
    id:2,
    titulo:'Colores del Reciclaje',
    imagen:'https://wwfint.awsassets.panda.org/img/original/post_reciclaje.png',

  },
  {
    id:3,
    titulo:'Colores del Reciclaje',
    imagen:'https://wwfint.awsassets.panda.org/img/original/post_reciclaje.png',

  },
  {
    id:4,
    titulo:'Colores del Reciclaje',
    imagen:'https://wwfint.awsassets.panda.org/img/original/post_reciclaje.png',

  },
  {
    id:5,
    titulo:'Colores del Reciclaje',
    imagen:'https://wwfint.awsassets.panda.org/img/original/post_reciclaje.png',

  },
  {
    id:6,
    titulo:'Colores del Reciclaje',
    imagen:'https://wwfint.awsassets.panda.org/img/original/post_reciclaje.png',

  }

];

//Datos para videos
 videos=[
  {
    id:1,
    titulo:'BENEFICIOS DEL RECICLAJE ♻️',
    link:'https://www.youtube.com/watch?v=5q2HSdgO7CA'
  },
  {
    id:2,
    titulo:'BENEFICIOS DEL RECICLAJE ♻️',
    link:'https://www.youtube.com/watch?v=5q2HSdgO7CA'
  },
  {
    id:3,
    titulo:'BENEFICIOS DEL RECICLAJE ♻️',
    link:'https://www.youtube.com/watch?v=5q2HSdgO7CA'
  },
  {
    id:4,
    titulo:'BENEFICIOS DEL RECICLAJE ♻️',
    link:'https://www.youtube.com/watch?v=5q2HSdgO7CA'
  },
  {
    id:5,
    titulo:'BENEFICIOS DEL RECICLAJE ♻️',
    link:'https://www.youtube.com/watch?v=5q2HSdgO7CA'
  },
  {
    id:6,
    titulo:'BENEFICIOS DEL RECICLAJE ♻️',
    link:'https://www.youtube.com/watch?v=5q2HSdgO7CA'
  },
  {
    id:7,
    titulo:'BENEFICIOS DEL RECICLAJE ♻️',
    link:'https://www.youtube.com/watch?v=5q2HSdgO7CA'
  }
 ];

//Datos para Pantalla Noticias
//Base de datos
const data=[
  {
  id: '1',
  titulo: 'Actividad física para principiantes',
  imagen: 'https://www.vivosano.org/wp-content/uploads/2022/08/actividad-fisica.jpg',
  descripcionCorta: 'Guía completa para comenzar a realizar actividad física de forma segura y efectiva.',
  descripcionCompleta: 'Esta guía te ayudará a dar los primeros pasos hacia un estilo de vida más activo. Encontrarás información sobre los beneficios de la actividad física, cómo elegir la actividad adecuada para ti, consejos para empezar de forma gradual y cómo mantenerte motivado.',
  },
  {
  id: '2',
  titulo: 'Entrenamiento para mejorar la resistencia cardiovascular',
  imagen: 'https://blog.base.net/wp-content/uploads/2018/01/mejorar-resistencia-cardiovascular.jpg',
  descripcionCorta: 'Plan de entrenamiento de 8 semanas para aumentar tu resistencia cardiovascular y quemar calorías.',
  descripcionCompleta: 'Este plan de entrenamiento está diseñado para ayudarte a mejorar tu capacidad cardiovascular de forma segura y efectiva. Incluye ejercicios aeróbicos de intensidad moderada y alta, así como consejos para la recuperación y la nutrición.',
  },
  {
  id: '3',
  titulo: 'Ejercicios para fortalecer el core',
  imagen: 'https://go-fit.es/wp-content/uploads/2021/06/mejora-resistencia.jpg',
  descripcionCorta: 'Rutina de ejercicios para fortalecer los músculos del core y mejorar la postura.',
  descripcionCompleta: 'Esta rutina de ejercicios te ayudará a fortalecer los músculos abdominales, lumbares y oblicuos, que son esenciales para una buena postura y un cuerpo sano. Encontrarás ejercicios de diferentes niveles de dificultad, para que puedas adaptarlos a tu condición física.',
  },
  {
  id: '4',
  titulo: "Yoga para principiantes",
  imagen: "https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/temas/yoga.jpg",
  descripcionCorta: "Guía introductoria al yoga, con posturas básicas y consejos para principiantes.",
  descripcionCompleta: "Esta guía te enseñará los fundamentos del yoga, incluyendo la respiración, la concentración y las posturas básicas. Encontrarás consejos para principiantes y una secuencia de yoga suave para empezar."
  },
  {
  id: '5',
  titulo: 'Alimentación saludable para deportistas',
  imagen: 'https://cifpn1.com/siop/wp-content/uploads/2021/04/Plato-saludable.jpeg',
  descripcionCorta: 'Consejos para una dieta balanceada que te ayude a rendir al máximo en tus entrenamientos.',
  descripcionCompleta: 'Esta guía te ayudará a comprender la importancia de la nutrición para los deportistas. Encontrarás consejos para elegir alimentos saludables, planificar tus comidas y preparar snacks energéticos.',
  },
  {
    id: '6',
    titulo: 'Actividad física para principiantes',
    imagen: 'https://www.vivosano.org/wp-content/uploads/2022/08/actividad-fisica.jpg',
    descripcionCorta: 'Guía completa para comenzar a realizar actividad física de forma segura y efectiva.',
    descripcionCompleta: 'Esta guía te ayudará a dar los primeros pasos hacia un estilo de vida más activo. Encontrarás información sobre los beneficios de la actividad física, cómo elegir la actividad adecuada para ti, consejos para empezar de forma gradual y cómo mantenerte motivado.',
    },
    {
    id: '7',
    titulo: 'Entrenamiento para mejorar la resistencia cardiovascular',
    imagen: 'https://blog.base.net/wp-content/uploads/2018/01/mejorar-resistencia-cardiovascular.jpg',
    descripcionCorta: 'Plan de entrenamiento de 8 semanas para aumentar tu resistencia cardiovascular y quemar calorías.',
    descripcionCompleta: 'Este plan de entrenamiento está diseñado para ayudarte a mejorar tu capacidad cardiovascular de forma segura y efectiva. Incluye ejercicios aeróbicos de intensidad moderada y alta, así como consejos para la recuperación y la nutrición.',
    },
    {
    id: '8',
    titulo: 'Ejercicios para fortalecer el core',
    imagen: 'https://go-fit.es/wp-content/uploads/2021/06/mejora-resistencia.jpg',
    descripcionCorta: 'Rutina de ejercicios para fortalecer los músculos del core y mejorar la postura.',
    descripcionCompleta: 'Esta rutina de ejercicios te ayudará a fortalecer los músculos abdominales, lumbares y oblicuos, que son esenciales para una buena postura y un cuerpo sano. Encontrarás ejercicios de diferentes niveles de dificultad, para que puedas adaptarlos a tu condición física.',
    },
    {
    id: '9',
    titulo: "Yoga para principiantes",
    imagen: "https://www.webconsultas.com/sites/default/files/styles/wch_image_schema/public/temas/yoga.jpg",
    descripcionCorta: "Guía introductoria al yoga, con posturas básicas y consejos para principiantes.",
    descripcionCompleta: "Esta guía te enseñará los fundamentos del yoga, incluyendo la respiración, la concentración y las posturas básicas. Encontrarás consejos para principiantes y una secuencia de yoga suave para empezar."
    },
    {
    id: '10',
    titulo: 'Alimentación saludable para deportistas',
    imagen: 'https://cifpn1.com/siop/wp-content/uploads/2021/04/Plato-saludable.jpeg',
    descripcionCorta: 'Consejos para una dieta balanceada que te ayude a rendir al máximo en tus entrenamientos.',
    descripcionCompleta: 'Esta guía te ayudará a comprender la importancia de la nutrición para los deportistas. Encontrarás consejos para elegir alimentos saludables, planificar tus comidas y preparar snacks energéticos.',
    }
];




//Funcion para pantalla inicio
function PantallaInicio({navigation}){
  return(
    <><ScrollView
      contentContainerStyle={styles.container1}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {banners.map(item => (
          <Image
            key={item.id}
            source={{ uri: item.imagen }}
            style={styles.banner}
          ></Image>
        ))}
      </ScrollView>

      <Text style={styles.tituloSeccion}>Información</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {noticias.map(item => (
          <View
            key={item.id}
            style={styles.noticiasCard}
          >
            <Image
              source={{ uri: item.imagen }}
              style={styles.noticiasImagen}
            >
            </Image>
            <Text style={styles.noticiasTitulo}>
              {item.titulo}
            </Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.tituloSeccion}>Videos</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {videos.map(item => (
          <View
            key={item.id}
            style={styles.videoPlayer}
          >
            <YoutubeIframePlayer
              videoUrl={item.link}
              style={styles.videoPlayer}
              height={210}
              width='100%'
              locale='km'
              durationFontSize={15} />
            <Text style={styles.videoTitulo}>{item.titulo}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <FAB
          style={{ position: 'absolute', margin: 16, right: 0, bottom: 100 }}
          icon="home"
          onPress={() => navigation.navigate('Inicio')} />
        <FAB
          style={{ position: 'absolute', margin: 16, right: 0, bottom: 170 }}
          icon="newspaper"
          onPress={() => navigation.navigate('Noticias')} />
        <FAB
          style={{ position: 'absolute', margin: 16, right: 0, bottom: 240 }}
          icon="video"
          onPress={() => navigation.navigate('Video')} />
      </View></>
  );
}
function PantallaVideo(){
  return(
    <View>
      <Text>Prueba</Text>
    </View>
  );
}

function PantallaNoticias({navigation}){
  const [seleccionItem,setSelecionItem]=useState(null);
  //Funcion para el click al item del Flatlist
  const clickItem=(item)=>{
    setSelecionItem(item);
  };


  const renderItem=({item})=>{
    return(
    <TouchableOpacity
    onPress={()=>clickItem(item)}
    style={styles.contenedorItems}
    
    >
    <Image
      source={{uri:item.imagen}}
      style={styles.imagenItem}
    />
    <View style={styles.itemTextoContenedor}>
      <Text style={styles.itemTitulo}>{item.titulo}</Text>
      <Text style={styles.itemDescripcion}>{item.descripcionCorta}</Text>
    </View>
    </TouchableOpacity>
    );
  };

return(
  <><ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatlistContenedor} />
      {seleccionItem && (
        <Modal
          visible={seleccionItem !== null}
          animationType='slide'
          transparent={true}
        >
          <View style={styles.modalContenedor}>
            <View style={styles.modalContenido}>
              <Text style={styles.modalTitulo}>{seleccionItem.titulo}</Text>
              <Image
                source={{ uri: seleccionItem.imagen }}
                style={styles.modalImagen}
              ></Image>
              <Text style={styles.modalDescripcion}>{seleccionItem.descripcionCompleta}</Text>
              <TouchableOpacity
                onPress={() => setSelecionItem(null)}
                style={styles.botonCerrar}
              >
                <Text style={styles.botonCerrarTexto}>Cerrar</Text>

              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView><View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<FAB
  style={{ position: 'absolute', margin: 16, right: 0, bottom: 100 }}
  icon="home"
  onPress={() => navigation.navigate('Inicio')} />
<FAB
  style={{ position: 'absolute', margin: 16, right: 0, bottom: 170 }}
  icon="newspaper"
  onPress={() => navigation.navigate('Noticias')} />
<FAB
  style={{ position: 'absolute', margin: 16, right: 0, bottom: 240 }}
  icon="video"
  onPress={() => navigation.navigate('Video')} />
</View></>
);
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={PantallaInicio}
          options={{
            headerTitle:'Inicio'
          }}
        />
        <Stack.Screen
          name="Noticias"
          component={PantallaNoticias}
          options={{
            headerTitle: 'Noticias',
          }}
        />
        <Stack.Screen
          name="Video"
          component={PantallaVideo}
          options={{
            headerTitle: 'Video',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



//Estilos
const styles = StyleSheet.create({
  container1: {
    flexGrow: 1,
    backgroundColor:'#fff',
    padding:8,
  },
  banner:{
    width,
    height:350,
  },
  tituloSeccion:{
    fontSize:24,
    fontWeight:'bold',
    marginVertical:10,
    paddingHorizontal:20,
  },
  noticiasCard:{
    width:250,
    marginHorizontal:10,
  },
  noticiasImagen:{
    width:'100%',
    height:150,
    borderRadius:10,
  },
  noticiasTitulo:{
    fontSize:16,
    fontWeight:'bold',
    marginTop:8,
  },
  videoPlayer:{
    width:250,
    marginHorizontal:10,
    height:250,
  },
  videoTitulo:{
    fontSize:16,
    fontWeight:'bold',
    marginTop:8,
  },
  flatlistContenedor:{
    paddingHorizontal:20,
  },
  contenedorItems:{
    flexDirection:'row',
    backgroundColor:'#fff',
    borderRadius:10,
    marginBottom:20,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.25,
    elevation:5,
  },
  imagenItem:{
    width:200,
    height:200,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,

  },
  itemTextoContenedor:{
    flex:1,
    padding:10
  },
  itemTitulo:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:5,
  },
  itemDescripcion:{
    fontSize:16,
  },
  modalContenedor:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  modalContenido:{
    backgroundColor:'#fff',
    borderRadius:10,
    padding:20,
    width:'80%',
  },
  modalTitulo:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:10,
  },
  modalImagen:{
    width:'100%',
    height:300,
    marginBottom:10,
    borderRadius:10,
  },
  modalDescripcion:{
    fontSize:18,
    marginBottom:10,
  },
  botonCerrar:{
    backgroundColor:'red',
    padding:10,
    borderRadius:5,
    alignSelf:'flex-end',
  },
  botonCerrarTexto:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold',
  },



});
export default App;
