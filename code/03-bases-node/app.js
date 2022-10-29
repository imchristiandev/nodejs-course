const colors = require('colors')
const argv = require('./config/yargs.js')

const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

console.log(argv);
crearArchivo( argv.b, argv.h, argv.l )
    .then( nombreArchivo => console.log(colors.rainbow(`${nombreArchivo} creado`).underline) )
    .catch( err => console.log(err) )