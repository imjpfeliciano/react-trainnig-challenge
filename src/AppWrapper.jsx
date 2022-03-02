import React, { useEffect, useState, useContext } from 'react';
import AppContainer from './AppContainer.styled';
import { CounterContext } from './components/Parent';

const formatText = (text) => text.toUpperCase();
/*
initialState = {
    type: '',
    color: '',
}

(state = initialState, action) 

CAMBIA_TYPE = { type: 'success', color: '' }
CAMBIA_COLOR = { type: 'success', color: 'green' }
CAMBIA_ALERTA = { type: 'warning', color: 'orange' }
RESETEA_ESTADO = { type: '', color: '' }
*/



const AppWrapper = () => {
    // logica
    // const [page, setPage] = useState('pokemon-list');
    const [type, setType] = useState('');
    const {count} = useContext(CounterContext)
    // const [state, setState] = useState({
    //     type: '',
    //     color: '',
    //     // ...
    // })

    // con arreglo de dependencias vacio -> durante la carga inicial
    // useEffect(() => {

    // }, [])

    // solo se ejecuta, cuando alguna de las dependencias se modifica
    useEffect(() => {
        if (!type) return;
    
       console.log({ type })
    }, [type])


    // se ejecuta, cada que sucede un cambio en el componente
    // useEffect(() => {
    //     console.log('Cambio detectado')
    // })

    // render
    return (
        <AppContainer type={type}>
            <div>
                <div>{count}</div>
                {formatText(`type: ${type}`)}
            </div>
            
            <input
                type="text"
                value={type}
                onChange={(event) => setType(event.target.value) }
            />

        </AppContainer>
    )
}

export default AppWrapper;