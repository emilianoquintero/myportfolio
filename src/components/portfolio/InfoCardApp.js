import './InfoCardApp.css'
import React, { useState, useEffect } from 'react';
import FooterMetasApp from "../metasapp/FooterMetasApp";
import HeaderMetasApp from "../metasapp/HeaderMetasApp";
import Metas from "../metasapp/list/Meta";
import PrincipalMetasApp from "../metasapp/PrincipalMetasApp";

function InfoCardApp( {activeDivId} ) {
    
    return (
        <>
        <div id='About' className={`Card-inner Animated active ${activeDivId === 'About' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
            <div className='Card-inner-content-about'>
                <div className='Title'>
                    <span className='First-word'>About </span>
                        Me
                </div>
                <div className='row'>
                        <div className='col'>
                            <div className="text-box">
                            <p>Contenido del párrafo...</p>
                            </div>
                        </div>
                        <div className='col'>
                        <div className="text-box">
                            <p>Contenido del párrafo...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='Resume' className={`Card-inner Animated active ${activeDivId === 'Resume' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
          <div className='Card-inner-content'>
            <h1>Resume</h1>
          </div>
        </div>
        <div id='Works' className={`Card-inner Animated active ${activeDivId === 'Works' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
          <div className='Card-inner-content'>
            <HeaderMetasApp></HeaderMetasApp>
            <PrincipalMetasApp>
                <Metas></Metas>
            </PrincipalMetasApp>
            <FooterMetasApp></FooterMetasApp>
          </div>
        </div>
        <div id='Apps' className={`Card-inner Animated active ${activeDivId === 'Apps' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
          <div className='Card-inner-content'>
            <h1>Apps</h1>
          </div>
        </div>
        <div id='Contact' className={`Card-inner Animated active ${activeDivId === 'Contact' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
          <div className='Card-inner-content'>
            <h1>Contact</h1>
          </div>
        </div>
        </>

    );
}

export default InfoCardApp;