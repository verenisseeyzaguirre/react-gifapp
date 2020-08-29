import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState(''); // si no habia '' era undefined y salia error

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
        // console.log(e.target.value)
        console.log('handleInputChange llamado');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit llamado', inputValue)

        // cats es el estado anterior
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit= {handleSubmit}>
            <input 
                type="text"
                value = { inputValue }
                onChange = { handleInputChange }
                placeholder= 'Buscar gif...'
            />
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  };