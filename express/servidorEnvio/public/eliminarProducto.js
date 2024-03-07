document.addEventListener('DOMContentLoaded', function(){
    const eliminarForm=document.getElementById('eliminarForm');
    const selectorProducto=document.getElementById('id');
cargarProductos()
    eliminarForm.addEventListener('submit', function(evento){
        evento.preventDefault();
        const formData=new FormData(eliminarForm);
        const id=formData.get('id');

        fetch(`/admin/${id}`,{
            method:'DELETE'
        })
        .then(response=>response.json())
        .then(productoEliminado=>alert('Producto Eliminado',productoEliminado));
        cargarProductos()

    })
    .catch(error=>console.error('Error al eliminar el Producto',error));


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
})