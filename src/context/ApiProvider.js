import { useContext, createContext, useEffect, useState } from 'react';

import ApiService from '../api/service';

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  // STATES
  const [characters, setCharacters] = useState([]);
  const [charactersPage, setCharactersPage] = useState('');
  const [characterDetails, setCharacterDetails] = useState([]);
  const [characterEpisodes, setCharacterEpisodes] = useState([]);

  const [locations, setLocations] = useState([]);
  const [locationsPage, setLocationsPage] = useState('');
  const [locationDetails, setLocationDetails] = useState([]);
  const [locationResidents, setLocationResidents] = useState([]);

  const [episodeDetails, setEpisodeDetails] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [episodesPage, setEpisodesPage] = useState('');

  const [loading, setLoading] = useState(false);

  // Character functions

  // Get all
  const getCharacters = async () => {
    const {
      data: { info, results },
    } = await ApiService.getCharacters();

    setCharactersPage(info.next);
    setCharacters(results);
  };

  // Filter
  const searchCharacters = async (name, status, species, gender) => {
    const {
      data: { info, results },
    } = await ApiService.searchCharacters(name, status, species, gender);

    setCharactersPage(info.next);
    setCharacters(results);
  };

  // Get Details
  const getCharacterDetails = async (id) => {
    const { data } = await ApiService.getCharacterDetails(id);
    setCharacterDetails(data);
  };

  // Location functions

  // Get all
  const getLocations = async () => {
    const {
      data: { info, results },
    } = await ApiService.getLocations();

    setLocationsPage(info.next);
    setLocations(results);
  };

  // Filter
  const searchLocations = async (name, type, dimension) => {
    const {
      data: { info, results },
    } = await ApiService.searchLocations(name, type, dimension);

    setLocationsPage(info.next);
    setLocations(results);
  };

  // Get Details
  const getLocationDetails = async (id) => {
    const { data } = await ApiService.getLocationDetails(id);
    setLocationDetails(data);
  };

  // Episode functions

  // Get all
  const getEpisodes = async () => {
    const {
      data: { info, results },
    } = await ApiService.getEpisodes();

    setEpisodesPage(info.next);
    setEpisodes(results);
  };

  // Filter
  const searchEpisodes = async (name) => {
    const {
      data: { info, results },
    } = await ApiService.searchEpisodes(name);

    setEpisodesPage(info.next);
    setEpisodes(results);
  };

  //Get Details
  const getEpisodeDetails = async (id) => {
    const { data } = await ApiService.getEpisodeDetails(id);
    setEpisodeDetails(data);
  };

  // Load more items function
  const loadMore = async (type) => {
    setLoading(true);
    if (type === 'characters') {
      if (charactersPage === null) {
        return;
      }
      const {
        data: { info, results },
      } = await ApiService.getNextPage(charactersPage);

      setCharactersPage(info.next);
      setCharacters([...characters, ...results]);
      setLoading(false);
      return;
    }
    if (type === 'locations') {
      if (locationsPage === null) {
        return;
      }
      const {
        data: { info, results },
      } = await ApiService.getNextPage(locationsPage);

      setLocationsPage(info.next);
      setLocations([...locations, ...results]);
      setLoading(false);
      return;
    }
    if (type === 'episodes') {
      if (episodesPage === null) {
        return;
      }
      const {
        data: { info, results },
      } = await ApiService.getNextPage(episodesPage);

      setEpisodesPage(info.next);
      setEpisodes([...episodes, ...results]);
      setLoading(false);
      return;
    }
  };

  // Fetch details data when user load details page
  const fetchDetailsData = async (data, type) => {
    let promises = [];
    data.forEach((url) => promises.push(handleURL(url))); // para cada URL irá retornar um promise
    const dataArray = await Promise.all(promises); // resolve todos os promises e coloca os objetos dentro de um array

    if (type === 'characters') {
      setCharacterEpisodes(dataArray); //passa todos os objetos para uma variável
      return;
    }

    if (type === 'residents') {
      setLocationResidents(dataArray); //passa todos os objetos para uma variável
      return;
    }
  };

  const handleURL = async (url) => {
    const { data } = await ApiService.getDetailsInfo(url);
    return data;
  };

  // Fetch data when app initializes
  useEffect(() => {
    // getCharacters();
    // getLocations();
    // getEpisodes();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        getCharacters,
        getLocations,
        getEpisodes,
        characters,
        searchCharacters,
        characterDetails,
        characterEpisodes,
        getCharacterDetails,
        episodes,
        searchEpisodes,
        episodeDetails,
        getEpisodeDetails,
        locations,
        searchLocations,
        locationResidents,
        locationDetails,
        getLocationDetails,
        loadMore,
        loading,
        fetchDetailsData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
