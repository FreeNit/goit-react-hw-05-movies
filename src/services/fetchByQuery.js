import axios from 'axios';

import { BASIC_URL, API_KEY } from './constants';

async function fetchByQuery(query) {
  try {
    const uri = `${BASIC_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`;
    const response = axios.get(uri);
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

export default fetchByQuery;
