//Creacion de un servidor web Simple

//Importar el modulo http
const http=require('http');
const fs=require('fs') //Modulo para acceso a sistema de archivos


//Definir el puerto y host en el que se ejecutara el servidor
const puerto=3000;
const host="localhost";

const ManejoPeticiones=(req,res)=>{
    console.log(`Solicitud recibida ${req.url}`)
    res.end("Hola bienvenidos al servidor");
};

//Crear el servidor
const servidor=http.createServer(ManejoPeticiones);


//Funcion para leer archivos y mostrar su contenido
fs.readFile('index.html',(err, data)=>{
    if(err){
        return console.error("Error al abrir el archivo" ,err);
    }
    console.log("Contenido del archivo: ")
    console.log(data);
});




//Configurar el servidor
servidor.listen(puerto,host, (error)=>{
    if(error){
        return console.error("Error al iniciar el servidor ".error);
    }
    console.log(`Servidor esta activo: http://${host}:${puerto}`);
});



