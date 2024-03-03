import { render } from "@testing-library/react";
import { PrimerComponente } from "../src/FirstApp";

describe('pruebas en first app component', () => {

/*     test('debe haacer match con el snapshot', () => { 

        const titulo = 'Hola soy el titulo';
        const {container} = render(<PrimerComponente title={titulo} />);
        expect(container).toMatchSnapshot();

     }); */

     test('debe mostrar el titulo en un h1', () => { 

        const titulo = 'Hola soy el titulo';

        const {container, getByText, getByTestId} = render(<PrimerComponente title={titulo} />);

        expect(getByText(titulo)).toBeTruthy;
        expect(getByTestId('test-title').innerHTML).toContain(titulo);
/*         const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(titulo); */

      })
      	
      test('debe de mostrat el subtitula', () => { 
        const titulo = 'Hola soy el titulo';
        const subTitulo = 'Hola soy el subtitulo';

        const {getByText} = render(<PrimerComponente title={titulo} subtitle={subTitulo}/>);

        expect(getByText(subTitulo)).toBeTruthy;
        expect(getByText(subTitulo).innerHTML).toBe(subTitulo);
       })


});
