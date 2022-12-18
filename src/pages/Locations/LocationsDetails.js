import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useApiContext } from '../../context/ApiProvider';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from './Styles.module.css';
import Card from '../../components/CharacterCard';

const LocationsDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    getLocationDetails,
    locationDetails,
    fetchDetailsData,
    locationResidents,
  } = useApiContext();

  useEffect(() => {
    getLocationDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (locationDetails.residents) {
      fetchDetailsData(locationDetails.residents, 'residents');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationDetails]);

  return (
    <section className={styles.sectionContainer}>
      <div>
        <div className={styles.infoContainer}>
          <span onClick={() => navigate(-1)} className={styles.backContainer}>
            <AiOutlineArrowLeft size={20} /> GO BACK
          </span>

          <h1>{locationDetails?.name}</h1>
          <div>
            <div>
              <p>Type</p>
              <p>{locationDetails?.type}</p>
            </div>
            <div>
              <p>Dimension</p>
              <p>{locationDetails?.dimension}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.residentsContainer}>
        <h2>Residents</h2>
        <div>
          {locationResidents?.map((resident) => (
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

export default LocationsDetails;
