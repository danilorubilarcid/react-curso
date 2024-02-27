// como es normalmente

/* const activo = true;

let mensaje = '';

if(activo){
    mensaje = 'esta activo';
}else{
    mensaje = 'esta inactivo';
}

console.log(mensaje); */
/////////////////////////////////////////////////////////////////

// Operador ternario normal
const activo = true;

//const mensaje = (activo) ? 'La wea esta activa' : 'La wea esta inactiva';
//const mensaje = (activo === true) ? 'La wea esta activa' : 'La wea esta inactiva';
//ternario para ejecutar algo solo cuando sea tru y no hacer nada en caso contrario
const mensaje = activo && 'Activo';

console.log(mensaje);
