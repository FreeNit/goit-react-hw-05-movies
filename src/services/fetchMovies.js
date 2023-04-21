import axios from 'axios';

const API_KEY = 'b881a81ae0034e0912ae6be6c107d550';
const BASIC_URL = 'https://api.themoviedb.org/3';

// -> список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
// https://api.themoviedb.org/3/trending/movie/day?api_key=b881a81ae0034e0912ae6be6c107d550

async function fetchPopularMovies() {
  try {
    const uri = `${BASIC_URL}/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios.get(uri);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchPopularMovies;
