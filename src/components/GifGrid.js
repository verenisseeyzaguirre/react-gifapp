import React from 'react'
//, { useState, useEffect }
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category } ) => {

    //const [count, setCount] = useState(0);
    //const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs( category );

    // [] indica q se ejecuando cuando se renderiza por primera vez y ya no mas
    // salio un warning porque si cambia la categoria deberia renderizar nuevmnte
    /*
    useEffect( () => {
        getGifs( category )
            .then( setImages );
    }, [ category ])
    */
    // getGifs()

    return (
        <>
            <h3 className='animate__animated animate__fadeIn' > {category} </h3>

            { loading && <p className='animate__animated animate__flash' >Loading</p> }

            <div className='card-grid' >
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }         
            </div>
        </>
    )
}

/*
    debajo de h3
    <h2>{count}</h2>
    <button onClick= {()=> setCount(count+1) }>+1</button>
*/

/*
<ol>
    {
        images.map( img => (
            <li  key={img.id}>{img.title}</li>
        ))
    }
</ol>
*/

/*
{
    images.map( img => (
        <GifGridItem 
            key={img.id}
            {...img}
        />
    ))
}  
*/