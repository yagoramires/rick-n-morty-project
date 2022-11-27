import { useContext, createContext, useEffect, useState } from 'react';

import ApiService from '../api/service';

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [locations, setLocations] = useState([]);

  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');

  const [page, setPage] = useState(1);

  const getCharacters = async () => {
    const {
      data: { info, results },
    } = await ApiService.getCharacters(page);

    setPreviousPage(info.prev);
    setNextPage(info.next);
    setCharacters(results);
  };

  const getEpisodes = async () => {
    const {
      data: { info, results },
    } = await ApiService.getEpisodes(page);

    setPreviousPage(info.prev);
    setNextPage(info.next);
    setEpisodes(results);
  };

  const getLocations = async () => {
    const {
      data: { info, results },
    } = await ApiService.getLocations(page);

    setPreviousPage(info.prev);
    setNextPage(info.next);
    setLocations(results);
  };

  const getNextPage = async () => {
    const {
      data: { info, results },
    } = await ApiService.getNextPage(nextPage);

    setNextPage(info.next);
    setCharacters([...characters, ...results]);
  };

  const searchEpisodes = async (name, status, species, gender) => {
    const {
      data: { info, results },
    } = await ApiService.searchCharacters(name, status, species, gender);

    setPreviousPage(info.prev);
    setNextPage(info.next);
    setCharacters(results);
  };

  const searchCharacters = async (name, type, dimension) => {
    const {
      data: { info, results },
    } = await ApiService.searchCharacters(name, type, dimension);

    setPreviousPage(info.prev);
    setNextPage(info.next);
    setCharacters(results);
  };

  const searchLocations = async (name) => {
    const {
      data: { info, results },
    } = await ApiService.searchCharacters(name);

    setPreviousPage(info.prev);
    setNextPage(info.next);
    setCharacters(results);
  };

  useEffect(() => {
    getCharacters();
    getLocations();
    getEpisodes();
  }, []);

  console.log(characters);
  return (
    <ApiContext.Provider
      value={{ characters, episodes, locations, getNextPage, searchCharacters }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
