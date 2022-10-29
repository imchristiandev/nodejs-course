const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla a multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es el límite de la tabla a multiplicar'

    })
    .check( (argv, options) => {
        if(isNaN(argv.b)) {
            throw new Error("La base no es un número.")
        } else
            return true
    })
    .argv

module.exports = argv