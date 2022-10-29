# Yargs
Es  una ayuda para crear CLI interactivos, parseando argumentos y generando una interfaz de usuario elegante.

https://www.npmjs.com/package/yargs

```javascript
const argv = require('yargs').argv;
console.log( argv.base );
```

```terminal
node app.js --base=3
```

Crea diferentes opciones predeterminadas y distintas validaciones que serían tediosas y largas de trabajar de modo manual, entonces esto agiliza el desarrollo de Command Line Interfaces obviando estos casos de uso.

