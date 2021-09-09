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

    listarPendientesCompletadas(completadas = true){
        let contador = 0;
        this.listadoArr.forEach((tarea) =>{
            const{desc , completadoEn} = tarea;
            const estado = ( completadoEn )
                                ?'Completada'.green 
                                :'Incompleta'.red
            if(completadas){

                if(completadoEn){
                    contador += 1
                    console.log(`${contador.toString().green} ${desc} :: ${estado}`);
                }
            }else{
                if(!completadoEn){
                    contador += 1
                    console.log(`${contador.toString().green} ${desc} :: ${estado}`);
                }

            }
        })
    }
}

module.exports = Tareas