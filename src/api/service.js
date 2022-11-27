import axios from 'axios';

const baseURL = (path) => `https://rickandmortyapi.com/api/${path}`;

class ApiService {
  static getCharacters(page) {
    return axios(baseURL(`character?page=${page}`));
  }
  static getEpisodes(page) {
    return axios(baseURL(`episodes?page=${page}`));
  }
  static getLocations(page) {
    return axios(baseURL(`locations?page=${page}`));
  }

  static getNextPage(path) {
    return axios(path);
  }

  static searchCharacters(name = '', status = '', species = '', gender = '') {
    return axios(
      baseURL(
        `character/?name=${name}&status=${status}&species=${species}&gender=${gender}`,
      ),
    );
  }
  static searchEpisodes(name = '', type = '', dimension = '') {
    return axios(
      baseURL(`character/?name=${name}&type=${type}&dimension=${dimension}`),
    );
  }
  static searchLocations(name = '') {
    return axios(baseURL(`character/?name=${name}`));
  }
}

export default ApiService;
