const fs = require('fs');
const colors = require('colors')

const crearArchivo = async( base = 1, hasta = 10, listar = false ) => {
    try {
        let salida = ''
        salida += (`
=======================
    Tabla del ${base}
=======================\n`);
    
        for( let i = 1; i <= hasta; i++ ) {
            salida += `${base} x ${i} = ${ base * i } \n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
        if (listar)
            console.log(salida)
        return (`tabla-${base}.txt`);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}