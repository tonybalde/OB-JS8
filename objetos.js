// Crea un archivo llamado objetos.js que contenga las siguientes líneas

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador) - OK

const datos = {
    nombre: "Tony",
    apellido: "Baldessari",
    edad: 43,
    altura: 193,
    eresDesarrollador: true
}

//- Una variable que obtenga tu edad a partir del objeto anterior - OK

let obtenerEdad = datos.edad;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s -- OK

const lista = [
    {
        ...datos
    }, // agrego mis datos por propagacion
        {
    nombre: "Damian",
    apellido: "Folk",
    edad: 41,
    altura: 180,
    eresDesarrollador: false 
},{
    nombre: "Cristian",
    apellido: "Prediger",
    edad: 42,
    altura: 190,
    eresDesarrollador: true
}
];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor -- OK

let amigosPorEdad = lista.sort((a, b) => a.edad - b.edad);

console.log(amigosPorEdad);