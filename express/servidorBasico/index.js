//Servidor Basico 
//Paso 1. Configurar los modulos
const express=require('express');

//Paso 2 Creacion del servidor
const servidor=express();

//Paso 3 Configuracion del puerto y host
const puerto=3000;
const host='localhost';

//Paso 4 Manejo de Rutas
servidor.get('/',(req,res)=>{
    res.send('Bienvenidos a express');
});

//Paso 5. Activamos el servidor
servidor.listen(puerto,host,()=>{
    console.log(`Servidor activo: http://${host}:${puerto}`);
});