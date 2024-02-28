document.addEventListener('DOMContentLoaded', function() {
    fetch('/productos')
      .then(response => response.json())
      .then(data => {
        const productosContainer = document.getElementById('productos');
        data.forEach(producto => {
          const productoDiv = document.createElement('div');
          productoDiv.classList.add('producto');
  
          const imagen = document.createElement('img');
          imagen.src = producto.imagen;
          productoDiv.appendChild(imagen);
  
          const nombre = document.createElement('p');
          nombre.textContent = producto.nombre;
          productoDiv.appendChild(nombre);
  
          const precio = document.createElement('p');
          precio.textContent = `$${producto.precio}`;
          productoDiv.appendChild(precio);
  
          productosContainer.appendChild(productoDiv);
        });
      })
      .catch(error => console.error('Error fetching productos:', error));
  });
  