import axios from 'axios';

import { API_KEY, BASIC_URL } from './constants';

async function fetchMovieDetails(movieID) {
  try {
    const uri = `${BASIC_URL}/movie/${movieID}?api_key=${API_KEY}`;
    const response = await axios.get(uri);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchMovieDetails;
