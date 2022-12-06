import React, { useState } from 'react';
import Card from '../components/Card';
import { BiSearch } from 'react-icons/bi';
import { useApiContext } from '../context/ApiProvider';

import Loading from '../components/Loading';

import Logo from '../assets/characters.png';
import styles from './PageStyles.module.css';

const Characters = () => {
  const [name, setName] = useState('');
  const [specie, setSpecie] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const { characters, searchCharacters, loadMore, loading } = useApiContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCharacters(name, status, specie, gender);
  };

  return (
    <div className={styles.charactersPage}>
      <div className={styles.imageContainer}>
        <img src={Logo} alt='logo' className={styles.logo} />
      </div>
      <form onSubmit={handleSubmit}>
        <button type='submit'>
          <BiSearch size={25} />
        </button>
        <input
          type='text'
          placeholder='Filter by name'
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
          className={styles.first}
        />
        <input
          type='text'
          placeholder='Species'
          value={specie || ''}
          onChange={(e) => setSpecie(e.target.value)}
        />
        <input
          type='text'
          placeholder='Gender'
          value={gender || ''}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type='text'
          placeholder='Status'
          value={status || ''}
          onChange={(e) => setStatus(e.target.value)}
        />
      </form>

      <div className={styles.cardContainer}>
        {characters ? (
          characters.map((character) => (
            <Card
              key={character.id}
              image={character.image}
              name={character.name}
              specie={character.species}
            />
          ))
        ) : (
          <p>Nenhum personagem encontrado</p>
        )}
      </div>

      <div className={styles.btnContainer}>
        {loading ? (
          <Loading />
        ) : (
          <span
            className={styles.loadMore}
            onClick={() => loadMore('characters')}
          >
            LOAD MORE
          </span>
        )}
      </div>
    </div>
  );
};

export default Characters;
