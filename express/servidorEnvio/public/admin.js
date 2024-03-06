document.addEventListener('DOMContentLoaded', function(){
    const productoForm=document.getElementById('productoFrom');
    const listaProductos=document.getElementById('productos');

    productoForm.addEventListener('submit', function(evento){
        evento.preventDefault();
        const formData=new FormData(productoForm);
        const nuevoProducto={
            nombre:formData.get('nombre'),
            precio:parseFloat(formData.get('precio')),  
            imagen:formData.get('imagen'),
        }
        const url='/admin';
        const method='POST';
        if(formData.has(`id`)){
            url+=`/${formData.get('id')}`;
            method='PUT';

        }fetch(url,{
            method,
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(nuevoProducto)
        })
        .then(response=>response.json())
        .then(producto=>{
            if(method==='POST'){
                //FUNCION PARA AGREGAR LOS PRODUCTOS
                agregarProductoLista(producto);
            }else{
                actualizarProductoLista(producto);
            }
            productoForm.reset();
        })
        .catch(error=>console.error('Error al guardar los productos',error));
    });

    //Funcion para agregar producto lista
    function agregarProductoLista(producto){
        const li=document.createElement('li');
        li.textContent=`${producto.nombre} - ${producto.precio}Bs`;
        listaProductos.appendChild(li);
    }

    //Funcion para actualizar producto lista
    function actualizarProductoLista(producto){
        const li=listaProductos.querySelector([
            dataid="${producto.id}"]);
        if(li){
            li.textContent=`${producto.nombre} - ${producto.precio}Bs`;
        }
    }

    function cargarProducto(){
        fetch('/admin')
        .then(response=>response.json())
        .then(data=>{ data.forEach(producto=>{
               const productoLista=document.createElement('div');
               productoLista.classList.add('listProductos');
   
               const elementoLista=document.createElement('li');
               elementoLista.textContent=`${producto.nombre} - ${producto.precio}Bs`;
               
               productoLista.appendChild(elementoLista);
   
             listaProductos.appendChild(productoLista);  
               });
          
           })
           .catch(error=>console.error('Error al cargar la lista de productos', error));
       }
   

    cargarProducto();
});

//accion de cargado de datos
