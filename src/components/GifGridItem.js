import React from 'react'


import PropTypes from 'prop-types';
//https://animate.style/

// param ( img ) en p {img.title}
export const GifGridItem = ( { title, url } ) => {

    //console.log( img );

    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={ url } alt={ title }/>
            <div className='name'>
                <p>{ title }</p>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

