import axios from 'axios';

const baseURL = (path) => `https://rickandmortyapi.com/api/${path}`;

class ApiService {
  // Get All Characters
  static getCharacters(page) {
    return axios(baseURL(`character`));
  }
  // Filter Characters
  static searchCharacters(name = '', status = '', species = '', gender = '') {
    return axios(
      baseURL(
        `character/?name=${name}&status=${status}&species=${species}&gender=${gender}`,
      ),
    );
  }
  // Get Character Details
  static getCharacterDetails(id) {
    return axios(baseURL(`character/${id}`));
  }

  // Get All Locations
  static getLocations(page) {
    return axios(baseURL(`location`));
  }
  // Filter Locations
  static searchLocations(name = '', type = '', dimension = '') {
    return axios(
      baseURL(`location/?name=${name}&type=${type}&dimension=${dimension}`),
    );
  }
  // Get Location Details
  static getLocationDetails(id) {
    return axios(baseURL(`location/${id}`));
  }

  // Get All Episodes
  static getEpisodes(page) {
    return axios(baseURL(`episode`));
  }
  // Filter Episodes
  static searchEpisodes(name = '') {
    return axios(baseURL(`episode/?name=${name}`));
  }
  // Get Episode Details
  static getEpisodeDetails(id) {
    return axios(baseURL(`episode/${id}`));
  }

  // Load next page info for all contents
  static getNextPage(path) {
    return axios(path);
  }

  // Get details array info
  static getDetailsInfo(url) {
    return axios(url);
  }
}

export default ApiService;
