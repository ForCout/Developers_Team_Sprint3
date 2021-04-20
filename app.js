
// let clases = require('./clases');  // importar clases 
let tareas = require('./tareas');  // importar funciones tratamiento de tareas 

let io = require('./io');      // importar función entrada de datos por pantalla
const {Tareas, CrudTareas, tarea} = require('./tareas.js'); 
let opcion;

do {
    io.menu();
    opcion = io.entrada('opcion');
    switch (opcion) {
        case 1:
            creaTarea();
            break;
        case 2:
            actualizaTarea();
            break;
        case 3:
            borraTarea();
            tareas.eliminar();
            break;
        case 4:
            listaTareas();
            tareas.listarTareas();
            break;
        case 5:
            listarTarea();
            tareas.listarById
            break;
        case 6:
            break;
        default:
            console.log("Opción errónea");
            break;
    }
}
while (opcion != 6)

