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
let productos=[];
servidor.get('/productos',(req,res)=>{
    fs.readFile(path.join(__dirname, 'data','productos.json'),(error,data)=>{
        if(error){
            res.status(500).send('Error de conectividad')
        }else{
            res.json(JSON.parse(data));
            productos=JSON.parse(data)
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

servidor.get('/adminCatec',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','admin.html'))
});

//Ruta actualizar
servidor.get('/adminactualizar',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','actualizarProducto.html'))
});
//Ruta Eliminar
servidor.get('/admineliminar',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','eliminarProducto.html'))
});


//Ruta para confirmar compra
servidor.post('/comprar',(req,res)=>{
    const compra=[...carrito];
    carrito=[];
    res.json(compra);
});

//RUTAS DEL ADMINISTRADOR - CRUD
//AGREGAR UN NUEVO PRODUCTO - BASE DE DATOS
//CRUD
//CREATE() -POST
//READER() -GET
//UPDATE() -PUT
//DELETE() -DELETE


//Obtener los datos de la base de datos local
servidor.get('/admin',(req,res)=>{
    fs.readFile(path.join(__dirname, 'data','productos.json'),(error,data)=>{
        if(error){
            res.status(500).send('Error de conectividad')
        }else{
            res.json(JSON.parse(data));
            productos=JSON.parse(data)
        }
    });
});




//RUTA AGREGAR UN NUEVO PRODUCTO
servidor.post('/admin',(req,res)=>{
    const nuevoProducto=req.body;
    nuevoProducto.id=productos.length+1;
    productos.push(nuevoProducto);
    //Funcion para guardar el producto nuevo
    guardarProducto();
    res.status(201).json(nuevoProducto);
});
//Ruta para actualizar un producto existente
servidor.put('/admin/:id', (req,res)=>{
    const productId=parseInt(req.params.id);
    const productoSeleccion=productos.findIndex(producto=>producto.id===productId);
    if(productoSeleccion !==-1){
        productos[productoSeleccion]={
            ...productos[productId], ...req.body
        };
        guardarProducto();
        res.json(productos[productoSeleccion]);
    }else{
        res.status(404).json({error:'Producto no encontrado!'});
    }
});

//Ruta para Eliminar un producto
servidor.delete('/admin/:id',(req,res)=>{
    const productId=parseInt(req.params.id);
    const productoSeleccion=productos.findIndex(producto=>producto.id===productId);
    if(productoSeleccion!==-1){
        const productoEliminar=productos.splice(productoSeleccion,1);
        guardarProducto()
        res.json(productoEliminar[0]);
    }else{
        res.status(404).json({error:'Producto no encontrado!'});
    }
});


//Ruta para Eliminar un producto del carrito
servidor.delete('/carritoCompras/:id',(req,res)=>{
    const productId=parseInt(req.params.id);
    const productoSeleccion=carrito.findIndex(producto=>producto.id===productId);
    if(productoSeleccion!==-1){
        const productoEliminar=carrito.splice(productoSeleccion,1);
        guardarProductoCarrito()
        res.json(productoEliminar[0]);
    }else{
        res.status(404).json({error:'Producto no encontrado!'});
    }
});


//Funcion para guardar productos en archivo JSON

function guardarProducto(){
    fs.writeFile(path.join(__dirname,'data','productos.json'), JSON.stringify(productos,null,2),error=>{
        if(error){
            console.error('Error al guardar el producto ',error);
        }
    });
}

//Funcion para guardar productos en archivo JSON

function guardarProductoCarrito(){
    fs.writeFile(path.join(__dirname,'data','carrito.json'), JSON.stringify(productos,null,2),error=>{
        if(error){
            console.error('Error al guardar el producto ',error);
        }
    });
}



//Inicializar el servidor

servidor.listen(puerto,host,()=>{
    console.log(`Servidor activo: http://${host}:${puerto}`);
});

//CRUD EN EXPRESS




