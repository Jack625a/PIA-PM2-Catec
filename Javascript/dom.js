//DOM MOFICACION DE CONTENIDO DE UN ELEMENTO
document.getElementById("Titulo").innerHTML='Nuevo Titulo';
//Estilos de un elemento
document.getElementById("contenedor").style.backgroundColor="blue";
document.getElementById("boton").style.backgroundColor="red";

//DOM Para crear nuevos elementos
var nuevo=document.createElement("h1");
var texto=document.createTextNode("JAVASCRIPT -DOM")

nuevo.appendChild(texto);

document.getElementById("contenedor").appendChild(nuevo);

//Eliminar elementos desde el DOM
var elementoEliminar=document.getElementById("titulo2");
//elementoEliminar.parentElement.removeChild(elementoEliminar);

//Cambiar un atributo de un elemento
document.getElementById("imagen1").setAttribute("src","2.jpg");
document.getElementById("input").setAttribute("type","date");
//document.getElementsByClassName("titulo3").innerHTML="DOCUMENT OBJET";

//Agregar una clase a un elemento
document.getElementById("titulo2").classList.add("pruebaClase");

//Agregar un evento a un elemento creado de forma dinamica
var nuevoBoton=document.createElement("button");
nuevoBoton.innerText="BOTON 2";

nuevoBoton.addEventListener("click", function(){
    alert("se hizo click al boton")
});

document.body.appendChild(nuevoBoton);


//Seleccion de varios elementos por su etiqueta 
var titulos=document.querySelectorAll("h2");

for(var i=0;i<titulos.length;i++){
    titulos[i].style.color="red";
}



















