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
                                <p className='j-text'>
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
                        <div className="p-3 text-box center-info">
                            <i class="bi bi-code-slash icon-design"></i>
                            <strong>
                                Coding
                            </strong>
                            <p className='j-text'>
                                I enjoy creating code because I always learn new things. More importantly, I love seeing how what I create with code.
                            </p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-3 text-box center-info">
                            <i class="bi bi-music-note-beamed icon-design"></i>
                            <strong>
                                Music
                            </strong>
                            <p className='j-text'>
                                I enjoy listening to my favorite music, but I also love discovering new artists and songs. My favorite genre depends on my mood.
                            </p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-3 text-box center-info">
                            <i class="bi bi-controller icon-design"></i>
                            <strong>
                                Gaming
                            </strong>
                            <p className='j-text'>
                                I play a lot of video games, but right now I only enjoy playing with friends. My current favorites are COD and PZ.
                            </p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="p-3 text-box center-info">
                            <i class="bi bi-book-fill icon-design"></i>
                            <strong>
                                Lecture
                            </strong>
                            <p className='j-text'>
                                I like reading; it's a hobby that brings me peace and a moment of relaxation. I try to read daily.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='Title p-3'>
                    <span className='First-word'>Favorite </span>
                        Quote
                </div>
                <div className='row '>
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