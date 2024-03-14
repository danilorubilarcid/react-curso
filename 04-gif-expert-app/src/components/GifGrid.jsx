//import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    return(

        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }

            <div className="card-grid">
                {
                    images.map( (image) => (
                       <GifItem 
                        key={image.id}
                        {...image}
                       />
                    ))

                }
            </div>
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