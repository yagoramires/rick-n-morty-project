import React, { createContext, useContext, useEffect, useState } from 'react';
import ApiService from '../api/service';

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  //   const [episodes, setEpisodes] = useState([]);
  //   const [locations, setLocations] = useState([]);

  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState('');

  const getCharacters = async () => {
    const {
      data: { info, results },
    } = await ApiService.getCharacters(page);
    console.log(info.next);
    setNextPage(info.next);
    setCharacters(results);
  };

  //   const getLocations = async () => {
  //     const {
  //       data: { results },
  //     } = await ApiService.getLocations();

  //     setLocations(results);
  //   };

  //   const getEpisodes = async () => {
  //     const {
  //       data: { results },
  //     } = await ApiService.getEpisodes(page);

  //     setEpisodes(results);
  //   };

  const getNextPage = async () => {
    const {
      data: { info, results: nextResults },
    } = await ApiService.getNextPage(nextPage);
    setNextPage(info.next);
    setCharacters([...characters, ...nextResults]);
  };

  const searchCharacters = async (name, species, gender, status) => {
    const {
      data: { info, results },
    } = await ApiService.searchCharacters(name, species, gender, status);
    setNextPage(info.next);
    setCharacters(results);
  };

  useEffect(() => {
    getCharacters();
    // getLocations();
    // getEpisodes();
  }, []);

  return (
    <ApiContext.Provider
      value={{ characters, nextPage, getNextPage, searchCharacters }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
