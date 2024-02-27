import PropTypes from  'prop-types';
const newMessage = 'Danilo';


const saludar = function(nombre){
    return `Hola, ${nombre}`;
}


export const PrimerComponente = ({title, subtitle}) => {
  
  
    return (
    <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    </>
  )
}


PrimerComponente.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

PrimerComponente.defaultProps = {
    title: 'titulo por defecto',
    subtitle: 'subtitulo por defecto'
}