import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { BiSearch } from 'react-icons/bi';
import { useApiContext } from '../context/ApiProvider';

import Loading from '../components/Loading';

import Logo from '../assets/characters.png';
import styles from './PageStyles.module.css';
import { Link } from 'react-router-dom';

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

  // const teste = () => {
  //   const species = characters.map((char) => char.species);
  //   const status = characters.map((char) => char.status);
  //   const gender = characters.map((char) => char.gender);

  //   const getAllSpecies = new Set(species);
  //   const getAllStatus = new Set(status);
  //   const getAllType = new Set(gender);

  //   console.log([...getAllSpecies]);
  //   console.log([...getAllStatus]);
  //   console.log([...getAllType]);
  // };

  // useEffect(() => {
  //   teste();
  // }, [characters]);

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

      <div className={styles.cardContainer}>
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
    </div>
  );
};

export default Characters;
