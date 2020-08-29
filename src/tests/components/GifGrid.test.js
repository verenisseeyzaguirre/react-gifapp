import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
//fingir la llamada a ese archivo y suponer o controlar la info q eso va a responder
jest.mock( '../../hooks/useFetchGifs' );

describe('Pruebas en <GifGrid />', () => {

    const category = 'Bulma';
    

    test('Debe mostrar <GifGrid /> correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid  category = {category}/> )
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: '123',
            title: 'Titulo',
            url: 'https://localho.com'
        },
        {
            id: '124',
            title: 'Titulo',
            url: 'https://localho.com'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid  category = {category}/> )
        //expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
        
    });

})

/*
let wrapper;
    let gifs = [];
 
    beforeEach(() => {
        jest.clearAllMocks();
        gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        }]
 
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        wrapper = shallow(<GifGrid category={category} />);
    })
*/