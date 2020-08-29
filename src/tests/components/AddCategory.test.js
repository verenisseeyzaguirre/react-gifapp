import React from 'react';
import '@testing-library/jest-dom';
//npm install -D @types/jest  importar para auto completado en los test

import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';

// { target : { value } }

describe('Pruebas en <AddCategory />', () => {

    //const setCategories = () => {};
    //no se sabe como es la fx de setCategories y por eso se usa la fx de abajo, tenemos la referencia como una fx
    // pensar en esa fx q es como la teniamos antes
    const setCategories = jest.fn();
    //const setInputValue = jest.fn();

    //se mantiene lo q sigue despues del igual porque si no ya no lee los atrib/metodos
    let wrapper = shallow( <AddCategory setCategories = {setCategories} /> );

    beforeEach( () => {
        //si teniamos una simulacion de algo , se limpie
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories = {setCategories} /> );
    });

    test('Debe mostrar <AddCategory /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { 
            target : {
                value : value
            }
        });
        const inputAfter = wrapper.find("input");
        expect(inputAfter.prop("value")).toBe(value);

    });

    test('No debe postear la informacion con submit', () => {
        //argumentos q seran transformados en el evento
        // metodo { prevenDefault: () => {} }
        wrapper.find("form").simulate('submit', { preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('Debe llamar el setCategories y limpiar la caja del texto', () => {
        
        //1. Simular el inputChange
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { 
            target : {
                value : value
            }
        });
        const inputAfter = wrapper.find("input");
        expect(inputAfter.prop("value")).toBe(value);

        //2. simular el submit
        wrapper.find("form").simulate('submit', { preventDefault(){} })
        //3. setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        //para confirmar q lo q ingresa a setCategories sea una funcion
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        //4.el valor del input debe ser ''
        const inputAfterTwice = wrapper.find("input");
        expect(inputAfterTwice.prop("value")).toBe('');
        //expect( setInputValue ).toHaveBeenCalled();

    });

})

/*
describe('Pruebas en <AddCategory/>', () => {
    let wrapper;
    const setCategories = jest.fn();
 
    const setInputValue = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
 
// ...
 
    test('debe de llamar el setInputValue', () => {
 
        useStateSpy.mockImplementation((init) => [init, setInputValue]);
 
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
 
        const value = 'Hola Mundo';
        wrapper.find('input').simulate('change', {
            target: { value }
        });
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        })
 
        expect(setInputValue).toHaveBeenCalledWith('Hola Mundo');
        expect(setInputValue).toHaveBeenCalled();
 
    })
*/ 