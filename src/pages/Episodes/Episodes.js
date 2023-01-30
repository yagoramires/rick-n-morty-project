import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApiContext } from '../../context/ApiProvider';

import Loading from '../../components/Loading';

import Image from '../../assets/episodes.png';
import { BiSearch } from 'react-icons/bi';
import styles from './Styles.module.css';
import EpisodesCard from '../../components/EpisodesCard';
import { useEffect } from 'react';

const Episodes = () => {
  const { getEpisodes, episodes, loadMore, loading, searchEpisodes } =
    useApiContext();

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    if (search !== '') {
      searchEpisodes(search);
    }

    return;
  };

  // Fetch data when page is loaded
  useEffect(() => {
    getEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.logoContainer}>
        <img src={Image} alt='episodes' className={styles.episodesImage} />
      </div>

      <form onSubmit={handleSearch}>
        <button type='submit'>
          <BiSearch size={25} />
        </button>
        <input
          type='text'
          value={search || ''}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Filter by name or episode'
        />
      </form>

      <div className={styles.episodeCardContainer}>
        {episodes?.map((ep) => (
          <Link key={ep.id} to={`/episodes/details/${ep.id}`}>
            <EpisodesCard
              name={ep.name}
              created={ep.created}
              episode={ep.episode}
            />
          </Link>
        ))}
      </div>

      <div className={styles.btnContainer}>
        {loading ? (
          <Loading />
        ) : (
          <span
            className={styles.loadMore}
            onClick={() => loadMore('episodes')}
          >
            LOAD MORE
          </span>
        )}
      </div>
    </section>
  );
};

export default Episodes;
