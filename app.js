const { inquirerMenu, pausa,leerinput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');


console.clear();

const main = async()=>{
    let opt = "";
    const tareas = new Tareas()
    
    do {
        opt= await inquirerMenu();
        
        switch (opt) {
            case "1":
                const desc = await leerinput("Descripcion : ");
                tareas.crearTarea(desc);
                break;
        
            case "2":
            console.log(tareas.listado);
                break;
        }





        await pausa();
    } while (opt !=='0')

       // pausa();
}

main();