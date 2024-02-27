import {heroes, owners } from '../data/heroes.js';

 export const getHeroeById = (identificador) =>{
        return heroes.find((fruta) => fruta.id === identificador);
}


//console.log(getHeroeById(3));


export const getHeroeByOwner = (identificador) =>{
    return heroes.filter((word) => word.owner === identificador);
}

//console.log(getHeroeByOwner('Marvel'));