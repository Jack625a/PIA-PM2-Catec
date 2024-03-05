document.addEventListener('DOMContentLoaded', function() {
    fetch('/mostrarCarrito')
        .then(response => response.json())
        .then(data => {
            const carritoContenedor = document.getElementById('carrito');

            data.forEach((producto, index) => {
                const carritoDiv = document.createElement('div');
                carritoDiv.classList.add('carrito-item');

                //const id = document.createElement('p');
                //id.textContent = 'ID: ' + index; // Usamos el índice del array como ID
                //carritoDiv.appendChild(id);

                const nombre = document.createElement('p');
                nombre.textContent = 'Nombre: ' + producto.nombre;
                carritoDiv.appendChild(nombre);

                const precio = document.createElement('p');
                precio.textContent = 'Precio: ' + producto.precio + ' Bs';
                carritoDiv.appendChild(precio);

                const cantidad = document.createElement('p');
                cantidad.textContent = 'Cantidad: ' + producto.cantidad;
                carritoDiv.appendChild(cantidad);

                //Botones para modificar la cantidad
                const btnAdd=document.createElement('button');
                const btnRetirar=document.createElement('button')
                btnAdd.classList.add('btnAdd-R');
                btnRetirar.classList.add('btnAdd-R');
                btnAdd.textContent='+';
                btnRetirar.textContent='-';
                carritoDiv.appendChild(btnAdd);
                carritoDiv.appendChild(btnRetirar);



                //Total a pagar
                const subtotal=producto.cantidad*producto.precio
                const elementoTotal=document.createElement('p');
                elementoTotal.textContent='Subtotal: '+ subtotal+ 'Bs';
                elementoTotal.classList.add('subtotal')
                carritoDiv.appendChild(elementoTotal)

                //Boton para Eliminar el producto
                const botonEliminar=document.createElement('button');
                botonEliminar.textContent='Eliminar 🗑️';
                botonEliminar.classList.add('btnEliminar');
                carritoDiv.appendChild(botonEliminar);

                carritoContenedor.appendChild(carritoDiv);
            });
        })
        .catch(error => console.error('Error al obtener los productos agregados al carrito', error));
});
