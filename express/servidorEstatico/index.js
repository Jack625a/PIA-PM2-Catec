//Configurar los modulos
const express=require('express');
const path=require('path');

//Crear el servidor
const servidor=express();
//Configuracion del puerto y el host
const puerto=3000;
const host='localhost';

//Configuracion de archivos estaticos desde la carpeta public
servidor.use(express.static(path.join(__dirname, 'public')));

//Definir las rutas estaticas (html)

//Ruta Principal
servidor.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public','index.html'));
});
//Ruta de contactos
servidor.get('/contactos',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'contactos.html'));
});

//Ruta productos
servidor.get('/productos',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','producto.html'));
});

//Inicializar el servidor
servidor.listen(puerto,host,()=>{
    console.log(`Servidor Activo: http://${host}:${puerto}`);
});


