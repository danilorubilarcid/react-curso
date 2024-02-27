const saludar = function(nombre){
    return `Hola, ${nombre}`;
}


const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola weta`;

const getUser = () => ({
    uuid: '123123123413',
    userName: 'elweta',
})

const user = getUser();

console.log(saludar('Danilo'));
console.log(saludar3('Danilo'));
console.log(saludar4());
console.log(user);


function getUsuarioActivo(nombre){
    return{
        uuid: 'IUAHSDUI01928',
        username: nombre
    }
};

const getUsuarioActivo2 = (nombre) =>({
    uuid: 'IUAHSDUI01928',
    username: nombre   
})

const usuarioActivo = getUsuarioActivo('Danilo');
const usuarioActivo2 = getUsuarioActivo2('DaniloFlecha');
console.log(usuarioActivo);
console.log(usuarioActivo2);
