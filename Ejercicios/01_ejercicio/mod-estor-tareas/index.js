//Importamos todo lo que exportamos en el archivo tareas.js
import tareas from './tareas.js';


//Utilizamos las funciones importadas.
tareas.agregarTarea("Aprender módulos en Node.js");
tareas.agregarTarea("Practicar con un proyecto");
tareas.agregarTarea("Tardé más de la cuenta, me trabé con el export default :P");

tareas.listarTareas();

tareas.eliminarTarea(0);

tareas.listarTareas();