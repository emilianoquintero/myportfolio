import './Works.css';

function Works () {
    return (
        <div className='Card-inner-content-about'>
                <div className='Title p-3'>
                    <span className='First-word'>R</span>
                        ecent Works
                </div>
                <div className='row p-3'>
                        <div className='col'>
                            <div className='conteiner'>
                                <div className='background-img'>
                                <div className='overlay'>
                                    <i className='bi bi-bank2 fs-1'></i> 
                                </div>
                                </div>
                                <div>
                                    <h5>Metas App</h5>
                                    <p>REACT JS</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                        <div className="text-box">
                            <p>Contenido del párrafo...</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Works