const personajes = ['goku', 'vegeta', 'trunks'];

const [, , p1] = personajes;


console.log(p1);

const retornaArreglo = () =>{
    return ['ABC', 213];
}

const [letras, numero] = retornaArreglo();
console.log(letras, numero)


const lala = (valor) => {
    return [valor, ()=>{console.log('jaja')}]

}

//const arr = lala('goku');
const [texto, setNombre] = lala('goku');

console.log(texto);
setNombre();