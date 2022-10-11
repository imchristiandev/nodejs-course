const empleados = [
    {
        id: 1,
        nombre: 'Christian'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( (empleado) => empleado.id === id )?.nombre;
    if ( empleado ) {
        callback( null, empleado );
    } else {
        callback( `Empleado con id ${ id } no existe` )
    }
}

const getSalario = ( id, callback ) => {
    const salario = salarios.find( salario => salario.id === id )?.salario;
    if ( salario ) {
        callback( null, salario );
    } else {
        callback( `El empleado con id ${id} no existe` )
    }
}

const id = 3

getEmpleado( id, ( err, empleado ) => {
    if ( err ) {
        console.log('ERROR!');
        return console.log(err);
    }
    
    getSalario( id, ( err, salario ) => {
        if ( err ) {
            console.log('ERROR!');
            return console.log(err);
        }
        console.log('El empleado:', empleado, 'tiene un salario de:', salario)
    })
});