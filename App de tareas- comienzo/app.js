// const fs = require ("fs"); // Requerimos el modulo nativo de JS (filesystem)
// let listaDeTareas = JSON.parse(fs.readFileSync("./tareas.json", "utf-8")); // Utilizamos la propiedad de fs para leer el archivo y a su vez lo convertimos en un dato array formato JS.
const archivoDeTareas = require ("./funcionesDeTareas")
let listaDeTareas = archivoDeTareas.consumir();

switch (process.argv[2]) {
    case "listar":
        console.log ("Lista de tareas");
        console.log ("----------------");
        listaDeTareas.forEach(function (tarea, index){
            console.log ((index + 1+"."), listaDeTareas[index].titulo, "("+listaDeTareas[index].estado+")")
        })
        break;
    case undefined: 
        console.log ("Atencion - tienes que pasar una accion")
        break;
    default: console.log ("No entiendo lo que quieres hacer ")
}


