import axios from 'axios';

import { API_KEY, BASIC_URL } from './constants';

async function fetchMoviesCredits(movieID) {
  try {
    const uri = `${BASIC_URL}/movie/${movieID}/credits?api_key=${API_KEY}`;
    const response = axios.get(uri);
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

export default fetchMoviesCredits;
