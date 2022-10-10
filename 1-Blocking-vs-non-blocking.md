# Curso de Node.JS

## Blocking vs Non Blocking I/O

```
const { getUsuarioSync } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');

const usuario1 = getUsuarioSync( 1 );
console.log('Usuario 1:', usuario1 );

const usuario2 = getUsuarioSync( 2 );
console.log('Usuario 2:', usuario2 );

console.log('Fin de programa');
console.timeEnd('inicio');
```

Blocking es síncrono y bloqueante, demora 6 segundos

**Callback es una función que se envía como argumento** y es la diferencia entre elemento bloqueante y no bloqueante.

```
const { getUsuario } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');

getUsuario( 1, ( usuario ) => {
	console.log('Usuario 1:', usuario );
});

getUsuario( 2, ( usuario) => {
	console.log('Usuario 2:', usuario );
	console.timeEnd('inicio');
});

console.log('Fin de programa');
```

La diferencia está en este código 

```


const getUsuarioSync = ( id ) => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000 ) {
        // Esperando...
        // Haciendo fetch de base de datos...
        // Robando datos de facebook...
    }

    return {
        id,
        nombre: `Usuario ${ id }`
    }; 
}


const getUsuario = (id, callback ) => {
    const usuario = {
        id,
        nombre: `Usuario ${ id }`
    };
    
    setTimeout(() => {
        callback( usuario );
    }, 3000);
}

module.exports = {
    getUsuario,
    getUsuarioSync
}
```

Nosotros debemos estar trabajando de forma no bloqueante para aprovechar el lenguaje, **Node no crea diferentes hilos ni mucho menos**, ya que JS ejecuta en un solo hilo.

Repo base:
[Blocking vs non blocking](https://github.com/Klerith/node-blocking-vs-non-blocking/blob/main/usuarios/usuarios.js)

**Node usa el mismo motor que utiliza google chrome**