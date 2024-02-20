/*/Evento de Teclado
document.getElementById("input")
addEventListener("keydown",function(evento){
    alert("Teclado presionado: "+evento.key);
});

//Evento cambio de valor de un campo de entrada
document.getElementById("cambio").addEventListener("change",function(){
    alert("El texto fue modificado a:"+this.value);
});*/

//Evento Doble Click
document.getElementById("boton") 
addEventListener("dblclick",function(){
    alert("Se realizo un doble click al boton");
});

//Evento del Scroll
window.addEventListener("scroll",function(){
    document.getElementById("contenedor").innerText="Desplazamiento:"+window.screenY;
    document.createElement("button")

});