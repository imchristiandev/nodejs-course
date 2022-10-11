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

const getEmpleado = ( id ) => {
    return new Promise ( (resolve, reject) => {
        const empleado = empleados.find( (empleado) => empleado.id === id )?.nombre;
        empleado 
            ? resolve( empleado )
            : reject( `No existe un empelado con id ${id}` )
    })
}

const getSalario = ( id ) => {
    return new Promise ( (resolve, reject) => {
        const salario = salarios.find( (salario) => salario.id === id )?.salario;
        salario 
            ? resolve( salario )
            : reject( `No existe un sueldo con id ${id}` )
    })
}

const id = 2;

// getEmpleado(id)
//     .then ( empleado => console.log( empleado ) )
//     .catch ( err => console.log(err) );

// getSalario(id)
//     .then ( salario => console.log( salario ) )
//     .catch ( err => console.log(err) );

// getEmpleado(id)
//     .then( empleado => {
//         getSalario(id)
//             .then( salario => {
//                 console.log('El empleado', empleado, 'tiene un salario de:', salario);
//             })
//             .catch( err => console.log(err))
//     })
//     .catch( err => console.log(err))}

let nombre

getEmpleado(id)
    .then ( empleado => {
        nombre = empleado;
        return getSalario( id );
    })
    .then ( salario => console.log( `El empleado: ${nombre} tiene un salario de: ${salario}` ))
    .catch ( err => console.log(err) )