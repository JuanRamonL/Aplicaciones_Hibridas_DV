
let listaTareas = [];

function agregarTarea(tarea){
    listaTareas.push(tarea);
}

function listarTareas(){
    console.log(listaTareas);
}

function eliminarTarea(indice){
    listaTareas.splice(indice, 1);
}

//Exportamos las funciones que vamos a utilizar en la aplicación.
//
export default {
    listaTareas,
    agregarTarea,
    listarTareas,
    eliminarTarea
};