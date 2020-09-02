import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {

    const [error, guardarError] = useState(false);

    const {ciudad,pais} = busqueda;

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            guardarConsultar(false);
            return;
        }

        guardarError(false);
        guardarConsultar(true);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje='Ambos campos son obligatorios'/> : null}
            <div className='input-field col s12'>
                <input 
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>Ciudad:</label>
            </div>
            <div className='input-field col s12'>
                <select
                    name='pais'
                    id='pais'
                    value={pais}
                    onChange={handleChange}
                >
                    <option value=''>--Seleccione un pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='pais'>Pais:</label>
            </div>
            <input
                type='submit'
                value='Buscar Clima'
                className='input-field col s12 btn-large btn-block yellow accent-4'
            />
        </form>
    );
}
 
Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}

export default Formulario;