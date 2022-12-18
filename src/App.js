// Routes
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Header from './components/Header';

// Pages
import Characters from './pages/Characters/Characters';
import CharacterDetails from './pages/Characters/CharacterDetails';
import Locations from './pages/Locations/Locations';
import LocationsDetails from './pages/Locations/LocationsDetails';
import Episodes from './pages/Episodes/Episodes';
import EpisodeDetails from './pages/Episodes/EpisodeDetails';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/characters' />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/characters/details/:id' element={<CharacterDetails />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/locations/details/:id' element={<LocationsDetails />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/episodes/details/:id' element={<EpisodeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
