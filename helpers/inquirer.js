const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');


const preguntas = [
    {
        type:"list",
        name:"opcion",
        message:"¿Que desea hacer?",
        choices:[
            {
                value:'1',
                name:'1. Crear tarea'
            },
            {
                value:'2',
                name:'2. Listar tareas'
            },
            {
                value:'3',
                name:'3. Listar tareas completadas'
            },
            {
                value:'4',
                name:'4. Listar tareas pendientes'
            },
            {
                value:'5',
                name:'5. Completar tareas'
            },
            {
                value:'6',
                name:'6. Borrar tarea'
            },
            {
                value:'0',
                name:'0. Salir'
            },
        ]
    }
]

const inquirerMenu=async()=>{
    console.log("================".green);
    console.log("Seleccione un menu".red);
    console.log("================".green)

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async()=>{
    const question=[
        {
            type:'input',
            name:'enter',
            message:`Presione${'ENTER'.green} para continuar`
        }
    ]
    await inquirer.prompt(question)
}

const leerinput = async (message)=>{
    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate(value){
            if(value.length === 0){
                return "Por favor ingrese un valor";
            }
            return true
        }
    }
    const{desc} = await inquirer.prompt(question);
    return desc;
}

const listadoTareaBorradas = async (tareas = [])=>{
        const choices = tareas.map((tarea,i) =>{
            const idx = `${i+1}.`.green;
            return{
                value: tarea.id,
                name:`${idx} ${tarea.desc}`
            }
        });
        const preguntas = [
            {
                type:'list',
                name:'id',
                message:'Borrar',
                choices
            }
        ]

        const { id } = await inquirer.prompt(preguntas);
        return id;
}
const confirmar = async (message)=>{
    const question = [
        {
            type:'confirm',
            name:'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok ;

}

const mostrarListadoCheckList = async (tareas = [])=>{
    const choices = tareas.map((tarea,i) =>{
        const idx = `${i+1}.`.green;
        return{
            value: tarea.id,
            name:`${idx} ${tarea.desc}`,
            checked:(tarea.completadoEn) ? true : false
            }
    });
    const pregunta = [
        {
            type:'checkbox',
            name:'ids',
            message:'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

module.exports={
    inquirerMenu,
    pausa,
    leerinput,
    listadoTareaBorradas,
    confirmar,
    mostrarListadoCheckList
}