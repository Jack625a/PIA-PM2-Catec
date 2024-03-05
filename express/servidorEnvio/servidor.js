//Modulos a Utilizar
const express=require('express');
const path=require('path');
const fs=require('fs');

//Crear el servidor
const servidor=express();

const puerto=3000;
const host='localhost';

//Configurar el acceso a los archivos estaticos
servidor.use(express.static(path.join(__dirname, 'public')));
servidor.use(express.json());

//Configurar las rutas del servidor
let carrito=[];

servidor.get('/productos',(req,res)=>{
    fs.readFile(path.join(__dirname, 'data','producto.json'),(error,data)=>{
        if(error){
            res.status(500).send('Error de conectividad')
        }else{
            res.json(JSON.parse(data));
        }
    });
});


const carritoFilePath = path.join(__dirname, 'data', 'carrito.json');


servidor.post('/carrito', (req, res) => {
    const { id, nombre, precio } = req.body;
    const productoIndex = carrito.findIndex(item => item.id === id);

    if (productoIndex !== -1) {
        carrito[productoIndex].cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }

    //Funcion para guadar los datos del carrito en el archivo json
    fs.writeFile(carritoFilePath, JSON.stringify(carrito), error=>{
        if(error){
            console.error('Error al enviar los datos al carrito',error);
            res.status(500).send('Error al agregar los productos al carrito');
        }else{
            res.send('Producto agregado Correctamente')
        }
    })





});

//Prueba mostrar datos carrito
servidor.get('/mostrarCarrito',(req,res)=>{
    fs.readFile(path.join(__dirname, 'data','carrito.json'),(error,data)=>{
        if(error){
            res.status(500).send('Error de conectividad')
        }else{
            res.json(JSON.parse(data));
        }
    });
});

servidor.get('/carritoCompras',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','mostrarCarrito.html'))
    //res.json(carrito);
});



//Ruta para confirmar compra
servidor.post('/comprar',(req,res)=>{
    const compra=[...carrito];
    carrito=[];
    res.json(compra);
});

//Inicializar el servidor

servidor.listen(puerto,host,()=>{
    console.log(`Servidor activo: http://${host}:${puerto}`);
});






