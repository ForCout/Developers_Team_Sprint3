const fs = require("fs");
let tareas = fs.readFileSync("tareas.json");
let listaTareas = JSON.parse(tareas);


class Tareas {
  constructor(tarea, estado, finTarea, usuario) {
    this.tarea = tarea;
    this.estado = estado;
    this.inicioTarea = new Date();
    this.fintarea = finTarea;
    this.usuario = usuario;
  }
}

class FactoriaTareas {
  crearTarea(tarea, estado, finTarea, usuario) {
    return new Tarea(tarea, estado, finTarea, usuario);
  }
}

const tarea = new FactoriaTareas();

const CrudTareas = (function () {
  return {
    listarTareas: () => {
      for (let i in listaTareas) listar(i);
    },

    listarById: (id) => {
      for (let i in listaTareas) {
        if (listaTareas[i].idTarea == id) listar(i);
      }
    },
    eliminar: (id) => {
      for (let i in listaTareas) {
        if (listaTareas[i].idTarea == id) {
          listaTareas.splice(i, 1);
          console.log(
            `La tarea con id: ${listaTareas[i].idTarea} ha sido eliminada`
          );
          break;
        }
      }
    },


    
  };
})();

const listar =  (i) => {
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
}

module.exports = { Tareas, tarea, CrudTareas};
