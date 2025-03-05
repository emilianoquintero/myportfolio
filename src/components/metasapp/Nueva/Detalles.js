import { useEffect, useState } from 'react';
import style from './Detalles.module.css';

function Detalles() {

    const [form, setForm] = useState({
        detalles: '',
        eventos: 1,
        periodo: '',
        icono: '',
        meta: 52,
        plazo: '',
        completado: 0
    
    });

    const { detalles, eventos, periodo, icono, meta, plazo, completado} = form;

    const onChange = (event, prop) => {
        setForm(estado => ({...estado, [prop]: event.target.value}));
    };

    const crear = async () => {
        console.log(form);
    };

    const opcionesDeFrecuencia = ['dia', 'semana', 'mes', 'ano'];
    const iconos = ['🏋️‍♀️', '📗', '💻', '🏃', '✈️', '💵'];

    return (
        <div className='card'>
            <form className='p-2'>
                <label className='imput-label'>
                    Describe yuor Goal
                    <div>
                        <input 
                            className='form-control' 
                            placeholder="Run for 30 minutes" 
                            value={detalles}
                            onChange={e => onChange(e, 'detalles')}>
                        </input>
                    </div>
                </label>
                <label>
                    Con que frecuencia lo deceas hacer
                    <div className='d-flex flex-row mb-2'>
                        <input className='form-control me-4' type="number" value={eventos} onChange={e => onChange(e, 'eventos')}></input>
                        <select 
                            className='form-control' 
                            value={periodo} 
                            onChange={e => onChange(e, 'periodo')}>
                                {opcionesDeFrecuencia.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                </label>
                <label>
                    Cuantas veces deseas completar esta meta
                    <div>
                        <input 
                            className='form-control' 
                            type="number" 
                            value={meta}
                            onChange={e => onChange(e, 'meta')}>
                        </input>
                    </div>
                </label>
                <label>
                    Fecha limite
                    <div>
                        <input 
                            className='form-control' 
                            type="date" 
                            value={plazo}
                            onChange={e => onChange(e, 'plazo')}
                        ></input>
                    </div>
                </label>
                <label>
                    Cuantas haz acompletado esta meta
                    <div>
                        <input 
                            className='form-control' 
                            type="number" 
                            value={completado}
                            onChange={e => onChange(e, 'completado')}>
                        </input>
                    </div>
                    
                </label>
                <label>
                    Escoge el icono para la Meta
                    <div>
                        <select 
                            className='form-control' 
                            value={icono} 
                            onChange={e => onChange(e, 'icono')}>
                                {iconos.map(opcion => <option value={opcion}>{opcion}</option>)}
                        </select>
                    </div>
                   
                </label>
            </form>
            <div className='p-2 d-flex justify-content-between'>
                <button className='btn btn-primary ' onClick={crear}>Crear</button>
                <button className='btn btn-danger ' >Cancelar</button>
            </div>
        </div>
    );
}

export default Detalles;