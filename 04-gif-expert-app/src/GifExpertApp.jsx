import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch', 'dragon ball']);

    const onAddCategory = (newCategory) => {
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

        <AddCategory 
        //setCategories={setCategories}
            onNewCategory={ (event) => onAddCategory(event)}
        />

        <ol>
            {
                categories.map( category => {
                    return <li key={category}>{category}</li>
                })
            }


        </ol>


        </>
    );
}
