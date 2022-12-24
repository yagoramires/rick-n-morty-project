import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { useApiContext } from '../../context/ApiProvider';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from './Styles.module.css';
import Card from '../../components/CharacterCard';

const EpisodeDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    getEpisodeDetails,
    episodeDetails,
    episodeCharacters,
    fetchDetailsData,
  } = useApiContext();

  useEffect(() => {
    getEpisodeDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (episodeDetails.characters) {
      fetchDetailsData(episodeDetails.characters, 'characters');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [episodeDetails]);

  console.log(episodeCharacters);

  return (
    <section className={styles.sectionContainer}>
      <div>
        <div className={styles.infoContainer}>
          <span onClick={() => navigate(-1)} className={styles.backContainer}>
            <AiOutlineArrowLeft size={20} /> GO BACK
          </span>

          <h1>{episodeDetails?.name}</h1>
          <div>
            <div>
              <p>Episode</p>
              <p>{episodeDetails?.episode}</p>
            </div>
            <div>
              <p>Date</p>
              <p>{episodeDetails?.created}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.castContainer}>
        <h2>Cast</h2>
        <div>
          {episodeCharacters?.map((resident) => (
            <Link key={resident.id} to={`/characters/details/${resident.id}`}>
              <Card
                image={resident.image}
                name={resident.name}
                specie={resident.species}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodeDetails;
