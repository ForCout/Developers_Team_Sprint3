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
      listaTareas.forEach(function (tarea) {
        console.log(tarea);
      });
    },

    listarById: (id) => {
      listaTareas.forEach(function (tarea) {
        if (tarea.idTarea == id) console.log(tarea);
      });
    },
    eliminar: (id) => {
      listaTareas.forEach(function (tarea) {
        if (tarea.idTarea == id) listaTareas.splice(tarea, 1);
      });
      console.log(`La tarea con id: ${id} ha sido eliminada`);
    },
  };
})();

module.exports = { Tareas, tarea, CrudTareas };
