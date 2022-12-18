import React from 'react';
import styles from './CharacterCard.module.css';

const Card = ({ image, name, specie }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />

      <div className={styles.textContainer}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.specie}>{specie}</p>
      </div>
    </div>
  );
};

export default Card;
