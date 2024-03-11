//Paso 1. Importar los modulos
const { error } = require('console');
const express=require('express');
const fs=require('fs');
const path=require('path')

//Paso 2. Creamos el servidor
const servidor=express();

//Paso3. archivo de lectura json
fs.readFile("mascotasadopcion.json", (error,data)=>{
    if(error){
        console.error('Error al obtener los datos',error);
        return;
    }
    const mascotas=JSON.parse(data);

});

//Rutas a seguir
//Configuracion de archivos estaticos desde la carpeta public
servidor.use(express.static(path.join(__dirname, 'public')));

//Ruta Principal
servidor.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public','index.html'));
});

//Ruta perdidos
servidor.get('/perdidos',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','perdidos.html'))
})
//Ruta perdidos
servidor.get('/perdidos',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','perdidos.html'))
})
//Ruta perdidos
servidor.get('/perdidos',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','perdidos.html'))
})
///rutas adoptados

//ruta tienda


const puerto=3000;
const host='localhost';

//Iniciamos el servidor

servidor.listen(puerto,host,()=>{
    console.log(`Servidor Activo http://${host}:${puerto}`);
});