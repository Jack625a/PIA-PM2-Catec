//Ejercicio Clase: Crear un servidor que implemente una calculadora simple 
//Solicitudes HTTP, estatico, alamcenamiento de datos

//IMPORTAR LOS MODULOS
const http=require('http');
const fs=require('fs');
const path=require('path');
const url=require('url');
const calculadora=require('./calculadora');

//Definir el puerto host del servidor
const puerto=3000;
const host='localhost';


//Crear el servidor
const servidor=http.createServer((req,res)=>{
    if(req.method==='GET'){
        //Definir los archivos estaticos (public)
        let archivo='.'+req.url;
        if(archivo==='./'){
            archivo='./public/index.html';
        }

    const archivosExternos=String(path.extname(archivo)).toLowerCase();
    const contentType={
        '.html':'text/html',
        '.css':'text/css',
        'js':'application/javascript',
    };
    const contenidoCabeceras=contentType[archivosExternos]||'text/plain';

    fs.readFile(archivo, (error, content)=>{
        //Definir los errores (404-500)
        if(error){
            if(error.code='ENOENT'){
                res.writeHead(404,{
                    'Content-Type':'text/html'
                });
                res.end("Error al encontrar el archivo...Error 404")
            }else{
                res.writeHead(500);
                res.end(`Error de conectividad: ${error.code} ${error.message}`);
            }
        }else{
            res.writeHead(200,{
                'Content-Type':contenidoCabeceras
            });
            res.end(content);
        }
    });
    }else if(req.method==='POST'&& req.url==='/calcular'){
        //Completar las variables y el script
        let body='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });
        req.on('end',()=>{
            const datos=url.parse(`?${body}`,true).query;
            const operacion=datos.operacion;
            const numero1=parseFloat(datos.numero1);
            const numero2=parseFloat(datos.numero2);
            let resultado;

            switch(operacion){
                case 'sumar':
                    resultado=calculadora.sumar(numero1,numero2);
                    break;
                case 'restar':
                    resultado=calculadora.restar(numero1,numero2);
                    break;
                case 'multiplicar':
                    resultado=calculadora.multiplicar(numero1,numero2);
                    break;
                case 'dividir':
                    resultado=calculadora.dividir(numero1,numero2);
                    break;
                default:
                    resultado='Operacion no valida';

            }
        })
    }
})





