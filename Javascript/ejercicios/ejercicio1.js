//CREAR UNA CALCULADORA BASICA DE PRECIOS DE UNA TIENDA EN LINEA PARA LA COMPRA DE PRODUCTOS
//FUNCIONES, CLASES, CONDICIONALES, BUCLE, DOM, EVENTOS
//Paso 1. Crear la clase Producto
class Producto{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
}

//Paso 2 Crear una lista para almacenar los productos
let listaProductos=[];

//Paso3. Funcion para agregar un producto a la lista actualizar la interfaz grafica

function agregarProducto(){
    let nombre=document.getElementById("producto").value;
    let precio=parseFloat(document.getElementById("precio").value);

    if(nombre&&precio){
        let producto=new Producto(nombre,precio);
        listaProductos.push(producto);
        //ACTUALIZACION - TOTAL
        actualizarLista();
        calcularTotal();
        limpiarCampos();
    }else{
        alert("Por favor ingrese un producto valido");
    }
}
//Paso 4. Funcion para actualizar la lista de productos
function actualizarLista(){
    let lista=document.getElementById("listaProducto");
    lista.innerHTML="";
    listaProductos.forEach(producto =>{
        let item=document.createElement("li");
        item.textContent=`${producto.nombre} - ${producto.precio.toFixed(2)} Bs`;
        lista.appendChild(item);
    });
}
//Funcion para calcular eñl total de la compra
function calcularTotal(){
    let total=0;
    listaProductos.forEach(producto =>{
        total+=producto.precio;
    });

    document.getElementById("total").textContent=total.toFixed(2);
}
//Funcion para limpiar la pantalla despues de haber agregado un producto
function limpiarCampos(){
    document.getElementById("producto").value="";
    document.getElementById("precio").value="";
}

//Agregar el evento al darle click al boton Agregar Producto
document.getElementById("agregar").addEventListener("click", agregarProducto);

