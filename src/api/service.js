import axios from 'axios';

const baseURL = (path) => `https://rickandmortyapi.com/api/${path}`;

class ApiServices {
  static getCharacters(page) {
    return axios(baseURL(`character?page=${page}`));
  }
  static getLocations(page) {
    return axios(baseURL(`location?page=${page}`));
  }
  static getEpisodes(page) {
    return axios(baseURL(`episode?page=${page}`));
  }

  static getNextPage(path) {
    return axios(path);
  }

  static searchCharacters(name, species, gender, status) {
    return axios(
      baseURL(
        `character/?name=${name}&species=${species}&gender=${gender}&status=${status}`,
      ),
    );
  }
}

export default ApiServices;
