import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimerComponente } from './FirstApp';
import { HelloWorld } from './HelloWorld';
import './styles.css';
import { CounterApp } from './CounterApp';


ReactDOM.createRoot (document.getElementById('root')).render(
<React.StrictMode>

    <CounterApp value={5}/>
    
     {/* <PrimerComponente title='Titulo hola weta' subtitle='subtitulo' name='Danilo'/> */}
 </React.StrictMode>

);