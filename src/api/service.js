import axios from 'axios';

const baseURL = (path) => `https://rickandmortyapi.com/api/${path}`;

class ApiService {
  static getCharacters(page) {
    return axios(baseURL(`character`));
  }
  static getEpisodes(page) {
    return axios(baseURL(`episode`));
  }
  static getLocations(page) {
    return axios(baseURL(`location`));
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
  static searchLocations(name = '', type = '', dimension = '') {
    return axios(
      baseURL(`location/?name=${name}&type=${type}&dimension=${dimension}`),
    );
  }
  static searchEpisodes(name = '') {
    return axios(baseURL(`episode/?name=${name}`));
  }

  static searchChar(id) {
    return axios(baseURL(`character/${id}`));
  }

  static searchLoc(id) {
    return axios(baseURL(`location/${id}`));
  }
}

export default ApiService;
