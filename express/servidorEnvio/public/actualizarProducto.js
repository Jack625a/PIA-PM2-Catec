document.addEventListener('DOMContentLoaded', function(){
    const selectorProducto=document.getElementById('id');
    const nombreProducto=document.getElementById('nombre');
    const precioProducto=document.getElementById('precio');
    const imagenProducto=document.getElementById('imagen');
    const actualizarForm=document.getElementById('actualizarForm');
    cargarProductos()
    selectorProducto.addEventListener('change', function(){
        const idProducto=selectorProducto.value;
        //Funcion para obtener el producto
        obtenerProducto(idProducto);
    });



    actualizarForm.addEventListener('submit', function(evento){
        evento.preventDefault();
        const formData=new FormData(actualizarForm);
        const id=formData.get('id');
        const nombre=formData.get('nombre');
        const precio=formData.get('precio');
        const imagen=formData.get('imagen');

        //Ruta para actualizar
        fetch(`/admin/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre,precio,imagen})
        })
        .then(response=>response.json())
        .then(productoActualizado=>{
            alert('Producto actualizado correctamente', productoActualizado);
        })
        .catch(error=>console.error('Error al actualizar el producto',error));
    });
    
    
    //Funcion para cargar los producto al selector
    function cargarProductos(){
        fetch('/admin')
        .then(response=>response.json())
        .then(data=>{
            selectorProducto.innerHTML='';
            data.forEach(producto=>{
                const opciones=document.createElement('option');
                opciones.value=producto.id;
                opciones.textContent=`${producto.nombre}`;

                selectorProducto.appendChild(opciones)
            });
        })
        .catch(error=>console.error('Error al obtner los productos', error));
        
    }

    //Funcion para obtener el ´producto en el formulario
    function obtenerProducto(id){
        fetch(`/admin/${id}`)
        .then(response=>response.json())
        .then(producto=>{
            nombreProducto.value=producto.nombre;
            precioProducto.value=producto.precio;
            imagenProducto.value=producto.imagen;

        })
        .catch(error=>console.error('Error al obtener el producto',error));
    }

});