import React, { useState } from 'react';
import InfoCardApp from './InfoCardApp';
import './MenuApp.css';

function MenuApp( { setActiveDivId } ) {

  return (
      <header className='menu-header'>
        <a>
          <button> Menu nav</button>
        </a>
        <div className='list-menu'>
          <ul>
            <li onClick={() => setActiveDivId('div1')}>About</li>
            <li onClick={() => setActiveDivId('div2')}>Resume</li>
            <li>Works</li>
            <li>Apps</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
      
  );
}

export default MenuApp;