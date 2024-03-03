import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('pruebas en 09 promesas', () => {
    test('get heroe by ID syn debe retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then (hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
        done();
        });
    });

    test('get heroe by ID syn debe retornar un error', (done) => {
        const id = -1;
        getHeroeByIdAsync(id)
        .catch(error => {
            expect(error).toBe(`No se pudo encontrar el héroe`);
        });
        done();
    });
});    