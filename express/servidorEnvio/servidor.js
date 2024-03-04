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

//Prueba mostrar datos carrito
servidor.get('/mostrarCarrito',(req,res)=>{
    fs.readFile(path.join(__dirname,'carritoCompras')),(error,carrito)=>{
        if(error){
            res.status(500).send('Error al obtner los datos')
        }else{
            res.json(JSON.parse(carrito))
        }
    }
})





//Rutas agregar un producto al carrito de compras
servidor.post('/carrito',(req,res)=>{
    //fs.readFile(path.join(__dirname,'public','carrito.html'))
    const {id,nombre,precio}=req.body;
    const producto=carrito.find(item=> item.id===id);
    const nombreProducto=carrito.find(item=>item.nombre===nombre)
    const precioProducto=carrito.find(item=>item.precio===precio)
    if(producto){
        producto.cantidad++;
    }else{
        carrito.push({id,cantidad:1,nombre,precio});
        //const agregado=document.createElement('p')
        //agregado.textContent(carrito)

    }
    res.send('Producto agregado correctamente...');
});

servidor.get('/carritoCompras',(req,res)=>{
    //res.sendFile(path.join(__dirname,'public','carritoCompras.html'))
    res.json(carrito);
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






