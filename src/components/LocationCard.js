import React from 'react';
import styles from './LocationCard.module.css';

const LocationCard = ({ name, type }) => {
  return (
    <div className={styles.LocationCard}>
      <h3>{name}</h3>
      <p>{type}</p>
    </div>
  );
};

export default LocationCard;
