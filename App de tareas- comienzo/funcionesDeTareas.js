const fs = require ("fs"); // Requerimos el modulo nativo de JS (filesystem)

let archivoDeTareas = {      // Declaramos un objeto en el cual tenemos la propiedad del archivo que queremos importar mediante fs
    archivo: "./tareas.json", // Y a su vez tmb leemos dicho archivo y lo convertimos en un array de objetos en formato JS.
    consumir: function() {
      return JSON.parse(fs.readFileSync(this.archivo, "utf-8"))
    } 
}

module.exports = archivoDeTareas; // Exportamos el modulo en cuestion para utilizar su funcionalidad en otro modulo.
