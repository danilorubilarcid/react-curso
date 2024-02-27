const persona = {
    nombre: 'Danilo',
    apellido: 'rubilar',
    edad: 36,
    clave: 'ironman'
};

const {nombre, apellido, edad, clave} = persona;
//console.log(persona.nombre);
//console.log(persona.apellido);
//console.log(persona.edad);
//console.log(persona.clave);

//console.log(nombre);
//console.log(apellido);
//console.log(edad);
//console.log(clave);

const retornaPersona = ({nombre, apellido, edad, clave, rango = 'Capitan'}) => {
    //const {edad, clave, nombre} = usuario;
    //console.log(edad, clave, nombre, rango);

    return {
        nombreClave: clave,
        anios: edad,
        coordenadas:{
            lat: 123123,
            long: 987897
        }
    }
}

const {nombreClave, anios, coordenadas:{lat, long}} = retornaPersona(persona);
console.log({nombreClave, anios});
console.log({lat, long});