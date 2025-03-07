import './InfoCardApp.css'
import React, { useState, useEffect } from 'react';
import About from './About/About';
import Resume from './Resume/Resume';
import Experience from './Experience/Experience';
import Works from './Works/Works';
import Contact from './Contact/Contact';

function InfoCardApp( {activeDivId} ) {
    
    return (
        <>
        <div id='About' className={`Card-inner Animated active ${activeDivId === 'About' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
          <About></About>
        </div>
        <div id='Resume' className={`Card-inner Animated active ${activeDivId === 'Resume' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
          <Resume></Resume>
        </div>
        <div id='Works' className={`Card-inner Animated active ${activeDivId === 'Works' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
          <Works></Works>
        
        </div>
        <div id='Apps' className={`Card-inner Animated active ${activeDivId === 'Blog' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
          <Experience></Experience>
        </div>
        <div id='Contact' className={`Card-inner Animated active ${activeDivId === 'Contact' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
          <Contact></Contact>
        </div>
        </>

    );
}

export default InfoCardApp;