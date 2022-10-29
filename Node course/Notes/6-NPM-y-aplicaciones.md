## NPM
Cuando tengamos una aplicación que quiera ser completa, deberemos gestionar los paquetes con package.json configurándolo con 

```Terminal
npm init
```

El package.json es el punto inicial de cualquier proyecto de node, se sabe qué comandos se ejecutan y crear nuevos script

```JSON
{
	"name": "03-bases-node",
	"version": "0.0.1",
	"description": "Es una simple tabla de multiplicar con archivo de texto",
	"main": "app.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"base3": "node app.js --base=3"
	},
	"author": "Christian Ramírez",
	"license": "MIT"
}
```

```Terminal
npm run base3
```

**Colors**: [Enlace a NPM](https://www.npmjs.com/package/colors)

```Terminal
npm install colors
```

Al ejecutar este comando, se creará un `package-lock.json` que muestra el armado de dependencias.

El `package.json` creará un campo llamado dependencies, encargado de la gestión de aplicaciones externas.

```Terminal
npm install nodemon --save-dev
```

Con este comando se instalará una dependencia de desarrollador, que solo se usará en entornos de desarrollo y nada que ver con la parte productiva

```Terminal
npm uninstall colors
```

Así podemos desinstalar una aplicación, para instalar una app exacta.

```Terminal
npm install colors@1.0.0
```

Podemos actualizar con

```Terminal
npm update
```

**Yargs** [Enlace a NPM](https://www.npmjs.com/package/yargs)

Ayuda a la construcción de CLI interactivopasando argumentos y generando una interfaz de usuario elegante.