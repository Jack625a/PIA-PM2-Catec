//Accion para crear los elementos del carrito de compras
///Prueba envio 
document.addEventListener('DOMContentLoaded',function(){
    fetch('/carritoCompras')
     .then(response=>response.json())
     .then(data=>{
        const carritoContenedor=document.createElement('div')
        
        data.forEach(carrito=>{
            const carritoDiv=document.createElement('div');
            carritoDiv.classList.add('carrito');

            //Agregar el contenido
            const nombre=document.createElement('p');
            nombre.classList.add('nombreCarrito');
            nombre.textContent=carrito.nombre;
            carritoDiv.appendChild(nombre);

            const precio=document.createElement('p');
            precio.classList.add('precioCarrito');
            precio.textContent=carrito.precio;
            carritoDiv.appendChild(precio+'Bs');

            const cantidadCarrito=document.createElement('p');
            cantidadCarrito.classList.add('cantidad');
            cantidadCarrito.textContent=carrito.cantidad;
            carritoDiv.appendChild(cantidadCarrito);



            carritoContenedor.appendChild(carritoDiv);
        });
        
     }).catch(error=>console.error('Error al obtener los productos agregados al carrito',error));

})




