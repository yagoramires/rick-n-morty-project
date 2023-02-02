import React, { useEffect } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useApiContext } from '../../context/ApiProvider';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

import styles from './Styles.module.css';

const CharDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    getCharacterDetails,
    characterDetails,
    characterEpisodes,
    fetchDetailsData,
  } = useApiContext();

  useEffect(() => {
    getCharacterDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (characterDetails.episode) {
      fetchDetailsData(characterDetails.episode, 'episodes');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterDetails]);

  const convertDate = (date) => {
    const value = new Date(date);

    const day = value.getDate();
    const month = value.getMonth();
    const year = value.getFullYear();

    let monthString;
    switch (month) {
      case 0:
        monthString = 'January';
        break;
      case 1:
        monthString = 'February';
        break;
      case 2:
        monthString = 'March';
        break;
      case 3:
        monthString = 'April';
        break;
      case 4:
        monthString = 'May';
        break;
      case 5:
        monthString = 'June';
        break;
      case 6:
        monthString = 'July';
        break;
      case 7:
        monthString = 'August';
        break;
      case 8:
        monthString = 'September';
        break;
      case 9:
        monthString = 'October';
        break;
      case 10:
        monthString = 'November';
        break;
      case 11:
        monthString = 'December';
        break;

      default:
        break;
    }

    return `${monthString} ${day}, ${year}`;
  };

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.imageContainer}>
        <span onClick={() => navigate(-1)} className={styles.backContainer}>
          <AiOutlineArrowLeft size={20} />
          GO BACK
        </span>
        <div className={styles.charContainer}>
          <img
            src={characterDetails?.image}
            alt={characterDetails?.name}
            className={styles.detailsImage}
          />
          <h1 className={styles.detailsTitle}>{characterDetails?.name}</h1>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.infoContainer}>
          <h2>Informations</h2>
          <div>
            <p>Gender</p>
            <p>{characterDetails?.gender}</p>
          </div>
          <div>
            <p>Status</p>
            <p>{characterDetails?.status}</p>
          </div>
          <div>
            <p>Specie</p>
            <p>{characterDetails?.species}</p>
          </div>
          <div>
            <p>Origin</p>
            <p>{characterDetails.origin?.name}</p>
          </div>
          <div>
            <p>Type</p>
            <p>{characterDetails?.type || 'Unknown'}</p>
          </div>
          <Link
            to={`/locations/details/${characterDetails?.location?.url.replace(
              'https://rickandmortyapi.com/api/location/',
              '',
            )}`}
            className={styles.locationContainer}
          >
            <div>
              <p>Location</p>
              <p>{characterDetails.location?.name}</p>
            </div>
            <IoIosArrowForward />
          </Link>
        </div>
        <div className={styles.episodesContainer}>
          <h2>Episodes</h2>
          <div className={styles.episodesList}>
            {characterEpisodes?.map((episode) => (
              <Link
                to={`/episodes/details/${episode.id}`}
                key={episode.id}
                className={styles.episodeLink}
              >
                <div to={`/episodes/details/${episode.id}`}>
                  <p>{episode.episode}</p>
                  <p>{episode.name}</p>
                  <p>{convertDate(episode.created)}</p>
                </div>
                <IoIosArrowForward />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharDetails;
