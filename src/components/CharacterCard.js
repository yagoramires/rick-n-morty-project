import React from 'react';
import styles from './CharacterCard.module.css';

const Card = ({ image, name, specie }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />

      <div className={styles.textContainer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.specie}>{specie}</span>
      </div>
    </div>
  );
};

export default Card;
