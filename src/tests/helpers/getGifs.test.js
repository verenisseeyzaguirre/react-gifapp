import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con <getGifs /> Fecth', () => {

    test('Debe traer 10 elementos', async() => {

        const gifs = await getGifs('Panda');
        expect( gifs.length ).toBe(10);

    });

    test('Debe traer 0 elementos cuando la category esta vacia', async() => {

        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);

    });


})
