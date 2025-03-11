import './Experience.css';

function Experience () {

    const techno = [
        {
            route: `${process.env.PUBLIC_URL}/img/technologies/azure.svg`,
            description: 'azure'
        },
        {
            route: '/resume-gh-pages/img/technologies/git.svg',
            description: 'git'
        },
        {
            route: '/resume-gh-pages/img/technologies/graphql.svg',
            description: 'graphql'
        },
        {
            route: '/resume-gh-pages/img/technologies/html-5.svg',
            description: 'html-5'
        },
        {
            route: '/resume-gh-pages/img/technologies/mysql.svg',
            description: 'mysql'
        },
        {
            route: '/resume-gh-pages/img/technologies/node-js.svg',
            description: 'node-js'
        },
        {
            route: '/resume-gh-pages/img/technologies/postman.svg',
            description: 'postman'
        },
        {
            route: '/resume-gh-pages/img/technologies/react.svg',
            description: 'react'
        },
        {
            route: '/resume-gh-pages/img/technologies/vscode.svg',
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