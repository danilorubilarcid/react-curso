import PropTypes from  'prop-types';
const newMessage = 'Danilo';


const saludar = function(nombre){
    return `Hola, ${nombre}`;
}


export const PrimerComponente = ({title, subtitle, name}) => {
  
  
    return (
    <>
    <h1 data-testid="test-title">{title}</h1>
    <p>{subtitle}</p>
    <p>{name}</p>
    </>
  )
}


PrimerComponente.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

PrimerComponente.defaultProps = {
    subtitle: 'subtitulo por defecto'
}