import './ProfileCardApp.css';
import React, { useState, useEffect } from 'react';

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

function ProfileCardApp() {
    return (
        <div className='Profile-card'>
            <div className='Profile-card-align'>
                <div className='Profile-photo'></div>
                <div className='Profile-name'>
                    Emiliano Quintero Beltran
                </div>
                <TypingAnimation></TypingAnimation>
                <div className='Profile-social'>
                    <a href='/' className=''><i class="bi bi-git"></i></a>
                    <a href='/'><i class="bi bi-stack-overflow"></i></a>
                    <a href='/'><i class="bi bi-linkedin"></i></a>
                    <a href='/'><i class="bi bi-spotify"></i></a>
                </div>
                <div className='Profile-card-bottoms lnks'>
                    <a className='_lnks' href='/'>Downaldoad CV</a>
                    <a href='/'>Contact Me</a>
                </div>
            </div>
        </div>
    );
}

export default ProfileCardApp;