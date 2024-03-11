const formulario=document.getElementById('formulario');
const listaEstuantes=document.getElementById('lista');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    const nombre=document.getElementById('nombre').value;
    const carrera=document.getElementById('carrera').value;

    const itemsLista=document.createElement('li');
    itemsLista.textContent=`Nombre: ${nombre} - Carrera: ${carrera}`;

    listaEstuantes.appendChild(itemsLista);
    formulario.reset();
})
