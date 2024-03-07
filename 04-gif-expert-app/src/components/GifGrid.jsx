import { getGifs } from "../helpers/getGifs";






export const GifGrid = ({category}) => {

    getGifs(category);

    return(

        <>
            <h3>{category}</h3>
            <p>Hola mundo</p>
        </>

    )

}







/* 

const apiKey = '86Qw6bA1PRR7rV9nFFWfvEEOm0nC3IqE';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then( resp => resp.json())
.then( ({data}) => {
    const {url} = data.images.original
    console.log(url);

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(error => (console.log(error))) 

*/