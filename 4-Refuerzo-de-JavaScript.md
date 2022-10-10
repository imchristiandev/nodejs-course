# Refuerzo general de JavaScript

## Const vs Let vs Var
**var:** Es la declaración de una variable usada en el viejo estándar, no se recomienda su uso ya que esta variable se usa como un scope global, var permite prácticas raras y sin sentido.

**let:** Es la nueva variable estándar nueva, que permite manejar el scope y controlarlo de forma que no existan problemas de redeclaración de variables sin intención, permite el cambio de valor de la misma.

**const:** Las constantes son más ligeras que las variables let, ya que no van a cambiar nunca, es usada como scope local.

## Template literal
Son tipos de cadenas de texto que permiten manejar saltos de línea y uso de variables internamente

## Desestructuración
Es la forma en que se permite descomponer un objeto o array con el fin de usar sus propieades de forma individual

```
const deadpool = {
	nombre: 'Wade',
	apellido: 'Winston',
	poder: 'Regeneración',
	edad: 50,
	getNombre() {
		return `${this.nombre} ${this.apellido} ${this.poder}`
	}
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeHeroe( { nombre, apellido, poder, edad = 0 } ) {
	console.log( nombre, apellido, poder, edad );
}

imprimeHeroe( deadpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [ , , h3 ] = heroes;

console.log(h3);
```

## Funciones de flecha
Cuando el cuerpo de la función únicamente tiene una línea y es el return, podemos omitir la palabra reservada ya que es un return implícito.

```
const sumar = (a, b) => a + b;

const saludar = () => 'Hola Mundo';
```


