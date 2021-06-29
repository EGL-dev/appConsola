const inquirer = require('inquirer');
require('colors');


const preguntas = [
    {
        type:"list",
        name:"opt",
        message:"¿Que desea hacer?",
        choices:['opt1','opt2','opt3']
    }
]

const inquirerMenu=async()=>{
    console.log("================".green);
    console.log("Seleccione un menu".red);
    console.log("================".green)

    const opt = await inquirer.prompt(preguntas);

    return opt;
}

module.exports={
    inquirerMenu
}