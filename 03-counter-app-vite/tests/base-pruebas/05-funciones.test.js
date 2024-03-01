import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('get user debe retornar un objeto', () => {
        const testUser ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        console.log(user);
        expect(user).toEqual(testUser);
    });

    test('get usuario activo debe retornar un objeto', () => {
        const name = 'Danilo';
        const testActivo = {
            uid: 'ABC567',
            username: name
        };
        const usuarioActivo = getUsuarioActivo(name);
        expect(testActivo).toEqual(usuarioActivo);
        expect(testActivo.username).toBe(usuarioActivo.username);
        expect(usuarioActivo.username).toBe(name);
    })

})