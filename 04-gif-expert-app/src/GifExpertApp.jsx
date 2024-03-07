import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch', 'dragon ball']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)){ 
            return; 
        }


        //Mi forma
        //setCategories(categories.concat(['Iracing']));
        //copiando arreglo
        //setCategories([...categories, 'Iracing']);
        //setCategories(cat => [...cat, 'Iracing'])
        setCategories([newCategory, ...categories]);
    }


    return(
        <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={ (event) => onAddCategory(event)}
        />
            {
                categories.map( ( category ) => (<GifGrid key={category} category={category}/>)
                )
            }

        </>
    );
}
