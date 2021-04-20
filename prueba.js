const fs = require("fs");
let tareas = fs.readFileSync("tareas.json");
let listaTareas = JSON.parse(tareas);

const listarTareas = () =>{
  for (let i in listaTareas) listar(i); 
};

const listarById = (id) => {
  for (let i in listaTareas) {
    if (listaTareas[i].idTarea == id) listar(i);
  }
};

const listar = (i) => {
  console.log(
    "idTarea: ",
    listaTareas[i].idTarea,
    "\nTarea: ",
    listaTareas[i].Tarea,
    "\nEstado: ",
    listaTareas[i].Estado,
    "\nHora Inicio: ",
    listaTareas[i].Hora_inicio,
    "\nHora finalizacion: ",
    listaTareas[i].Hora_finalizacion,
    "\nUsuario: ",
    listaTareas[i].Usuario,
    "\n-----------------------------\n"
  );
};

const eliminar = function (id) {
  for (let i in listaTareas) {
    if (listaTareas[i].idTarea == id) {
      listaTareas.splice(i, 1);
      console.log(
        `La tarea con id: ${listaTareas[i].idTarea} ha sido eliminada`
      );
      break;
    }
  }
};

//eliminar(2)
//listarById(2)
listarTareas();
