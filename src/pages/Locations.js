import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import LocationCard from '../components/LocationCard';
import { useApiContext } from '../context/ApiProvider';
import styles from './PageStyles.module.css';

const Locations = () => {
  const { locations, searchLocations, getNextPage } = useApiContext();

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [dimension, setDimension] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click');
    searchLocations(name, type, dimension);
  };

  return (
    <div className={styles.charactersPage}>
      <img src='' alt='' />
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
          placeholder='Type'
          value={type || ''}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type='text'
          placeholder='Dimension'
          value={dimension || ''}
          onChange={(e) => setDimension(e.target.value)}
        />
      </form>

      <div className={styles.cardContainer}>
        {locations &&
          locations.map((location) => (
            <LocationCard
              key={location.id}
              name={location.name}
              type={location.type}
            />
          ))}
      </div>

      <span className={styles.loadMore} onClick={getNextPage}>
        LOAD MORE
      </span>
    </div>
  );
};

export default Locations;
