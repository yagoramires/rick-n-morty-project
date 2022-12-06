import React from 'react';
import styles from './Card.module.css';

const Card = ({ image, name, specie }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.specie}>{specie}</p>
    </div>
  );
};

export default Card;
