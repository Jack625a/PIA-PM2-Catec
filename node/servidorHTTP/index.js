//Configurar el servidor
//Modulos a utilizar
const http=require('http');
const fs=require('fs');
const path=require('path');
const qs=require('querystring');


//Definir el puerto y el host del servidor
const puerto=3000;
const host="localhost";


//Configurar el servidor (archivos publicos)
const servidor=http.createServer((req,res)=>{
    //Definir el metodo
    if(req.method==='GET'){
        let archivo='.'+req.url;
        if(archivo==='./')
        {
        archivo='./public/index.html';
        }
        const externosArchivos=String(path.extname(archivo)).toLocaleLowerCase();
        const contentType={
            '.html':'text/html',
            '.css':'text/css',
        };
        const cabecerasContentType=contentType[externosArchivos]||'text/plain';
        
        fs.readFile(archivo, (error, content)=>{
            if(error){
                if(error.code==='ENOENT'){
                    res.writeHead(404,{
                        'Content-Type':'text/html'
                    });
                    res.end('Error 404, pagina no existente!')
                }else{
                    res.writeHead(500);
                    res.end("Error de conectividad!!!");
                }
            }else{
                res.writeHead(200,{
                    'Content-Type':cabecerasContentType
                });
                res.end(content,'utf-8');
            }
        });
    }else if(req.method==='POST'&& req.url==='/submit'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });
        req.on('end',()=>{
            const formData=qs.parse(body);
            res.writeHead(200,{
                'Content-Type':'text/html'
            });
            res.end(`Mensaje recibido: Bienvenido ${formData.nombre}`);
        }); 
    }else{
        res.writeHead(404,{
            'Content-Type':'text/html'
        });
        res.end('Error 404.')
    }       
});

servidor.listen(puerto,host,()=>{
    console.log(`Servidor activo: http://${host}:${puerto}`);
})

