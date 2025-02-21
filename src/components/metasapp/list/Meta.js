import './Meta.css'

function Metas() {
    return (
        <div className="d-flex tamaño-texto">
            <div className="flex-grow-1 flex-container">
                <div className='flex-item'>ICONO</div>
                <p className='flex-item'>1<sub>/semana</sub></p>
                <p className='flex-item'>detalles</p>
            </div>
            <div className="flex-grow-1 text-end">
                <p>4 de 5</p>
                <div>
                    <div></div>
                </div>
                <button>Completado</button>
            </div>
        </div>
    );
}

export default Metas;