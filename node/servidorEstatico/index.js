//Importamos los modulos
const http=require('http'); //Modulo para recibir solicitudes HTTP
const fs=require('fs');  //Modulo para lectura del sistema de archivos
const path=require('path'); //Modulo para acceso a archivos estaticos del servidor


//Puerto y Host
const puerto=3000;
const host="localhost";
const carpetaPublica=path.join(__dirname, 'public');

//Manejo solicitudes

const manejoPeticiones =(req,res)=>{
    console.log(`Solicitud recibida ${req.url}`);

    let file=path.join(carpetaPublica,req.url === '/' ? 'index.html':req.url );

    fs.readFile(file, (error, contenido)=>{
        if(error){
            if(error.code==='ENOENT'){
                res.writeHead(404);
                res.end("Error archivo no encontrado");
            }else{
                res.writeHead(500);
                res.end("Error de conectividad");
            }
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(contenido);
        }
    });
}

//Crear servidor
const servidor=http.createServer(manejoPeticiones);

//Configurar el servidor
servidor.listen(puerto, host, (error)=>{
    if(error){
        return console.error("Error al iniciar el servidor", error);
    }
    console.log(`Servidor Activo: http://${host}:${puerto}`);
});
