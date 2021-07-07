const { resolve } = require('path');

require('colors');


const mostrarMenu=()=>{
    return new Promise(resolve=>{
    console.log("================".green);
    console.log("Seleccione un menu".red);
    console.log("================".green)

    console.log(`${'1'.green}.Crear tarea`);
    console.log(`${'2'.green}.Listar tareas`);
    console.log(`${'3'.green}.Listar tareas completadas`);
    console.log(`${'4'.green}.Listar tareas pendientes`);
    console.log(`${'5'.green}.Completar tareas`);
    console.log(`${'6'.green}.Borrar tarea`);
    console.log(`${'0'.green}.Salir`);

    const readline = require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
    });
    readline.question("Seleccione una opcion: ",(opt)=>{
        readline.close();
        resolve(opt);
    })
    })
    

}

const pausa=()=>{
    return new Promise(resolve=>{
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        readline.question(`Presione${'EnteR'.green} para continuar`,(opt)=>{
            readline.close();
            resolve();
        })
    })
    
}

module.exports={
    mostrarMenu,
    pausa
}