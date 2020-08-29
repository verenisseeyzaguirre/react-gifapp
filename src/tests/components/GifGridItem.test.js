import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

//import { render } from '@testing-library/react';
/*
const img = {
        id: '123456',
        title: 'titulo',
        url: 'https://localhost/algo.jpg'
    }
*/

import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'titul';
    const url = 'https://localhost/algo.jpg'
    

    const wrapper = shallow( <GifGridItem title = {title} url = {url} /> )

    test('Debe mostrar <GifGridItem /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });


    test('Debe tener un parrafo con el title', () => {
        
        const etiquetaP = wrapper.find('p');
        expect( etiquetaP.text().trim() ).toBe(title);

    });
    
    test('Debe tener una imagen con el enlace fuente y nombre alternativo', () => {
        
        const etiquetaImg = wrapper.find('img');
        expect( etiquetaImg.props().src ).toBe(url);
        expect( etiquetaImg.prop('alt') ).toBe(title);

    });

    test('Debe tener animate__fadeIn', () => {
        
        const etiquetaDiv = wrapper.find('div').at(0);
        //const className = etiquetaDiv.prop('className');
        //expect( className.hasClass('animate__fadeIn') ).toBeTruthy();
        expect( etiquetaDiv.hasClass('animate__fadeIn') ).toBeTruthy();

    });

})

