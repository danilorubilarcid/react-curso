import { getHeroeById } from './base/08-import-export.js';


/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Esperando 2 segundos');
        const heroe = getHeroeById(1);
        resolve(heroe);
    }, 2000);      
});

promesa.then((heroe) => {
    console.log('Then de la promesa: ', heroe);
})
.catch(error => console.warn(error)); */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const {name} = getHeroeById(id);
            if(name){
                resolve(name);}
            else{
                reject('Heroe no encontrado');
            }
        }, 2000)

    });


}

getHeroeByIdAsync(1).then(heroe => console.log('El heroe es: ', heroe))
.catch(error => console.warn(error))