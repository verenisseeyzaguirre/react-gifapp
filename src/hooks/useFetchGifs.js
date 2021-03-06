import { useState, useEffect } from "react"

import { getGifs } from '../helpers/getGifs';

// se uso rafc , los hooks pueden tener su estado

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // los efectos no pueden ser async pero si en su int tiene then
    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                
                setstate({
                    data: imgs,
                    loading: false
                });
                /*
                setTimeout( () => {
                    console.log(imgs)
                    //setstate
                }, 3000);
                */
               
            });

    }, [ category ])

    /*
    setTimeout( () => {
        setstate({
            data: [1,2,3,4,5],
            loading: false
        })
    }, 3000);
    */
    return state; // es un objeto con data y loading

}
