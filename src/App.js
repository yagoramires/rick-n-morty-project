import { useState } from 'react';
import { useApiContext } from './context/ApiProvider';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';

import Characters from './pages/Characters';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Navigate to='/characters' />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/episodes' element={<Episodes />} />
      </Routes>
    </div>
  );
}

export default App;
