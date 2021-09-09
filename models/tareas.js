const Tarea = require("./tarea");

class Tareas{

    listado={};

    get listadoArr(){

        const listado = [];

        Object.keys(this.listado).forEach(key =>{
            const tarea = this.listado[key];
            listado.push( tarea);
        })

        return listado;
    }

    constructor(){
        this.listado={};

    }

    cargarTareasFromArray( tareas = []){

        tareas.forEach(tarea =>{
            this.listado[tarea.id]=tarea;
        })
    

    }


    crearTarea(desc = ""){
        const tarea = new Tarea(desc);
        this.listado[tarea.id]=tarea;

    }
}

module.exports = Tareas