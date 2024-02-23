//Sintaxis Basica
//terminacion ;
//La variables
//let - var - const

//Tipos de datos
var nombre="Javascript";
var materia='Programacion';
var numero=10;
var numero2=10.45;
let activar=false;
let estudiante={
    nombre:"Kevin",
    edad:28,
    materia:"Programacion"
};

let colores=["ROJO","AZUL"];

//Operadores
//>= <= == !=


materia='Estadistica';
console.log(materia);

//Estructuras de Control
//if else
 if(materia=="Programacion"){
    alert("Materia Programacion");
 }else{
    alert("Error materia no existe");
 };

 if(numero>=20){
    alert("Es mayor")
 }else{
    alert("Es menor")
}

//Bucles - for - while 
for(let i=0; i<=10; i++){
    document.writeln(i);
}

let a=0
while(a<=10){
    document.writeln(a+"<br>");
    a=a+1;
    //a++;
}

/* while(true){
    if()
}
*/
//Funciones
function sumar(x,y){
    return x+y;
}

alert(sumar(8,2));

let resultado=sumar(numero,numero2);
document.write(resultado);
//Clases
class Estudiante{
/*/Parametros
nombre
edad
    //Accion o metodos de clase
    /*funtion hablar(){
          
    }
    function estudiar(x){
        ////
    }
    
    
    */
}


document.getElementById("boton")
addEventListener("click",function(){
    console.log("Se hizo click en el Boton")
});








