const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    get listadoArr() {

        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        })

        return listado;

    }

    constructor() {
        this._listado = {};
    }

    borrarTarea = ( id = '' ) => {
        if ( this._listado[id] ) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray = ( tareas = [] ) => {
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea = ( description = '' ) => {
        const tarea = new Tarea(description);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach( (tarea, index) => {
            const indexFormatted = `${ index + 1 }.`.green;
            const { description, completed } = tarea;
            const state = completed ? `${completed}`.green : 'Pendiente'.red
            console.log(`${ indexFormatted } ${description} :: ${state}`);
        })
    }

    listarPendientesCompletadas ( completadas = true ) {
        console.log();
        const listaFiltrada = this.listadoArr.filter( tarea => {
            return completadas ? tarea.completed : !tarea.completed
        })
        
        listaFiltrada.forEach( (tarea, index) => {
            const state = completadas ? `${tarea.completed}`.green : 'Pendiente'.red
            const indexFormatted = `${ index + 1 }.`.green;
            const { description } = tarea;
            console.log(`${ indexFormatted } ${description} :: ${state}`);
        })
    }
    toggleCompleted = (ids = []) => {
        ids.forEach( id => {
            const tarea = this._listado[id];
            if ( !tarea.completed ) {
                tarea.completed = new Date().toISOString();
            }
        });

        this.listadoArr.forEach( tarea => {
            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completed = null;
            }
        });
    }
}

module.exports = Tareas;