import { useContext, createContext, useEffect, useState } from 'react';

import ApiService from '../api/service';

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  // STATES
  const [characters, setCharacters] = useState([]);
  const [charactersPage, setCharactersPage] = useState('');

  const [locations, setLocations] = useState([]);
  const [locationsPage, setLocationsPage] = useState('');

  const [episodes, setEpisodes] = useState([]);
  const [episodesPage, setEpisodesPage] = useState('');

  const [loading, setLoading] = useState(false);

  // FUNÇÕES DE CARREGAR PERSONAGENS, EPISÓDIOS E LOCALIZAÇÕES
  const getCharacters = async () => {
    const {
      data: { info, results },
    } = await ApiService.getCharacters();

    setCharactersPage(info.next);
    setCharacters(results);
  };

  const getLocations = async () => {
    const {
      data: { info, results },
    } = await ApiService.getLocations();

    setLocationsPage(info.next);
    setLocations(results);
  };

  const getEpisodes = async () => {
    const {
      data: { info, results },
    } = await ApiService.getEpisodes();

    setEpisodesPage(info.next);
    setEpisodes(results);
  };

  const searchCharacters = async (name, status, species, gender) => {
    const {
      data: { info, results },
    } = await ApiService.searchCharacters(name, status, species, gender);

    setCharactersPage(info.next);
    setCharacters(results);
  };

  const searchLocations = async (name, type, dimension) => {
    const {
      data: { info, results },
    } = await ApiService.searchLocations(name, type, dimension);

    setLocationsPage(info.next);
    setLocations(results);
  };

  const searchEpisodes = async (name) => {
    const {
      data: { info, results },
    } = await ApiService.searchEpisodes(name);

    setEpisodesPage(info.next);
    setEpisodes(results);
  };

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
    // if (type === 'locations') {
    //   if (locationsPage === null) {
    //     return;
    //   }
    //   const {
    //     data: { info, results },
    //   } = await ApiService.getNextPage(locationsPage);

    //   setLocationsPage(info.next);
    //   setLocations([...locations, ...results]);
    //   setLoading(false);
    //   return;
    // }
    // if (type === 'episodes') {
    //   if (episodesPage === null) {
    //     return;
    //   }
    //   const {
    //     data: { info, results },
    //   } = await ApiService.getNextPage(episodesPage);

    //   setEpisodesPage(info.next);
    //   setEpisodes([...episodes, ...results]);
    //   setLoading(false);
    //   return;
    // }
  };

  useEffect(() => {
    getCharacters();
    getLocations();
    getEpisodes();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        characters,
        episodes,
        locations,
        loadMore,
        searchCharacters,
        searchLocations,
        searchEpisodes,
        loading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
