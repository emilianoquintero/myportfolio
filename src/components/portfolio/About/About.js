import './About.css';

function About () {
    return (
        <div className='Card-inner-content-about'>
            <div className='content'>
                <div className='Title p-3'>
                    <span className='First-word'>About </span>
                        Me
                </div>
                <div className='row'>
                        <div className='col'>
                            <div className="p-3 text-box">
                                <p>
                                    Hi, I'm Emiliano, a web developer from Sinaloa, Mexico. I have experience working on both front-end and back-end development for websites. I’ve also worked with various frameworks, including React, Angular, and Spring Boot. I enjoy connecting and exchanging ideas about the unique aspects of our craft.
                                </p>
                            </div>
                        </div>
                        <div className='col'>
                        <div className="p-3 text-box">
                            <div className='info-list'>
                                <ul className='info-list'>
                                    <li className=''>
                                        <strong>Age . . . . </strong>
                                        24
                                    </li>
                                    <li>
                                        <strong>Residence . . . . </strong>
                                        MX
                                    </li>
                                    <li>
                                        <strong>Address . . . . </strong>
                                        Guadalajara, MX
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='Title p-3'>
                    <span className='First-word'>My </span>
                        Hobbies
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className="p-3 text-box">
                            Coding
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-3 text-box">
                            Music
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-3 text-box">
                            Gaming
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-3 text-box">
                            Lecture
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='Title p-3'>
                    <span className='First-word'>Favorite </span>
                        Quote
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className="p-3 text-box">
                            Aqui la cuota 
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className="p-3 text-box">
                            Mi nombre
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    );
}

export default About