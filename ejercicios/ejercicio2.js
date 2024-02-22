//Crear una aplicacion para gestion de tareas
//Usuario pyedes agregar, marcar y eliminar tareas
//Funciones Clases bucles condicionales eventos DOM

//Paso1. Crear la clase Tarea
class Tarea{
    constructor(descripcion){
        this.descripcion=descripcion;
        this.completado=false;
    }
}

//Crear la lista de tareas
let listaTareas=[];

//Funciones Agregar una tarea
function agregarTarea(){
    let descripcion=document.getElementById("nuevaTarea").value;
    if(descripcion){
        let tarea=new Tarea(descripcion);//Objeto de la clase Tarea
        listaTareas.push(tarea);
        actualizarListaTareas();

        document.getElementById("nuevaTarea").value="";//Limpieza de campo de entrada

    }else{
        alert("Error agregue una descripcion a la tarea");
    }
}

//Funcion para actualizar la interfaz grafica (lista de tareas)
function actualizarListaTareas(){
    let lista=document.getElementById("listaTareas");
    lista.innerHTML="";
    listaTareas.forEach((tarea,indice)=>{
        let item=document.createElement("li");
        item.textContent=tarea.descripcion;
        if(tarea.completado){
            item.style.color="red";
        }
        //Agregar eventos para marcar la tarea completada o eliminar la tarea
        item.addEventListener("click",()=>marcarCompletado(indice));
        lista.appendChild(item);
    });
}



//Funcion para marcado de una tarea como completado
function marcarCompletado(indice){
    listaTareas[indice].completado=!listaTareas[indice].completado;
    actualizarListaTareas()
}


//Funcion para eliminar una tarea
function eliminarTarea(evento,indice){
    evento.preventDefault();
    listaTareas.splice(indice,1);
    actualizarListaTareas();
}


//Evento al dar click al boton
document.getElementById("agregar").addEventListener("click",agregarTarea);
actualizarListaTareas();











