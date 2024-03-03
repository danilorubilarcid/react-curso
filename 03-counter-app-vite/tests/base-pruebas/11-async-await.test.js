import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('pruebas en 11 async wait', () => {
    test('async debe de retornar ujn url de la imagen', async() => {
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');

    });

});