//DOM
document.addEventListener('DOMContentLoaded',function(){
    fetch('/productos')
     .then(response=>response.json())
     .then(data=>{
        const productosContenedor=document.getElementById('productos');
        data.forEach(producto=>{
            const productoDiv=document.createElement('div');
            productoDiv.classList.add('producto');

            //Imagen del producto
            const imagen=document.createElement('img');
            imagen.src=producto.imagen;
            productoDiv.appendChild(imagen);

            //Nombre Producto
            const nombre=document.createElement('h3');
            nombre.textContent=producto.nombre;
            productoDiv.appendChild(nombre);

            //Precio Producto
            const precio=document.createElement('p');
            precio.textContent=producto.precio+" Bs";
            productoDiv.appendChild(precio);

            //Boton para agregar al carrito
            const botonAgregar=document.createElement('button');
            botonAgregar.textContent='Agregar al Carrito 🛒';
            botonAgregar.addEventListener('click',()=>{
                //Funcion para llamar a la ruta carrito (/carrito)
                agregarCarrito(producto.id,producto.nombre,producto.precio);
            });
            productoDiv.appendChild(botonAgregar);

            //Agregar todo al contenedor principal
            productosContenedor.appendChild(productoDiv);
            
        });
     })
     .catch(error=> console.error('Error al obtner los productos',error));

     function agregarCarrito(id, nombre, precio) {
        fetch('/carrito', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, nombre, precio })
        })
        .then(response => response.text())
        .then(mensaje => alert(mensaje))
        .catch(error => console.error('Error al agregar el producto', error));
    }
    

     const botonComprar=document.getElementById('comprar');

     botonComprar.addEventListener('click',()=>{
        comprar();
     });

    function comprar(){
        fetch('/comprar',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response=>response.json())
        .then(compra=>{
            console.log('Compra Exitosa: ',compra)
            alert('Compra exitosa!!!');
        })
        .catch(error=>console.error('Error al realizar la compra', error));
    }
});

