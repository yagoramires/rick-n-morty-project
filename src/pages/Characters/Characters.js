import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useApiContext } from '../../context/ApiProvider';

import Logo from '../../assets/characters.png';
import { BiSearch } from 'react-icons/bi';
import styles from './Styles.module.css';

import Loading from '../../components/Loading';
import Card from '../../components/CharacterCard';

const Characters = () => {
  const [name, setName] = useState('');
  const [specie, setSpecie] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const speciesOptions = [
    'Human',
    'Alien',
    'Humanoid',
    'unknown',
    'Poopybutthole',
    'Mythological Creature',
    'Animal',
    'Robot',
    'Cronenberg',
    'Disease',
  ];

  const statusOptions = ['Alive', 'unknown', 'Dead'];
  const genderOptions = ['Male', 'Female', 'unknown', 'Genderless'];

  const { getCharacters, characters, searchCharacters, loadMore, loading } =
    useApiContext();

  // Fetch data when page is loaded
  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCharacters(name, status, specie, gender);
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt='logo' />
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
        />
        <select onChange={(e) => setSpecie(e.target.value)} defaultValue={''}>
          <option value=''>Species</option>
          {speciesOptions.map((specie, index) => (
            <option key={index} value={specie}>
              {specie}
            </option>
          ))}
        </select>
        <select onChange={(e) => setGender(e.target.value)} defaultValue={''}>
          <option value=''>Gender</option>
          {genderOptions.map((gender, index) => (
            <option key={index} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        <select onChange={(e) => setStatus(e.target.value)} defaultValue={''}>
          <option value=''>Status</option>
          {statusOptions.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
      </form>

      <div className={styles.cardsContainer}>
        {characters ? (
          characters.map((character) => (
            <Link key={character.id} to={`/characters/details/${character.id}`}>
              <Card
                image={character.image}
                name={character.name}
                specie={character.species}
              />
            </Link>
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
    </section>
  );
};

export default Characters;
