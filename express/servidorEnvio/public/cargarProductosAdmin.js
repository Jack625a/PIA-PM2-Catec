document.addEventListener('DOMContentLoaded', function(){
    const listaproduct=document.getElementById('productos');
    function mostrarProducto(){
        fetch('/admin')
     .then(response=>response.json())
     .then(data=>{ data.forEach(producto=>{
            const productoLista=document.createElement('div');
            productoLista.classList.add('listProductos');

            const elementoLista=document.createElement('li');
            elementoLista.textContent=`${producto.nombre} - ${producto.precio}Bs`;
            
            productoLista.appendChild(elementoLista);

          listaproduct.appendChild(productoLista);  
            });
       
        })
        .catch(error=>console.error('Error al cargar la lista de productos', error));
    }

 mostrarProducto()
    
});