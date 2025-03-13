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
                                <p className='text'>
                                    Hi, I'm Emiliano, a web developer from Sinaloa, Mexico. I have experience working on both front-end and back-end development for websites. I’ve also worked with various frameworks, including React, Angular, and Spring Boot. I enjoy connecting and exchanging ideas about the unique aspects of our craft.
                                </p>
                            </div>
                        </div>
                        <div className='col'>
                        <div className="p-3 text-box">
                            <div className='info-list'>
                                <ul className='info-list text'>
                                    <li className=''>
                                        <strong className='background-inf'>Age . . . . </strong>
                                        27
                                    </li>
                                    <li>
                                        <strong className='background-inf'>Residence . . . . </strong>
                                        MX
                                    </li>
                                    <li>
                                        <strong className='background-inf'>Address . . . . </strong>
                                        Sin, MX
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
                <div className='row text'>
                    <div className='col-6'>
                        <div className="p-3 text-box center-info">
                            <i className="bi bi-code-slash icon-design"></i>
                            <strong>
                                Coding
                            </strong>
                            <p className='text'>
                                I enjoy creating code and discovering new tools or technologies along the way. I love testing the interfaces or modifications I 
                            </p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-3 text-box center-info">
                            <i className="bi bi-music-note-beamed icon-design"></i>
                            <strong>
                                Music
                            </strong>
                            <p className='text'>
                                I enjoy listening to my favorite music, but I also love discovering new artists and songs. My favorite genre depends on my mood.
                            </p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-3 text-box center-info">
                            <i className="bi bi-controller icon-design"></i>
                            <strong>
                                Gaming
                            </strong>
                            <p className='text'>
                                I play a lot of video games, but right now I only enjoy playing with friends. My current favorites are COD and PZ.
                            </p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-3 text-box center-info">
                            <i className="bi bi-book-fill icon-design"></i>
                            <strong className='text'>
                                Lecture
                            </strong>
                            <p className='text'>
                                I like reading; it's a hobby that brings me peace and a moment of relaxation. I try to read daily.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='Quote' className='content'>
                <div className='Title p-3'>
                    <span className='First-word'>Favorite </span>
                        Quote
                </div>
                <div className='row text'>
                    <div className='col-12 '>
                        <div className="p-3 text-box j-text center-info">
                            " The hardest part of any important task is getting started on it in the first place "
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className="p-3 text-box j-text center-info">
                            Brian Tracy
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    );
}

export default About