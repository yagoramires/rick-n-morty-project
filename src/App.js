// Routes
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Header from './components/Header';

// Pages
import Characters from './pages/Characters';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';
import CharDetails from './pages/CharDetails';
import LocationsDetails from './pages/LocationsDetails';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/characters' />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/characters/details/:id' element={<CharDetails />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/locations/details/:id' element={<LocationsDetails />} />
        <Route path='/episodes' element={<Episodes />} />
      </Routes>
    </div>
  );
}

export default App;
