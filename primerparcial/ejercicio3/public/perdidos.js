const productos=[
    {
       nombre:"Producto 1",
       precio:150,
       image:"https://petshop.petcenter.com.bo/wp-content/uploads/2021/02/DOG-CHOW-PUPPY-MINI-SMALL-21-KG.png"
    },
    {
        nombre:"Producto 2",
        precio:80,
        image:"https://petshop.petcenter.com.bo/wp-content/uploads/2021/02/DOG-CHOW-PUPPY-MINI-SMALL-21-KG.png"
     },
     {
        nombre:"Producto 3",
        precio:600,
        image:"https://petshop.petcenter.com.bo/wp-content/uploads/2021/02/DOG-CHOW-PUPPY-MINI-SMALL-21-KG.png"
     },

]

//Funcion para crear el CardView
function CardView(){
    const productosContenedor=document.getElementById('productos');
    productos.forEach(producto=>{
        //Crear el cardview de forma Dinamica
        const card=document.createElement('div');
        card.classList.add('card')
        //Imagen 
        const imagen=document.createElement('img');
        imagen.src=producto.image;
        //Titulo Producto
        const nombre=document.createElement('h3');
        nombre.textContent=producto.nombre;
        //Precio
        const precio=document.createElement('p');
        precio.textContent=`${producto.precio}Bs`

        

        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(boton)
        productosContenedor.appendChild(card);

    });
}
//Llamar a la funcion cardview
window.onload=CardView;