// rafc
import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['Panda', 'Sailon Moon', 'gatos']
    const [categories, setCategories] = useState(['Panda']);

    // const handleAdd = () => {
    //     /*setCategories([...categories , 'Candy'])*/
    //    setCategories( cats => [...cats , 'Mon'] )
    // }

    return (
        <>
            <h2>Gif App</h2>
            <p>Encuentra los mejores gifs</p>
            <AddCategory setCategories= { setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key = {category}
                            category = {category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

/*
    categories.map( category => {
        return <li key={ category } > { category } </li>
    })
*/