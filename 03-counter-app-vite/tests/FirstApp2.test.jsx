import { render, screen } from "@testing-library/react";
import { PrimerComponente } from "../src/FirstApp";

describe('pruebas en first app component', () => {

        const titulo = 'Hola soy el titulo';
        const subtitulo = 'Hola soy el subtitulo';

        test('debe hacer match con el snapshot', () => { 

                const {container} = render(<PrimerComponente title={titulo} subtitle={subtitulo}/>);

                expect(container).toMatchSnapshot();
         })

         test('debe ded mostrar el titulo hola soy el titulo', () => { 

                render(<PrimerComponente title={titulo} subtitle={subtitulo}/>);
                expect(screen.getByText(titulo)).toBeTruthy();
          })

        test('el titulo debe estar en un h1', () => { 
                render(<PrimerComponente title={titulo} subtitle={subtitulo}/>);
                expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(titulo);
         })

         test('debe mostrar el subtitulo enviado por props', () => { 
                render(<PrimerComponente title={titulo} subtitle={subtitulo}/>);
                expect(screen.getByText(subtitulo).innerHTML).toBe(subtitulo);

          })
});
