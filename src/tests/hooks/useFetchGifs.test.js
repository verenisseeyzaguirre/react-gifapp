// cap99 npm install --save-dev @testing-library/react-hooks
const { useFetchGifs } = require("../../hooks/useFetchGifs");
const { renderHook } = require("@testing-library/react-hooks");

describe('Prueba en el hook useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Panda' ) );
        const { data, loading } = result.current;

        //const { data, loading } = useFetchGifs( 'Panda' );
        
        //console.log(data, loading);
        await waitForNextUpdate(); //hace q espere el fetch, pues si no finalizaria el componente y la otra prueba tendria datos iniciales

        expect( data ).toEqual( [] ); //obtiene los datos actuales llamados en 10
        expect( loading ).toBe( true );

    });

    test('debe retornar un arreglo de imgs y loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Panda' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;



        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    })
    
    

})
// se debe mejorar, controlar pues cuando obtenga la data luego de hacer el fetch quizas el componente ya no exista y tampoco el setState