let listaDeTareas = require ("./funcionesDeTareas")
let accion = process.argv[2];

switch (accion) {
    case "listar":
        console.log ("Lista de Tareas");
        console.log ("---------------");
        let tareas = listaDeTareas.consumir();
        // for (i=0; i < tareas.length; i++) {
        //     console.log ((i + 1), tareas[i].titulo, "("+ tareas[i].estado+ ")" )
        // }
        tareas.forEach(function(tarea, index){
            return console.log ((index + 1), tarea.titulo, "("+tarea.estado+")")
        });
    break;
    case "crear":
        console.log("Creando tarea");
        let titulo = process.argv[3];
        if (titulo) {
        let tarea = {
            titulo:  titulo,
            estado: "pendiente"
    };
        listaDeTareas.guardaTarea(tarea);
        console.log("Tarea creada"); } else {
            console.log ("No se puede crear la tarea sin titulo")
        }
    break;
    case "filtrar":
        console.log ("Filtrando tareas");
        let estado = process.argv[3];
        if (estado) {
            let filtradas = listaDeTareas.leerPorEstado(estado);
            filtradas.forEach(function (tarea, index){
                console.log ((index + 1), tarea.titulo,)
            });
        } else {
            console.log ("No se pudo filtrar las tareas")
        }
    break;
    case undefined:
        console.log ("Atencion! Tienes que pasar una accion");
    break;
    default:
        console.log ("No entiendo que quieres hacer")
}

