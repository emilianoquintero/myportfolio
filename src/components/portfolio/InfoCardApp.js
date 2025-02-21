import './InfoCardApp.css'
import React, { useState, useEffect } from 'react';
import FooterMetasApp from "../metasapp/FooterMetasApp";
import HeaderMetasApp from "../metasapp/HeaderMetasApp";
import Metas from "../metasapp/list/Meta";
import PrincipalMetasApp from "../metasapp/PrincipalMetasApp";

function InfoCardApp( {activeDivId} ) {
    console.log(activeDivId);
    
    return (
        <>
        <div id='div1' className={`Card-inner Animated active ${activeDivId === 'div1' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
            <div className='Card-inner-content-about'>
                <div className='Title'>
                    <span className='First-word'>About {activeDivId}</span>
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
        <div id='div2' className={`Card-inner Animated active ${activeDivId === 'div2' ? 'FadeInLeft' : 'FadeOutLeft'}`}>
          <div className='Card-inner-content'>
            <h1>Adios</h1>
          </div>
        </div>
        <div className='Card-inner Animated hidden FadeOutLeft'>
          <div className='Card-inner-content'>
            <HeaderMetasApp></HeaderMetasApp>
            <PrincipalMetasApp>
                <Metas></Metas>
            </PrincipalMetasApp>
            <FooterMetasApp></FooterMetasApp>
          </div>
        </div>
        </>

    );
}

export default InfoCardApp;