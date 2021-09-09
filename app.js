const { guardarDb, leerDb } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerinput, listadoTareaBorradas, confirmar, mostrarListadoCheckList } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

require("colors");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();
  const tareasDb = leerDb();

  if (tareasDb) {
    tareas.cargarTareasFromArray(tareasDb);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerinput("Descripcion : ");
        tareas.crearTarea(desc);
        break;

      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletadas(true);
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
        case "5":
        const ids = await mostrarListadoCheckList(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
        case "6":
        const id = await listadoTareaBorradas(tareas.listadoArr);
        const ok = await confirmar('¿Esta Seguro?');
        if(ok){
            tareas.borrarTareas(id);
            console.log("Tarea borrada");
        }
        break;
    }

    guardarDb(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");

  // pausa();
};

main();
