const fs = require("fs");

const guardarDb= ( data )=>{
    
    const archivo = './db/data.txt';

    fs.writeFileSync(archivo , JSON.stringify(data));
}

module.exports = {
    guardarDb
}