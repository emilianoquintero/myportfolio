import React, { useState } from 'react';
import InfoCardApp from './InfoCardApp';
import './MenuApp.css';

function MenuApp( { setActiveDivId } ) {

  return (
      <header className='menu-header'>
        <a>
          <button type='button' className='btn btn-secondary'> Menu nav</button>
        </a>
        <div className='list-menu'>
          <ul>
            <li onClick={() => setActiveDivId('About')}>About</li>
            <li onClick={() => setActiveDivId('Resume')}>Resume</li>
            <li onClick={() => setActiveDivId('Works')}>Works</li>
            <li onClick={() => setActiveDivId('Apps')}>Apps</li>
            <li onClick={() => setActiveDivId('Contact')}>Contact</li>
          </ul>
        </div>
      </header>
      
  );
}

export default MenuApp;