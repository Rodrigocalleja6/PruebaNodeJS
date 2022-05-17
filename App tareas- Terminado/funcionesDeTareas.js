const fs = require ("fs");

let listaDeTareas = {
    archivo : "./tareas.json",
    consumir: function () {
        return JSON.parse(fs.readFileSync(this.archivo, "utf-8"))
    },
    escribirJSON: function (tareas) {
        fs.writeFileSync(this.archivo, JSON.stringify(tareas))
    },
    guardaTarea: function (tarea) {
        let tareas = this.consumir();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    leerPorEstado(estado) {
        let tareas = this.consumir();
        let tareaFiltradas = tareas.filter(tarea => {
            return tarea.estado === estado;
        });
        return tareaFiltradas
    }

}






module.exports = listaDeTareas;

