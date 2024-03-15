import { StyleSheet, Text, View,Image,ScrollView, Dimensions } from 'react-native';
import React from 'react';

import YoutubeIframePlayer from 'react-native-youtube-iframe-player';

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

const App=()=>{
  const renderBanners=({item})=>{
    <Image
      source={{uri:item.imagen}}
      style={styles.banner}
    ></Image>
  };

  //Renderizado de las noticias
  const renderNoticias=({item})=>{
    <View style={styles.noticiasCard}>
      <Image
        source={{uri:item.imagen}}
        style={styles.noticiasImagen}
      ></Image>
      <Text
        style={styles.noticiasTitulo}
      >
        {item.titulo}
      </Text>
    </View>
  };

  //Renderizar los videos
  const renderVideos=({item})=>{
    <View style={styles.contenedorVideo}>
      <Text style={styles.videoTitulo}>{item.titulo}</Text>
      <YoutubeIframePlayer
        videoUrl={item.link}
        style={styles.videoPlayer}
        height={210}
        width='100%'
        locale='km'
        durationFontSize={15}
/>
    </View>
  };

  return(
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {banners.map(item=>(
          <Image
            key={item.id}
            source={{uri:item.imagen}}
            style={styles.banner}
          ></Image>
        ))}
      </ScrollView>

      <Text style={styles.tituloSeccion}>Información</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {noticias.map(item=>(
          <View 
            key={item.id}
            style={styles.noticiasCard}
          >
            <Image
              source={{uri:item.imagen}}
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
        {videos.map(item=>(
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
                durationFontSize={15}
            />
            <Text style={styles.videoTitulo}>{item.titulo}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:'#fff'
  },
  banner:{
    width,
    height:250,
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
    marginHorizontal:10
  },
  videoTitulo:{
    fontSize:16,
    fontWeight:'bold',
    marginTop:8,
  },


});

export default App;
