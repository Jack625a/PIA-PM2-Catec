import React, {useState} from 'react';
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity,Modal} from 'react-native';

//Base de datos
const data=[
    {
    id: 1,
    titulo: "Actividad física para principiantes",
    imagen: "[Imagen de persona caminando por un parque]",
    descripcionCorta: "Guía completa para comenzar a realizar actividad física de forma segura y efectiva.",
    descripcionCompleta: "Esta guía te ayudará a dar los primeros pasos hacia un estilo de vida más activo. Encontrarás información sobre los beneficios de la actividad física, cómo elegir la actividad adecuada para ti, consejos para empezar de forma gradual y cómo mantenerte motivado."
    },
    {
    id: 2,
    titulo: "Entrenamiento para mejorar la resistencia cardiovascular",
    "imagen": "[Imagen de persona corriendo en una pista]",
    "descripcionCorta": "Plan de entrenamiento de 8 semanas para aumentar tu resistencia cardiovascular y quemar calorías.",
    "descripcionCompleta": "Este plan de entrenamiento está diseñado para ayudarte a mejorar tu capacidad cardiovascular de forma segura y efectiva. Incluye ejercicios aeróbicos de intensidad moderada y alta, así como consejos para la recuperación y la nutrición."
    },
    {
    "id": 3,
    "titulo": "Ejercicios para fortalecer el core",
    "imagen": "[Imagen de persona haciendo una plancha]",
    "descripcionCorta": "Rutina de ejercicios para fortalecer los músculos del core y mejorar la postura.",
    "descripcionCompleta": "Esta rutina de ejercicios te ayudará a fortalecer los músculos abdominales, lumbares y oblicuos, que son esenciales para una buena postura y un cuerpo sano. Encontrarás ejercicios de diferentes niveles de dificultad, para que puedas adaptarlos a tu condición física."
    },
    {
    "id": 4,
    "titulo": "Yoga para principiantes",
    "imagen": "[Imagen de persona haciendo yoga en una esterilla]",
    "descripcionCorta": "Guía introductoria al yoga, con posturas básicas y consejos para principiantes.",
    "descripcionCompleta": "Esta guía te enseñará los fundamentos del yoga, incluyendo la respiración, la concentración y las posturas básicas. Encontrarás consejos para principiantes y una secuencia de yoga suave para empezar."
    },
    {
    "id": 5,
    "titulo": "Alimentación saludable para deportistas",
    "imagen": "[Imagen de plato con comida saludable]",
    "descripcionCorta": "Consejos para una dieta balanceada que te ayude a rendir al máximo en tus entrenamientos.",
    "descripcionCompleta": "Esta guía te ayudará a comprender la importancia de la nutrición para los deportistas. Encontrarás consejos para elegir alimentos saludables, planificar tus comidas y preparar snacks energéticos."
    },
    {
    "id": 6,
    "titulo": "Cómo prevenir lesiones deportivas",
    "imagen": "[Imagen de persona estirando antes de hacer ejercicio]",
    "descripcionCorta": "Guía para evitar lesiones durante la práctica de actividad física.",
    "descripcionCompleta": "Esta guía te enseñará cómo prevenir lesiones deportivas mediante el calentamiento, la técnica adecuada y la recuperación. Encontrarás información sobre los tipos de lesiones más comunes y cómo tratarlas."
    },
    {
    "id": 7,
    "titulo": "Cómo mantenerte motivado para hacer ejercicio",
    "imagen": "[Imagen de grupo de personas haciendo ejercicio juntas]",
    "descripcionCorta": "Consejos para superar la pereza y mantenerte en forma a largo plazo.",
    "descripcionCompleta": "Esta guía te ayudará a encontrar la motivación para hacer ejercicio de forma regular. Encontrarás consejos para establecer metas realistas, crear un plan de entrenamiento y encontrar actividades que disfrutes."
    },
    {
    "id": 8,
    "titulo": "Beneficios del ejercicio para la salud mental",
    "imagen": "[Imagen de persona sonriendo después de hacer ejercicio]",
    "descripcionCorta": "Cómo la actividad física puede mejorar tu estado de ánimo y reducir el estrés.",
    "descripcionCompleta": "Esta guía te explicará cómo la actividad física puede mejorar tu salud mental. Encontrarás información sobre los beneficios del ejercicio para el estado de ánimo, la ansiedad y la depresión."
    },
    {
    "id": 9,
    "titulo": "Cómo elegir la ropa adecuada para hacer ejercicio",
    "imagen": "[Imagen de persona con ropa deportiva]",
    "descripcionCorta": "Consejos para elegir ropa cómoda y funcional para tus entrenamientos.",
    "descripcionCompleta": "Esta guía te ayudará a elegir la ropa adecuada para hacer ejercicio de forma cómoda y segura. Encontrarás información sobre los diferentes tipos de ropa deportiva y los materiales más adecuados para cada actividad."
    },
]




export default function App() {
  return (
    <View style={styles.container}>
      <Text>Competencias</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
