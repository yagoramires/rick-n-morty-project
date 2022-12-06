import React from 'react';
import loading from '../assets/loading.png';
import styles from './Loading.module.css';

const Loading = () => {
  return <img src={loading} alt='loading ...' className={styles.loading} />;
};

export default Loading;
