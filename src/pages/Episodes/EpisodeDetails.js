import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useApiContext } from '../../context/ApiProvider';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from './Styles.module.css';
// import Card from '../../components/CharacterCard';

const EpisodeDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { getEpisodeDetails, episodeDetails } = useApiContext();

  useEffect(() => {
    getEpisodeDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(episodeDetails);

  return (
    // <section className={styles.sectionContainer}>
    //   <span onClick={() => navigate(-1)} className={styles.backContainer}>
    //     <AiOutlineArrowLeft size={20} /> GO BACK
    //   </span>

    //   {episodeDetails && (
    //     <div>
    //       <h1>{episodeDetails.name}</h1>
    //       <div>
    //         <div>
    //           <h2>Episode</h2>
    //           <p>{episodeDetails.episode}</p>
    //         </div>
    //         <div>
    //           <h2>Date</h2>
    //           <p>{episodeDetails.created}</p>
    //         </div>

    //         <div>
    //           <h2>Cast</h2>
    //           <div>cards</div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </section>
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
          {/* {episodeDetails?.map((resident) => (
            <Link key={resident.id} to={`/characters/details/${resident.id}`}>
              <Card
                image={resident.image}
                name={resident.name}
                specie={resident.species}
              />
            </Link>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default EpisodeDetails;
