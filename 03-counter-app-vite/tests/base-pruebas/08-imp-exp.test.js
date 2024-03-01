import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('pruebas en 08 imp export', () => {
    test('se espera que retorne un heroe POR id', () => {
        const heroe = getHeroeById(1);

        expect(heroe.name).toBe('Batman');
    });

    test('se espera que no retorne un heroe POR id que no existe', () => {
        const heroe = getHeroeById(99);

        expect(heroe).toBeFalsy();
    });

    test('se espera que retorne heroeS segun su owner DC', () => {

        const dueno = 'DC';
        const heroes = getHeroesByOwner(dueno);
        expect (typeof heroes).toBe('object');
        expect (heroes.length).toBe(3);
        expect (heroes).toEqual([{ id: 1, name: 'Batman', owner: 'DC' },
        { id: 3, name: 'Superman', owner: 'DC' },
        { id: 4, name: 'Flash', owner: 'DC' }]);
        expect (heroes).toEqual(heroes.filter( (heroe) => heroe.owner === dueno));
        expect (heroes[0].owner).toBe(dueno);
        expect (heroes[1].owner).toBe(dueno);
        expect (heroes[2].owner).toBe(dueno);

    });

    test('se espera que retorne heroeS segun su owner Marvel', () => {

        const dueno = 'Marvel';
        const heroes = getHeroesByOwner(dueno);
        expect (typeof heroes).toBe('object');
        expect (heroes.length).toBe(2);
        expect (heroes).toEqual(    [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);
        expect (heroes[0].owner).toBe(dueno);
        expect (heroes[1].owner).toBe(dueno);

    });

})


