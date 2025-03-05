import React, { useState } from 'react';
import InfoCardApp from './InfoCardApp';
import './MenuApp.css';

function MenuApp( { setActiveDivId } ) {
  
  const [activeDivIdColor, setActiveDivIdColor] = useState('About');

  return (
      <header className='menu-header'>
        <a>
          <p type='button' className='button-menu'>☰</p>
        </a>
        <div className='list-menu'>
          <ul className='list-inline'>
            <li onClick={() => setActiveDivId('About')} className='custom-tooltip'>
              <i className="bi bi-person-fill"></i>
              <span className="tooltip-text">ABOUT</span>
            </li>
            <li onClick={() => setActiveDivId('Resume')} className='custom-tooltip'>
              <i class="bi bi-file-earmark-person-fill"></i>
              <span className="tooltip-text">RESUME</span>
            </li>
            <li onClick={() => setActiveDivId('Works')} className='custom-tooltip'>
              <i class="bi bi-card-checklist"></i>
              <span className="tooltip-text">WORKS</span>
            </li>
            <li onClick={() => setActiveDivId('Blog')} className='custom-tooltip'>
              <i class="bi bi-window-stack"></i>
              <span className="tooltip-text">BLOG</span>
            </li>
            <li onClick={() => setActiveDivId('Contact')} className='custom-tooltip'>
              <i class="bi bi-envelope-fill"></i>
              <span className="tooltip-text">CONTACT</span>
            </li>
          </ul>
        </div>
      </header>
      
  );
}

export default MenuApp;