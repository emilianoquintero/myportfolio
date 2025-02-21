import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MenuApp from './components/portfolio/MenuApp';
import ProfileCardApp from './components/portfolio/ProfileCardApp';
import InfoCardApp from './components/portfolio/InfoCardApp';

function App() {
  const [activeDivId, setActiveDivId] = useState('div1'); // Valor inicial aquí

  return (
    <div className="App">
    
      <div className='App-container'>
        <MenuApp setActiveDivId={setActiveDivId}/>
        <ProfileCardApp />
        <InfoCardApp activeDivId={activeDivId}/>
      </div>
    </div>
  );
}

export default App;
