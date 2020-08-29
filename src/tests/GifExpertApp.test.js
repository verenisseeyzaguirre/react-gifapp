import React from 'react'
import { shallow } from 'enzyme';

import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas en <GifGrid />', ( ) => {

    test( 'Debe mostrar <GifExpertApp /> correctamente' , () => {
    
        const wrapper = shallow( <GifExpertApp /> )
        expect( wrapper ).toMatchSnapshot();

    });

    test( 'Debe mostrar una lista de categorias' , () => {
    
        const categories = ['Panda' , 'Sailor Moon'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> )
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )

    });

})