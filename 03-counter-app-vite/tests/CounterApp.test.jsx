import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas al counter app copmponent', () => { 

    test('debe hacer match con el snapshot', () => { 

        const {container} = render(<CounterApp value={77}/>);

        expect(container).toMatchSnapshot();


     });

     test('el contador debe de mostrar el valkor incial de 100', () => { 
        const valor = 100;

        render(<CounterApp value={valor}/>);

        expect(screen.findByTestId('test-valor')).toBeTruthy();
        expect(screen.getByText(valor).innerHTML).toContain(valor.toString());
      });

      test('debe de incrementar con el boton +1', () => { 
        const valor = 10;

        render(<CounterApp value={valor}/>);

        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
       })

       test('debe de decrementar con el boton -1', () => { 
        const valor = 10;

        render(<CounterApp value={valor}/>);

        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();
       })

       test('debe de resetear el valor con el boton de reset', () => { 
        const valor = 10;

        render(<CounterApp value={valor}/>);

        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();
        //fireEvent.click(screen.getByText('reset'))
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect(screen.getByText('10')).toBeTruthy();
       })

 })