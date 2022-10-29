# Bases de node
En node se maneja todo muy parecido a JavaScript, pero tiene pequeñas singularidades que explicaremos a continuación:

- Para importar un archivo se utilizará la siguiente sentencia:
   
```JavaScript
const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar')
```

- Para exportar un archivo se hará mediante la siguiente estructura:
  
```JavaScript
const fs = require('fs');

const crearArchivo = async( base = 1 ) => {
	...
}

module.exports = {
	crearArchivo
}
```

- Se podrán instalar librerías externas de NPM (Node Package Manager)

## Argumentos
Es posible configurar argumentos para nuestra aplicación desde la terminal mediante `--palabra=valor` Ej:

```Terminal
node app.js base=5
```

Si detro de nuestro programa usamos la variable `process.argv` podremos trabajar con estos valores sin ningún problema.

```JavaScript
const [ , , arg3 = ('base=1') ] = process.argv;
const [ , base = 1 ] = arg3.split('=')
console.log( base );
```

