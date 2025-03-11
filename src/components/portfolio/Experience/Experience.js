import './Experience.css';

function Experience () {

    const techno = [
        {
            route: '/img/technologies/azure.svg',
            description: 'azure'
        },
        {
            route: '/img/technologies/git.svg',
            description: 'git'
        },
        {
            route: '/img/technologies/graphql.svg',
            description: 'graphql'
        },
        {
            route: '/img/technologies/html-5.svg',
            description: 'html-5'
        },
        {
            route: '/img/technologies/mysql.svg',
            description: 'mysql'
        },
        {
            route: '/img/technologies/node-js.svg',
            description: 'node-js'
        },
        {
            route: '/img/technologies/postman.svg',
            description: 'postman'
        },
        {
            route: '/img/technologies/react.svg',
            description: 'react'
        },
        {
            route: '/img/technologies/vscode.svg',
            description: 'vscode'
        }
    ]

    return (
        <div className='Card-inner-content-about'>
                <div className='Title p-3'>
                    <span className='First-word'>T</span>
                        echnologies
                </div>
                <div className='p-3'>
                        <div className='row justify-content-center'>
                        {techno.map((option, index)=>(
                                <div className="svg-container col-4" key={index}>
                                    <img className='svg-size' src={option.route} alt={option.description} />
                                </div>
                            ))}
                        </div>
                </div>
        </div>
    );
}

export default Experience