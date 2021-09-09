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

    listadoCompleto(){
        this.listadoArr.forEach((tarea, i) =>{
            const idx = `${i+1}`.green;
            const{desc , completadoEn} = tarea;
            const estado = ( completadoEn )
                                ?'Completada'.green 
                                :'Incompleta'.red

            console.log(`${idx} ${desc} :: ${estado}`);
        })
    }
}

module.exports = Tareas