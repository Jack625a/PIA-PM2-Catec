const productos=[
    {
        nombre: "Luna",
        imagen: "https://elpais.bo/img/images_1200/contents/2018/03/28/e1ca1e62-51ce-4692-8a13-6807b6ebd770.jpg",
        descripcion: "Luna es una adorable perrita de 2 años. Es muy cariñosa y juguetona. Le encanta jugar a la pelota y salir a pasear. Se lleva bien con otros perros y con niños."
      },
      {
        nombre: "Toby",
        imagen: "https://www.santevet.es/uploads/images/es_ES/razas/gato_callejero_seguro_santevet.jpeg",
        descripcion: "Toby es un gatito de 1 año. Es muy independiente y cariñoso. Le encanta jugar con su pelota y acurrucarse en tu regazo. Se lleva bien con otros gatos y con perros."
      },
      {
        nombre: "Max",
        imagen: "https://www.santevet.es/uploads/images/es_ES/razas/gato_callejero_seguro_santevet.jpeg",
        descripcion: "Max es un perro de 3 años. Es muy inteligente y activo. Le encanta jugar a buscar y correr. Se lleva bien con otros perros, pero no con gatos."
      },
      {
        nombre: "Bella",
        imagen: "https://elcronista.co/assets/media/gato-enfermo-callejero2.jpg",
        descripcion: "Bella es una gatita de 2 años. Es muy dulce y cariñosa. Le encanta jugar con su caña de pescar y acurrucarse en tu cama. Se lleva bien con otros gatos y con perros."
      },
      {
        nombre: "Rocky",
        imagen: "https://t1.ea.ltmcdn.com/es/posts/7/5/4/como_ayudar_a_los_perros_callejeros_25457_orig.jpg",
        descripcion: "Rocky es un perro de 4 años. Es muy amigable y juguetón. Le encanta jugar a la pelota y nadar. Se lleva bien con otros perros y con niños."
      },
      {
        nombre: "Lucy",
        imagen: "https://mvsnoticias.com/u/fotografias/m/2022/6/9/f960x540-483047_557122_15.jpg",
        descripcion: "Lucy es una gatita de 1 año. Es muy independiente y curiosa. Le encanta jugar con su ratón de juguete y explorar la casa. Se lleva bien con otros gatos, pero no con perros."
      },
      {
        nombre: "Oscar",
        imagen: "https://www.mundiario.com/asset/thumbnail,1280,720,center,center/media/mundiario/images/2023/07/07/2023070704504682640.jpg",
        descripcion: "Oscar es un perro de 5 años. Es muy tranquilo y cariñoso. Le encanta pasear y recibir caricias. Se lleva bien con otros perros y con niños."
      },
      {
        nombre: "Mia",
        imagen: "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/zonas-sin-colonias-de-gatos-callejeros-para-mejorar-la-biodiversidad-urbana/9431050-1-esl-MX/Zonas-sin-colonias-de-gatos-callejeros-para-mejorar-la-biodiversidad-urbana.jpg",
        descripcion: "Mia es una gatita de 3 años. Es muy dulce y juguetona. Le encanta jugar con su caña de pescar y trepar por los árboles. Se lleva bien con otros gatos y con perros."
      }

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
        imagen.src=producto.imagen;
        //Titulo Producto
        const nombre=document.createElement('h3');
        nombre.textContent=producto.nombre;
        //Precio
        const precio=document.createElement('p');
        precio.textContent=`${producto.descripcion}`

        //Boton
        const boton=document.createElement('button');
        boton.textContent='Adoptar';

        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(boton)
        productosContenedor.appendChild(card);

    });
}
//Llamar a la funcion cardview
window.onload=CardView;