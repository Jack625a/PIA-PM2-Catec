import React from "react";
import {View,Text} from 'react-native';


export default function home(){
    return(
        <View>
     
        <Link href="/">Home</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/ajustes">Ajustes</Link>
      
    

    
            <Text>Pantalla Home</Text>
        </View>
    );
}