import React, { useState } from 'react';
import './MenuApp.css';

function MenuApp( { setActiveDivId } ) {

  const menuOption = [
    {
      name: 'About',
      icon: 'bi bi-person-fill',
      opcion1: 'Hobbies',
      opcion2: 'Quote',
    },
    {
      name: 'Resume',
      icon: 'bi bi-file-earmark-person-fill',
      opcion1: 'Skills',
    },
    {
      name: 'Technologies',
      icon: 'bi bi-gear-fill'
    },
    {
      name: 'Works',
      icon: 'bi bi-briefcase-fill'
    },
    {
      name: 'Contact',
      icon: 'bi bi-envelope-fill',
      opcion1: 'Form',
    }
  ];

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState('About'); // Estado para la opción activa

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (divIcon) => {
    setActiveDivId(divIcon);
    setActiveIcon(divIcon);
  };

  return (
    <>
      <header className='menu-header'>
        <a>
          <p type='button' className='button-menu' onClick={toggleSidebar}>☰</p>
        </a>
        <div className='list-menu'>
          <ul className='list-inline'>
            { menuOption.map((option, index)=>(
              
              <li key={index} onClick={() => handleItemClick(option.name)} className={`custom-tooltip ${activeIcon === option.name ? 'active' : ''}`}>
                <i className={option.icon}></i>
                <span className="tooltip-text">{option.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="">
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <nav>
            <ul className='ps-3'>
              <li className={`sidebar-title ${activeIcon === 'About' ? 'active' : ''}`} onClick={() => handleItemClick('About')}>About</li>
                <ul>
                  <li className='sidebar-subtitles' onClick={() => handleItemClick('About')}>Hobbies</li>
                  <li className='sidebar-subtitles' onClick={() => handleItemClick('About')}>Quote</li>
                </ul>
              <li className={`sidebar-title ${activeIcon === 'Resume' ? 'active' : ''}`} onClick={() => handleItemClick('Resume')}>Resume</li>
                <ul>
                  <li className='sidebar-subtitles' onClick={() => handleItemClick('Resume')}>Skills</li>
                </ul>
              <li className={`sidebar-title ${activeIcon === 'Technologies' ? 'active' : ''}`} onClick={() => handleItemClick('Technologies')}>Technologies</li>
                <ul>
                  <li className='sidebar-subtitles'></li>
                </ul>
              <li className={`sidebar-title ${activeIcon === 'Works' ? 'active' : ''}`} onClick={() => handleItemClick('Works')}>Works</li>
              <li className={`sidebar-title ${activeIcon === 'Contact' ? 'active' : ''}`} onClick={() => handleItemClick('Contact')}>Contact</li>
                <ul>
                  <li className='sidebar-subtitles' onClick={() => handleItemClick('Contact')}>Form</li>
                </ul>
            </ul>
          </nav>
          
          <button className='close-btn' onClick={toggleSidebar}>X</button>
        </div>
    </div>
    </>
      
      
  );
}

export default MenuApp;