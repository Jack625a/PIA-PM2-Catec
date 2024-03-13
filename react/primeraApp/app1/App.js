import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity, ScrollView, FlatList} from 'react-native';

//DATOS LOCALES
const estudiantes=[
  {
    id:'1',
    nombre:'Dilmar',
    edad:26,
    foto:'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg'
  },
  {
    id:'2',
    nombre:'Jhonatan',
    edad:24,
    foto:'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg'
  },
  {
    id:'3',
    nombre:'Ramiro',
    edad:24,
    foto:'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg'
  },
  {
    id:'4',
    nombre:'David',
    edad:24,
    foto:'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg'
  },
  {
    id:'5',
    nombre:'Yeltsin',
    edad:24,
    foto:'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg'
  }
];

export default function App() {
  const [texto,setTexto]=useState('');
//Funcion para obtener Texto
  const obtenerTexto=(inputValue)=>{
    setTexto(inputValue);
  };

//Funcion del boton touchableOpacity
const funcionClic=()=>{
  console.log('Se hizo click en el boton')
}

//Renderizado
const renderItem=({item})=>(
  <><Text style={styles.titulo}>{item.nombre}-{item.edad}</Text><Image source={item.foto}
  style={styles.Imagen}
  >

  </Image>
  <Button title='Enviar' style={styles.textoBoton}></Button>
  </>
);

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <FlatList
          data={estudiantes}
          renderItem={renderItem}
          keyExtractor={item=>item.id}
          style={styles.flatlist}
        >
        </FlatList>
    </ScrollView>
    
   
  );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical:20,
    
  },
  titulo:{
    fontSize:30,
    color: 'blue',
    fontWeight:'bold',
  },
  contenedor2:{
    backgroundColor:'red',
    width:'250px',
    height:'500px',
  },
  Imagen:{
    width:250,
    height:250,
    borderRadius:50,
  },
  input:{
    width:200,
    height:50,
    borderWidth:1,
    borderColor:'white',
    backgroundColor:'gray',
    padding:20,
    margin:5
  },
  boton:{
    backgroundColor:'green',
    height:40,
    width:200,
    borderRadius:10,
    padding:20,
    alignItems:'center',
    alignContent:'center',
    margin:10
  },
  textoBoton:{
    fontSize:16,
    fontWeight:'bold',
    fontFamily:'Arial',
    color:'white',
    alignItems:'center'
  },
  flatlist:{
    padding:10,
    margin:20,
  }

 
});
