import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApiContext } from '../context/ApiProvider';

const LocationsDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { searchLoc, location } = useApiContext();

  useEffect(() => {
    searchLoc(id);
  }, []);

  console.log(location);

  return (
    <div>
      <div>
        <span></span>
        <div>
          <h1>{location?.name}</h1>
          <div>
            <div>
              <p>Type</p>
              <p>{location?.type}</p>
            </div>
            <div>
              <p>Dimension</p>
              <p>{location?.dimension}</p>
            </div>
          </div>
        </div>
      </div>
      <div>Residents</div>
      {location?.residents.map((resident) => (
        <p>{resident}</p>
      ))}
    </div>
  );
};

export default LocationsDetails;
