import './Resume.css';

function Resume () {

    const arrayKnowledge = [
        'Git and GitHub workflows',
        'RESTful API development', 
        'Front-end development',
        'MySQL and PostgreSQL',
        'Node.js development',
        'UI/UX Design',
        'Web Hosting',
    ];

    const skills = [
        { name: 'JavaScript', width: '75%' },
        { name: 'TypeScript', width: '75%' },
        { name: 'HTML/CSS', width: '75%' },
        { name: 'Java', width: '50%' },
        { name: 'PHP', width: '50%' },
        { name: 'C/C++', width: '50%' },
        { name: 'PHYTON', width: '50%' },
        { name: 'SQL', width: '50%' },
    ];

    const lenguages = [
        { name: 'Spanish', width: '100%' },
        { name: 'English', width: '70%' }
    ];

    const frameworks = [
        { name: 'React', width: '75%' },
        { name: 'Angular', width: '75%' },
        { name: 'Springboot', width: '50%' },
        { name: 'Django', width: '50%' }
    ];

    const experience = [
        { date: '2024 - Present', name: 'FREELANCE', place: 'Online', description: 'Collaborate with local companies to improve their web systems, such as inventory or monitoring systems.', style: 'date-current'},
        { date: '2022 - 2024', name: 'FULL STACK', place: 'Coppel', description: 'Creation of user interfaces with backend integration for information management in both web and desktop applications.', style: 'date-not'},
        { date: '2021 - 2022', name: 'TESTER', place: 'ALGEZA', description: 'Collaboration with the development team to test a newly implemented monitoring system on the client side.', style: 'date-not'},
    ]

    const education = [
        { date: '2024 - Present', name: 'PROGRAMING COURSE', place: 'Online', description: 'Web development and design course, including programming logic.', style: 'date-current'},
        { date: '2018 - 2022', name: 'MECHATRONIC ENGINEER', place: 'Tecmilenio University', description: 'Graduated as a mechatronics engineer in the city of Guadalajara, Mexico.', style: 'date-not'}
    ]

    return (
        <div className='Card-inner-content-about'>
            <div className='content'>
                <div className='Title p-3'>
                    <span className='First-word'>R</span>
                        esume
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="Title p-3">
                            <i className="bi bi-briefcase-fill me-2 icon-design"> </i> 
                            Experience
                        </div>
                        {experience.map((option, index)=>(
                            <div className='content-resume p-3' key={index}>
                                <div className={option.style}>{option.date}</div>
                                <strong className='subtitles'>{option.name}</strong>
                                <div className='text'>{option.place}</div>
                            <div className='text'>{option.description}</div>

                        </div>
                        ))}
                    </div>
                    <div className='col'>
                        <div className="Title p-3">
                        <i className="bi bi-bank2 me-2 icon-design"> </i>
                            Education
                        </div>
                        {education.map((option, index)=>(
                            <div className='content-resume p-3' key={index}>
                                <div className={option.style}>{option.date}</div>
                                <strong className='subtitles'>{option.name}</strong>
                                <div className='text'>{option.place}</div>
                            <div className='text'>{option.description}</div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='Title p-3'>
                    <span className='First-word'>My </span>
                        Skills
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className="Title p-3">
                            <i className="bi bi-code-slash me-2 icon-design"> </i> 
                            Coding
                        </div>
                        <div className='content-resume p-3'>
                            {skills.map((skill, index) => (
                                <div className='progress-container' key={index}>
                                    <div className='text'>{skill.name}</div>
                                    <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow={parseInt(skill.width)} aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: skill.width}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="Title p-3">
                        <i className="bi bi-book-fill me-2 icon-design"> </i>
                            Frameworks
                        </div>
                        <div className='content-resume p-3'>
                            {frameworks.map((skill, index) => (
                                <div className='progress-container' key={index}>
                                    <div className='text'>{skill.name}</div>
                                    <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow={parseInt(skill.width)} aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: skill.width}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="Title p-3">
                        <i className="bi bi-bookmarks-fill me-2 icon-design"> </i>
                            Knowledge
                        </div>
                        <div className='content-resume p-3'>
                            {arrayKnowledge.map((item, index) => (
                                <div className='horizontal-align' key={index}>
                                    <i className="bi bi-check icon-design"></i>
                                    <p className='m-0 text'>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div> 
                    <div className='col-6'>
                        <div className="Title p-3">
                        <i className="bi bi-flag-fill me-2 icon-design"> </i>
                            Lenguages
                        </div>
                        <div className='content-resume p-3'>
                            {lenguages.map((skill, index) => (
                                <div className='progress-container' key={index}>
                                    <div className='text'>{skill.name}</div>
                                    <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow={parseInt(skill.width)} aria-valuemin="0" aria-valuemax="100" style={{height: '5px'}}>
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: skill.width}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume