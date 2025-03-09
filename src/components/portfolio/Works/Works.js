import './Works.css';

function Works () {

    const works = [
        {
            imagen: process.env.PUBLIC_URL + '/img/workimg1.jpg',
            title: 'Metas App',
            description: 'React App.',
            link: ''
        },
        {
            imagen: process.env.PUBLIC_URL + '/img/workimg2.jpg',
            title: 'Crud App',
            description: 'Angular App',
            link: ''
        }
    ]

    return (
        <div className='Card-inner-content-about'>
                <div className='Title p-3'>
                    <span className='First-word'>Recent </span>
                        Works
                </div>
                <div className='row p-3'>
                    { works.map((option, index)=>(
                            <div className='col-6' key={index}>
                                <div className='conteiner' >
                                    <div className='background-img' style={{backgroundImage: `url(${option.imagen})`}}>
                                        <div className='overlay'>
                                            <i className='bi bi-zoom-in fs-1'></i> 
                                        </div>
                                    </div>
                                    <div>
                                        <div className='subtitles'>{option.title}</div>
                                        <div className='text' style={{textAlign: 'center'}}>{option.description}</div>
                                    </div>
                                </div>
                    
                            </div>
                        ))
                    } 
                </div>
        </div>
    );
}

export default Works