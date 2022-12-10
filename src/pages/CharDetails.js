import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApiContext } from '../context/ApiProvider';

import { AiOutlineArrowLeft } from 'react-icons/ai';

const CharDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { searchChar, character } = useApiContext();

  useEffect(() => {
    searchChar(id);
  }, []);

  console.log(character);

  return (
    <div>
      <div>
        <span onClick={() => navigate('/characters')}>
          <AiOutlineArrowLeft size={20} /> GO BACK
        </span>
        <div>
          <img src={character?.image} alt={character?.name} />
          <h1>{character?.name}</h1>
        </div>
      </div>
      <div>
        <div>
          <h2>informations</h2>
          <div>
            <p>Gender</p>
            <p>{character?.gender}</p>
          </div>
          <div>
            <p>Status</p>
            <p>{character?.status}</p>
          </div>
          <div>
            <p>Specie</p>
            <p>{character?.species}</p>
          </div>
          <div>
            <p>Origin</p>
            <p>{character.origin?.name}</p>
          </div>
          <div>
            <p>Type</p>
            <p>{character?.type}</p>
          </div>
          <div>
            <p>Location</p>
            <p>{character.location?.name}</p>
          </div>
        </div>
        <div>
          <h2>Episodes</h2>
          <div>
            {character.episode &&
              character?.episode.map((ep) => <div key={ep}></div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharDetails;
