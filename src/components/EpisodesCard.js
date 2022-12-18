import React from 'react';

import styles from './EpisodesCard.module.css';

const EpisodesCard = ({ name, created, episode }) => {
  return (
    <div className={styles.episodeCard}>
      <h1>{name}</h1>
      <p>
        {new Date(created).toLocaleString('pt-BR', {
          timeZone: 'UTC',
          timeZoneName: 'short',
        })}
      </p>
      <p>{episode}</p>
    </div>
  );
};

export default EpisodesCard;
