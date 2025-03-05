import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MenuApp from './components/portfolio/MenuApp';
import ProfileCardApp from './components/portfolio/ProfileCardApp';
import InfoCardApp from './components/portfolio/InfoCardApp';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Lista from './components/metasapp/list/Lista';
import Detalles from './components/metasapp/Nueva/Detalles';

function App() {

  const [activeDivId, setActiveDivId] = useState('About'); // Valor inicial aquí
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/lista' element={<Lista/>}/>
        <Route path='/nueva' element={<Detalles/>}/>

      </Route>
    </Routes>
  );
}

export default App;
