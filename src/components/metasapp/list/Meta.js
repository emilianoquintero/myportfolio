import './Meta.css'

function Metas({ icono, eventos, periodo, detalles, meta, completado}) {
    const porcentaje = (completado / meta) * 100;
    return (
        <div className='card'>
        <div className="card-body d-flex align-items-center tamaño-texto">
            <div className="flex-grow-1 flex-container d-flex align-items-center justify-content-between">
                <div className='flex-item'>{icono}</div>
                <p className='flex-item m-0'>{eventos}<sub>/{periodo}</sub></p>
                <p className='flex-item m-0'>{detalles}</p>
            </div>
            <div className="flex-grow-1 flex-container text-end d-flex align-items-center justify-content-end">
            <div className="progress-container">
                <span clclassNameass="progress-text">{completado} de {meta}</span>
                <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar" style={{width: `${porcentaje}%`}}>
                    </div>
                </div>
            </div>
                <button type="button" className="btn-small" >Completado</button>
            </div>
        </div>

        </div>
    );
}

export default Metas;