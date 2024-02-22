//Ejercicio 3. Crear un filtro de seleccion de imagenes en un galeria
document.getElementById("todas").addEventListener("click",function(){
    mostrarTodosProductos();
});

document.getElementById("celulares").addEventListener("click",function(){
    filtrarPorCategoria("celulares");
});

document.getElementById("televisores").addEventListener("click", function(){
    filtrarPorCategoria("televisores");
});

document.getElementById("videoJuegos").addEventListener("click", function(){
    filtrarPorCategoria("videoJuegos");
});


//Funcion para mostrar todos los productos

function mostrarTodosProductos(){
    document.querySelectorAll("#galeria img").forEach(img=>img.style.display="block");
}

//Funcion para filtrar
function filtrarPorCategoria(categoria){
    document.querySelectorAll("#galeria img").forEach(img=>{
        if(img.classList.contains(categoria))
        {
            img.style.display="block";
        }else{
            img.style.display="none";
        }
    });
}