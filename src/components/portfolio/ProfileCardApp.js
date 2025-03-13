import './ProfileCardApp.css';
import React, { useState, useEffect } from 'react';

const socialOption = [
    {
        icon: 'bi bi-github',
        link: 'https://github.com/'
    },
    {
        icon: 'bi bi-linkedin',
        link: 'https://www.linkedin.com/'
    },
    {
        icon: 'bi bi-whatsapp',
        link: 'https://wa.me/5216671064658?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n'
    },
    {
        icon: 'bi bi-spotify',
        link: 'https://open.spotify.com/playlist/37i9dQZF1ELVTfo1sS2l8z?si=0e17a7312bc34f46'
    },
]

const TypingAnimation = () => {
    const [text, setText] = useState('');
    const phrases = ['DEVELOPER', 'FULL-STACK', 'FREELANCER'];
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseBetweenPhrases = 1500;

    useEffect(() => {
        let timer;

        if (!isDeleting && charIndex < phrases[phraseIndex].length) {
            timer = setTimeout(() => {
                setText(text + phrases[phraseIndex].charAt(charIndex));
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            timer = setTimeout(() => {
                setText(text.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, deletingSpeed);
        } else if (!isDeleting && charIndex === phrases[phraseIndex].length) {
            setTimeout(() => setIsDeleting(true), pauseBetweenPhrases);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setPhraseIndex((phraseIndex + 1) % phrases.length);
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, phraseIndex, text, phrases]);

    return <div className='Profile-title'>[ {text} ]</div>;
};

function ProfileCardApp( { setActiveDivId } ) {
    return (
        <div className='Profile-card'>
            <div className='Profile-card-align'>
                <div className='Profile-photo'></div>
                <div className='Profile-name'>
                    Emiliano Quintero Beltran
                </div>
                <div>
                    <TypingAnimation></TypingAnimation>
                </div>
                <div className='Profile-social'>
                    {
                        socialOption.map((option, index)=>(
                        <div key={index}>    
                            <a  href={option.link} target="_blank" rel="noopener noreferrer" className=''><i className={option.icon}></i></a>
                        </div>
                    ))}
                </div>
                <div className='Profile-card-bottoms lnks text'>
                    <a className='_lnks' href='/resume-gh-pages/doc/EmilianoQuintero_Resume.pdf' download="resume-emilianoquintero">Downaldoad CV <i className="bi bi-cloud-download-fill"></i></a>
                    <a className='_lnks' onClick={() => setActiveDivId('Contact')}>Contact Me <i className="bi bi-send-fill"></i></a>
                </div>
            </div>
        </div>
    );
}

export default ProfileCardApp;