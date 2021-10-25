//Basicamente esto es para practicar el REQUIRE y EL MODULE.EXPORTS Y ASYNC 

const fs = require('fs');

//-------------*****-------------------

const crearArchivo = async (base = 5) => {


    let salida = '';
    for (let i = 1; i <= 10; i++) {
        salida += `${i} x ${base} = ${i*base} \n`;
    };

    fs.writeFileSync(`tabla-del${base}.txt`, salida)

    return `tabla-del ${base} txt creado`;

}

module.exports = {
    crearArchivo
}