import { useState } from 'react';
import { useApiContext } from './context/ApiProvider';

function App() {
  const { characters, nextPage, getNextPage, searchCharacters } =
    useApiContext();

  const [name, setName] = useState();
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    searchCharacters(name, species, gender, status);
  };

  console.log(characters);

  return (
    <div className='App'>
      <button onClick={() => getNextPage(nextPage)}>Get More Results</button>

      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Species</p>
        <input
          type='text'
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
        <p>Gender</p>
        <input
          type='text'
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <p>Status</p>
        <input
          type='text'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <input type='submit' value='filtrar' />
      </form>

      <div>
        {characters?.map((character, index) => (
          <p key={index}>{character.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
