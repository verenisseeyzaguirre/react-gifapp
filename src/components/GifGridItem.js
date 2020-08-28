import React from 'react'

//https://animate.style/

export const GifGridItem = ( img ) => {

    //console.log( img );

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={img.url} alt={img.title}/>
            <div className='name'>
                <p>{img.title}</p>
            </div>
        </div>
    )
}
