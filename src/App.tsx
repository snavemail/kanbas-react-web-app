import React from 'react';
import Labs from './Labs';
import HelloWord from './Labs/a3/HelloWord';
import Kanbas from './Kanbas';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/Labs' />} />
        <Route path='/Labs/*' element={<Labs />} />
        <Route path='/Kanbas/*' element={<Kanbas />} />
        <Route path='/hello' element={<HelloWord />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
