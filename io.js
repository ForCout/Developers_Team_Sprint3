// función entrada de datos por pantalla

function entrada(dato) {
    const readline = require('readline-sync');
    switch (dato) {
        case 'opcion':
            return parseInt(readline.question(`Introduzca opcion: `));
        case 'tarea':
            return readline.question(`Nombre de la tarea: `);

    }
}

function menu() {

    console.log('____________________________________________________');
    console.log('     1. Crea tarea');
    console.log('     2. Actualiza tarea');
    console.log('     3. Borra tarea');
    console.log('     4. Lista todas las tareas');
    console.log('     5. Lista una tarea');
    console.log('     6. Salir de la aplicación');
}

module.exports.entrada = entrada;
module.exports.menu = menu;
