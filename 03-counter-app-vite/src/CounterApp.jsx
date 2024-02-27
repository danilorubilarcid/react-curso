import PropTypes from  'prop-types';

export const CounterApp = ({ value }) => {
    const handleAdd = () =>{
        console.log('+1');
        value = 1000;
        console.log(value);
    }

    return (
        <>
        <h1>Counter App</h1>
        <h2>{ value }</h2>

        <button onClick={ handleAdd }>
            +1
        </button>
        </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}